import {actionType,listStatus}  from './constants/todoList'

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


/** 为 state 定义类型后会报错 Types of parameters 'state' and 'state' are incompatible. */
// const initTodoList: any[] = []
const initTodoList: any[] = [
    {
        id: 0.186864004695098,
        status: listStatus.WILLDO,
        text: "sbfynhjum1111"
    },
    {
        id: 0.186866666695098,
        status: listStatus.WILLDO,
        text: "vxbgym666"
    },
    {
        id: 0.186865004695778,
        status: listStatus.DONE,
        text: "5555555"
    },
    {
        id: 0.1861115004695778,
        status: listStatus.DONE,
        text: "fffff9999999999"
    }
]

/** 
 * @desc 将列表状态修改为已完成 
 * 
*/
export const willToDone = (id: number) => {
    return {
        type: actionType.DONE,
        id,
    }
}

/** 
 * @desc 将列表状态修改为 已完成 
 * 
*/
export const doneToWill = (id: number) => {
    return {
        type: actionType.WILLDO,
        id,
    }
}
/** 
 * @desc 将列表状态修改为 已完成 
 * 
*/
export const add = (text: string) => {
    console.log('add action content', text)
    return {
        type: actionType.ADD,
        id: Math.random(),
        text,
        status: listStatus.WILLDO
    }
}
/** 
 * @desc 将列表状态修改为 已完成 
 * 
*/
export const del = (id: number) => {
    return {
        type: actionType.DEL,
        id,
    }
}

export default function reducer(state:any[] = initTodoList, action: IToDoAction) {
    // console.log('reducer')
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    status: action.status
                }
            ]
        case 'DONE':
            return state.map(item => {
                if(item.id === action.id){
                    item.status = listStatus.DONE
                }
                return item
            })
        case 'WILLDO':
            return state.map(item => {
                if(item.id === action.id){
                    item.status = listStatus.WILLDO
                }
                return item
            })

        case 'DEL':
            return state.filter(item => item.id !== action.id)
        default:
            return state

    }
}
// export default reducer