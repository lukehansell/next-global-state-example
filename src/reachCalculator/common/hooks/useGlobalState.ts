import { createContext, useContext } from "react";
import { REACH_CALCULATOR_STATE } from "../types/state";
import { initialState } from "../state/initialState";
import { DispatchThunk } from "../types/dispatchThunk";

export const StateContext = createContext<REACH_CALCULATOR_STATE>(initialState);
export const StateDispatchContext = createContext<DispatchThunk>(() => {});

export function useGlobalState(): [REACH_CALCULATOR_STATE, any] {
  const state = useContext(StateContext);
  const dispatch = useContext(StateDispatchContext);
  return [state, dispatch];
}
