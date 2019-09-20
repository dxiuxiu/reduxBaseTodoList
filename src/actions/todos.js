let nextTodoId = 0;

const initialState = [];

export const addTodo = text => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
};

export const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};




/**
 * @desc 实现 reducer - Reducer 方法内部描述了怎样依据 action 去改变 state
 * @param state - 当前组件间共享的数据
 * @param action 
 * action = {
 * 动作类别,
 * 动作参数
 * }
 * 
 * @return state
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO": // 如果是添加就在原有的 state 中添加新增数据项
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}
