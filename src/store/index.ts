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
    applyMiddleware(logger)
)

export default store

export {}