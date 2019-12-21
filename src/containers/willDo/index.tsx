import {connect} from 'react-redux'
import {willDone, del, ITodoList} from '../../actions/todolist'
import {Dispatch} from 'redux'
import WillDo from '../../components/willDo'
import {IStoreState} from '../../store'
interface IProps {
    list: ITodoList
    willDoneEvent: (id: number) => void
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
        willDoneEvent :() => {
          dispatch(willDone(ownProps.list.id))
      }  ,
      del: () => {
        dispatch(del(ownProps.list.id))
      }
    }
}

const connector   = connect(mapStateToProps,mapDispatchToProps)
const result:any = connector(WillDo as any)

// const result:any   = connect(mapStateToProps,mapDispatchToProps)(Done)

export default  result

export function fixModuleError(){
    return result
}
