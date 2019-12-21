
// export interface ITodoList {
//     id: number
//     status?: 'done' | 'willDo'
//     text?: string
// }
export interface IToDoAction {
    type: string,
    id: number | string,
    text?: string
    status?: string
}

/** 为 state 定义类型后会报错 Types of parameters 'state' and 'state' are incompatible. */
const todoList: any[] = []


export const done = (id: number) => {
    return {
        type: "DONE",
        id,
    }
}

export const willDon = (id: number) => {
    return {
        type: "WILLDO",
        id,
    }
}
export const add = (text: string) => {
    return {
        type: "ADD",
        id: Math.random(),
        text,
        status: 'willDo'
    }
}
export const del = (id: number) => {
    return {
        type: "DEL",
        id,
    }
}

export default function reducer(state:any[] = todoList, action: IToDoAction) {
    switch (action.type) {
        case 'ADD':
            return [
                ...todoList,
                {
                    id: action.id,
                    text: action.text,
                    status: action.status
                }
            ]
        case 'DONE':
            return state.map(item => {
                if(item.id === action.id){
                    item.status = 'done'
                }
                return item
            })
        case 'WILLDO':
            return state.map(item => {
                if(item.id === action.id){
                    item.status = 'willDo'
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