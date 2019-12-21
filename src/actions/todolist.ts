
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
        status: "willDo",
        text: "sbfynhjum1111"
    },
    {
        id: 0.186866666695098,
        status: "willDo",
        text: "vxbgym666"
    },
    {
        id: 0.186865004695778,
        status: "done",
        text: "5555555"
    },
    {
        id: 0.1861115004695778,
        status: "done",
        text: "fffff9999999999"
    }
]

export const done = (id: number) => {
    return {
        type: "DONE",
        id,
    }
}

export const willDone = (id: number) => {
    return {
        type: "WILLDO",
        id,
    }
}
export const add = (text: string) => {
    console.log('add action content', text)
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

export default function reducer(state:any[] = initTodoList, action: IToDoAction) {
    console.log('reducer')
    switch (action.type) {
        case 'ADD':
            console.log('ADD')
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