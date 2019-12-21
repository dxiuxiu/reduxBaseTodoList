

import React from 'react'

import WillDo from './components/willDo'
import Done from './components/done'

import { willDone, del, done, add, ITodoList } from './actions/todolist'
import store from './store'


interface IProps {
    todoList:ITodoList[]
    add:(text:string) => void
    willDone:(id:number) => void
    del:(id:number) => void
    done:(id:number) => void
}


export default class App extends React.Component<IProps> {
    input: any // 输入框
    // constructor(props: IProps) {
    //     super(props)
    // }

    componentDidMount() {
        /** 组件挂载成功后让 input 获取焦点 */
        this.input.focus();
    }

    handleEnterKey = (e: any) => {
        const keyCode = e.nativeEvent.keyCode
        if (keyCode === 13) {
            this.addEvent(this.input.value)
            this.input.value = ''
        }
    }

    addEvent = (text:string) => {
        console.log(text)
        // add(text)
        this.props.add(text)
        // store.dispatch(add(text))
        // console.log(store.getState())
    }

    createDone = () => {
        return this.props.todoList.map((item) => {
            let result: any
            if (item.status === 'done') {
                result = <Done key={item.id} list={item} doneEvent={this.doneEvent} del={this.del} />
            }
            return result
        })
    }

    createWillDo = () => {
        console.log()
        return this.props.todoList.map((item) => {
            let result: any
            if (item.status === 'willDo') {
                result = <WillDo key={item.id} list={item} willDoneEvent={this.willDoneEvent} del={this.del} />
            }
            return result
        })
    }

    /** 已完成 -> 即将实现 */
    doneEvent = (id: number) => {
        this.props.willDone(id)
    }
    willDoneEvent = (id: number) => {
        this.props.done(id)
    }
    del = (id: number) => {
        this.props.del(id)
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

export { }