
import App from './App'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { IStoreState } from './store'
import { willDone, del, done, add } from './actions/todolist'

interface IProps {
}



const mapStateToProps = (state: IStoreState, ownProps: IProps) => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IProps) => {
    return {
        willDone: (id: number ) => {
            dispatch(willDone(id))
        },
        del: (id: number) => {
            dispatch(del(id))
        },
        done: (id: number) => {
            dispatch(done(id))
        },
        add: (text:string) => {
            console.log('dispatch', text)
            dispatch(add(text))
         }
    }
}
const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(App as any)