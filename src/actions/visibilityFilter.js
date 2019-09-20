const initialState = "SHOW_ALL";

export const setVisibilityFilter = filter => {
  console.log(filter);
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}
