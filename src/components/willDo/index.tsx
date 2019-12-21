import React , { useState }from 'react'

import { ITodoList } from '../../actions/todoList'

interface IProps{
    list: ITodoList
    willDoneEvent: (id: number) => void
    del: (id: number) => void
}
export default function WillDo(props:IProps){

    const [check, setCheck] = useState(false)

    function del() {
        props.del(props.list.id)
    }

    function change() {
        props.willDoneEvent(props.list.id)
    }
    return (
        <div>
            <input type="checkbox" 
            name="" 
            checked={check} 
            onClick={() => {setCheck(!check)}} 
            onChange = {change} 
            id={`${props.list.id}`}/>
            {props.list.text}
            <button onClick = {del}>删除</button>
        </div>
    )
}