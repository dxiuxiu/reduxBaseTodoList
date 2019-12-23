# 我的记录

[我要实现的 todolist](http://www.todolist.cn/)

[react中 input 绑定 enter 事件](https://www.jianshu.com/p/01c8886e0483)

[react中input自动聚焦问题](https://www.cnblogs.com/sunLemon/p/9020882.html)

# redux 版

## error -  Types of parameters 'state' and 'state' are incompatible.

`错误原因 - 为 state 值定义了类型`

`修改` - state 定义为 any 即可

为什么嘞??????

```javascript

 export interface ITodoList {
     id: number
     status?: 'done' | 'willDo'
     text?: string
 }
export interface IToDoAction {
    type: string,
    id: number | string,
    text?: string
    status?: string
}

const todoList: any[] = []
/** 为 state 定义类型后会报错 Types of parameters 'state' and 'state' are incompatible. */
// const todoList: ITodoList[] = []



export default function reducer(state:any[] = todoList, action: IToDoAction) {
    switch (action.type) {
        case 'ADD':
            return [
                ...todoList,
                {
                    id: action.id,
                    text: action.text,
                    status: action.status
                }
            ]
        default:
            return state

    }
}
```

## error2- 'DoneAction' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.  TS7022

```javascript
const DoneAction  = connect(mapStateToProps,mapDispatchToProps)(Done)
export default  DoneAction
```

[问题详解参考](https://www.520mwx.com/view/52982)

## erroe3

All files must be modules when the '--isolatedModules' flag is provided.

[](https://github.com/Microsoft/TypeScript/issues/15230)

## error

×
Error: It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.

`添加 [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) 报错代码`
```javascript
import {applyMiddleware,createStore,combineReducers} from 'redux'
import {createLogger} from 'redux-logger'
import todoList from '../reducers/todoList'
const reducer = combineReducers({
    todoList,
})
const logger = createLogger()
// [createstore](https://redux.js.org/api/createstore#createstorereducer-preloadedstate-enhancer)
const store = createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(logger)
)

export default store
export {}
```

`添加 [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)`
```javascript
import {applyMiddleware,createStore,combineReducers,compose} from 'redux'
import {createLogger} from 'redux-logger'

import todoList from '../reducers/todoList'

const reducer = combineReducers({
    todoList,
})

const logger = createLogger()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(logger),
  );
// [createstore](https://redux.js.org/api/createstore#createstorereducer-preloadedstate-enhancer)
const store = createStore(reducer,enhancer)

export default store

export {}
```

`未添加 [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)`
```javascript
import {applyMiddleware,createStore,combineReducers} from 'redux'
import {createLogger} from 'redux-logger'

import todoList from '../reducers/todoList'

const reducer = combineReducers({
    todoList,
})

const logger = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(logger)
)

export default store
```