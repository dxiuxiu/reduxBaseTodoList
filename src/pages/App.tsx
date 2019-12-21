

import React from 'react'

import WillDo from './components/willDo'
import Done from './components/done'

import {ITodoList } from './actions/todolist'
import {listStatus} from './actions/constants/todoList'

interface IProps {
    todoList:ITodoList[] // todoList 数据
    add:(text:string) => void // 添加
    del:(id:number) => void // 删除
    doneToWill:(id:number) => void // 状态转化 :  已完成项 -> 待完成项 
    willToDone:(id:number) => void // 状态转化 :  待完成项 -> 已完成项  
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

    /**
     * @desc 回车事件监听
     *
     * @memberof App
     */
    handleEnterKey = (e: any) => {
        const keyCode = e.nativeEvent.keyCode
        if (keyCode === 13) {
            this.add(this.input.value)
            this.input.value = ''
        }
    }
    

    /**
     * @desc 添加 todoList 项 
     *
     * @memberof App
     */
    add = (text:string) => {
        console.log(text)
        // add(text)
        this.props.add(text)
        // store.dispatch(add(text))
        // console.log(store.getState())
    }


    /**
     * @desc 创建已完成项列表  
     *
     * @memberof App
     */
    createDone = () => {
        return this.props.todoList.map((item) => {
            let result: any
            if (item.status === listStatus.DONE) {
                result = <Done key={item.id} list={item} doneEvent={this.doneToWill} del={this.del} />
            }
            return result
        })
    }


    /**
     * @desc 创建待完成项列表  
     *
     * @memberof App
     */
    createWillDo = () => {
        return this.props.todoList.map((item) => {
            let result: any
            if (item.status === listStatus.WILLDO) {
                result = <WillDo key={item.id} list={item} willDoneEvent={this.willToDone} del={this.del} />
            }
            return result
        })
    }


     /**
     * @desc 已完成项 -> 待完成项 
     *
     * @memberof App
     */
    doneToWill = (id: number) => {
        this.props.doneToWill(id)
    }


    /**
     * @desc 待完成项 -> 已完成项  
     *
     * @memberof App
     */
    willToDone = (id: number) => {
        this.props.willToDone(id)
    }

    /**
     * @desc 删除指定项 
     *
     * @memberof App
     */
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