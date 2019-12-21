import {applyMiddleware,createStore,combineReducers} from 'redux'
import {createLogger} from 'redux-logger'

import todoList,{ITodoList} from './actions/todoList'

export interface IStoreState {
    todoList: ITodoList[];
  }
const reducer = combineReducers({
    todoList,
})

const logger = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(logger)
)

export default store