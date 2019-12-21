
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
