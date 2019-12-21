import {applyMiddleware,createStore,combineReducers} from 'redux'
import {createLogger} from 'redux-logger'

import todoList from './actions/todolist'
const reducer = combineReducers({
    todoList,
})

const logger = createLogger()

const store = createStore(
    reducer,
    applyMiddleware(logger)
)

export default store