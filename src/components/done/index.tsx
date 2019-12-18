import React, { useState } from 'react'

import { ITodoList } from '../../App'
interface IProps {
    list: ITodoList
    doneEvent: (id: number) => void
    del: (id: number) => void
}

export default function Done(props: IProps) {

    const [check, setCheck] = useState(true)

    function del() {
        props.del(props.list.id)
    }

    function change() {
        props.doneEvent(props.list.id)
    }

    return (
        <div>
            <input type="checkbox" name="" 
            checked={check} 
            onClick={() => {setCheck(!check)}} 
            onChange = {change}
            id={`${props.list.id}`} />
            {props.list.text}
            <button onClick={del}>删除</button>
        </div>
    )
}