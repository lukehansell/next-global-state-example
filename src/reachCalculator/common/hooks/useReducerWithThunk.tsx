import { Dispatch, Reducer, ReducerAction, ReducerState, useReducer } from "react";

export default function useReducerWithThunk<R extends Reducer<any, any>>(reducer: R, initalState: ReducerState<R>): [ReducerState<R>, Dispatch<ReducerAction<R>>] {
  const [state, dispatch] = useReducer<R>(reducer, initalState);

  const customDispatch = (action: ReducerAction<R>) => {
    if (typeof action === 'function') {
      action(customDispatch)
    } else {
      dispatch(action)
    }
  }

  return [state, customDispatch]
}