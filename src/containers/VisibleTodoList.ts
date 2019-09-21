import { connect } from "react-redux";
import { toggleTodo } from "../actions/todos";
import TodoList from "../components/TodoList";


const getVisibleTodos = (todos: any[], filter: string) => {
  switch (filter) {
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    case "SHOW_ALL":
    default:
      return todos;
  }
};


/** 
 * @desc 使用 connect() 前，
 * 需要先定义 mapStateToProps 这个函数
 * 来指定如何把当前 Redux store state 映射到展示组件的 props 中。
 */
const mapStateToProps = (state: any) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

/** 
 * @desc 类似 mapStateToProps
 * 定义 mapDispatchToProps() 方法
 * 分发 action
 * @param dispatch - dispatch() 方法
 * @return 期望注入到展示组件的 props 中的回调方法
 * 
 * 
 */
const mapDispatchToProps = (dispatch: any) => {
  return {
    onTodoClick: (id: any) => {
      /**
       * @desc 
       * dispatch(action)
       */
      dispatch(toggleTodo(id));
    }
  };
};

/** 
 * @desc connect() 方法生成容器组件 - 关联展示组件与 redux 
 * 
 */
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
