import {connect} from 'react-redux'
import {willDone, del, ITodoList} from '../../actions/todolist'
import {Dispatch} from 'redux'
// import Done ,{IProps}from '../done'
import Done from '../../components/done'
import {IStoreState} from '../../store'
interface IProps {
    list: ITodoList
    doneEvent: (id: number) => void
    del: (id: number) => void
}
const mapStateToProps = (state:IStoreState,ownProps:IProps) => {
    console.log(state)
    console.log(ownProps)
    return {
        list:state.todoList
    }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IProps) => {
    return {
        doneEvent :() => {
          dispatch(willDone(ownProps.list.id))
      }  ,
      del: () => {
        dispatch(del(ownProps.list.id))
      }
    }
}

const connector   = connect(mapStateToProps,mapDispatchToProps)
const result:any = connector(Done as any)

// const result:any   = connect(mapStateToProps,mapDispatchToProps)(Done)

export default  result

export function fixModuleError(){
    return result
}
