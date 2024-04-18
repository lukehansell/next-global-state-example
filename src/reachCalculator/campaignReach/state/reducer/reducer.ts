import { ACTIONS } from "../types/actions";
import { CAMPAIGN_REACH_STATE } from "../types/state";

export function reducer(state: CAMPAIGN_REACH_STATE, action: any) {
  if (action.type == ACTIONS.UPDATE_CAMPAIGN_RESULT) {
    return {
      ...state,
      result: action.payload,
    };
  }

  return state;
}
