import { Dispatch, Reducer, ReducerAction } from "react";
import { REACH_CALCULATOR_STATE } from "./state";
import { Action } from "./action";

export type DispatchThunk = Dispatch<
  ReducerAction<Reducer<REACH_CALCULATOR_STATE, Action>>
>;
