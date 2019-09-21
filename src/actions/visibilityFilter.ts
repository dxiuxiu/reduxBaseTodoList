const initialState = "SHOW_ALL";

export interface IFilterAction {
  type: string,
  filter: string
}
export const setVisibilityFilter = (filter: string) => {
  console.log(filter);
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
};

export default function reducer(state = initialState, action: IFilterAction) {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}
