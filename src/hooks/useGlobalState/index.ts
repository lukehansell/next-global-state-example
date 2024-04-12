import { createContext, useContext } from "react";
import { STATE } from "./types";

export const StateContext = createContext(null);
export const StateDispatchContext = createContext(null);

export function useGlobalState(): [STATE | null, any] {
  const state = useContext(StateContext);
  const dispatch = useContext(StateDispatchContext);
  return [state, dispatch];
}
