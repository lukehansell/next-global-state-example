import { ACTIONS } from "../types/actions";
import { PLATFORM_REACH_STATE } from "../types/state";

export function reducer(state: PLATFORM_REACH_STATE, action: any) {
  if (action.type == ACTIONS.UPDATE_PLATFORM_RESULT) {
    return {
      ...state,
      result: action.payload,
    };
  }

  return state;
}
