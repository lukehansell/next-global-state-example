import { Reducer, ReducerWithoutAction, useReducer } from "react";

export default function useReducerWithThunk(reducer, initalState) {
  const [state, dispatch] = useReducer(reducer, initalState);

  const customDispatch = (action: any) => {
    if (typeof action === 'function') {
      action(customDispatch)
    } else {
      dispatch(action)
    }
  }

  return [state, customDispatch]
}