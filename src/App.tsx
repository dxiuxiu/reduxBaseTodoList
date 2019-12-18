import React from 'react'

import WillDo from './components/willDo'
import Done from './components/done'
interface IProps {
}
interface IState {
    todoList: ITodoList[]
}
export interface ITodoList {
    id: number
    status: 'done' | 'willDo'
    text: string
}
export default class App extends React.Component<IProps, IState>{
    input: any // 输入框
    constructor(props: IProps) {
        super(props)
        this.state = {
            todoList: [
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
        }
    }

    componentDidMount() {
        /** 组件挂载成功后让 input 获取焦点 */
        this.input.focus();
    }

    handleEnterKey = (e: any) => {
        const keyCode = e.nativeEvent.keyCode
        if (keyCode === 13) {
            const todoList = this.state.todoList
            todoList.push({
                id: Math.random(),
                status: 'willDo',
                text: this.input.value
            })
            this.setState({
                todoList: todoList
            })
            this.input.value = ''
        }
    }

    createDone = () => {
        /** 注意 filter 与 map */
        return this.state.todoList.map((item) => {
            if (item.status === 'done') {
                return <Done key={item.id} list={item} doneEvent={this.doneEvent} del={this.del} />
            }
        })
    }

    createWillDo = () => {
        console.log()
        return this.state.todoList.map((item) => {
            if (item.status === 'willDo') {
                return <WillDo key={item.id} list={item} willDoneEvent={this.willDoneEvent} del={this.del} />
            }
        })
    }

    doneEvent = (id: number) => {
        const todoList = this.state.todoList
        for (const item of todoList) {
            if (item.id === id) {
                item.status = 'willDo'
            }
        }
        this.setState({
            todoList
        })
    }
    willDoneEvent = (id: number) => {
        const todoList = this.state.todoList
        for (const item of todoList) {
            if (item.id === id) {
                item.status = 'done'
            }
        }
        this.setState({
            todoList
        })

    }
    del = (id: number) => {
        const todoList = this.state.todoList.filter((item) => item.id!==id)
        this.setState({
            todoList
        })
    }
    render() {
        return (
            <div>
                <h1>todoList</h1>
                <input type="text" placeholder="请输入"
                    ref={input => this.input = input}
                    // onChange={() => { console.log(this.input.value) }}
                    onKeyPress={this.handleEnterKey} />
                <section>
                    <h3>待完成</h3>
                    {this.createWillDo()}
                </section>
                <section>
                    <h3>已完成</h3>
                    {this.createDone()}
                </section>

            </div>
        )
    }
}