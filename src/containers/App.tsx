
import App from '../pages/App'

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { IStoreState } from '../store'
import { willToDone, doneToWill,del, add } from '../actions/todoList'

interface IProps {
}

const mapStateToProps = (state: IStoreState, ownProps: IProps) => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IProps) => {
    return {
        willToDone: (id: number ) => {
            dispatch(willToDone(id))
        },
        del: (id: number) => {
            dispatch(del(id))
        },
        doneToWill: (id: number) => {
            dispatch(doneToWill(id))
        },
        add: (text:string) => {
            console.log('dispatch', text)
            dispatch(add(text))
         }
    }
}
const connector = connect(mapStateToProps, mapDispatchToProps)
export default connector(App as any)