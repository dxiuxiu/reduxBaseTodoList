import axios from "axios";

const initialState = {
  fetchTodosPending: false,
  todos: []
};

export const fetchTodos = () => {
  return dispatch => {
    axios
      .get(
        "https://www.easy-mock.com/mock/5d4d0506c7e37172f1f6862b/example/todolist"
      )
      .then(res => {
        const data = res.data;
        dispatch({
          type: "FETCH_TODO_SUCCESS",
          data
        });
      });
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_TODO_BEGIN":
      return {
        ...state,
        fetchTodosPending: true
      };
    case "FETCH_TODO_SUCCESS":
      return {
        ...state,
        fetchTodosPending: false,
        todos: action.data
      };
    case "FETCH_TODO_FAILURE":
      return {
        ...state,
        fetchTodosPending: false,
        todos: []
      };
    default:
      return state;
  }
}
