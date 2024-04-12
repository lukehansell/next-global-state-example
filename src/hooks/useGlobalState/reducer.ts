import { STATE } from "./types";

export function reducer(state: STATE, action: any) {
  if (action.type == "UPDATE_RESULT") {
    return {
      ...state,
      result: {
        ...state.search,
        name: action.payload.name,
        age: action.payload.age,
      },
    };
  }

  if (action.type == "UPDATE_SEARCH") {
    return {
      ...state,
      search: {
        name: action.payload,
      },
    };
  }

  return state;
}
