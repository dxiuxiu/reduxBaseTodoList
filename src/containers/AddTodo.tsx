import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/todos";
import { Dispatch } from 'redux';
let AddTodo = ({ dispatch }: { dispatch: Dispatch }) => {
  let input: any;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};


export default connect()(AddTodo)

// AddTodo = connect()(AddTodo); // react-redux 的 connect() 方法用于生成容器组件
// export default AddTodo;
