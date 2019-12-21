import {applyMiddleware,createStore,combineReducers} from 'redux'
import {createLogger} from 'redux-logger'

import todoList from './reducer/todoList'
import {ITodoList} from './types/todoList'

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