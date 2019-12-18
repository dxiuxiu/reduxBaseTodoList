import { createStore, combineReducers, applyMiddleware } from "redux";
/** 
 * @desc redux-thunk
 * 处理异步操作
 */
import thunkMiddleware from "redux-thunk";

/** 
 * @desc redux-logger
 * 日志中间件
 */
import { createLogger } from "redux-logger";
import visibilityFilter from "./actions/visibilityFilter";
import todos from "./actions/todos";

const loggerMiddleware = createLogger();

/**
 * @desc 根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。
 * 
 */
const reducer = combineReducers({
  visibilityFilter,
  todos
});
/** 
 * @desc  生成 store 
 * 
*/
const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);
export default store
