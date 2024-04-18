import combineReducers from "../lib/combineReducers";
import { reducer as platformReachReducer } from "../../platformReach/state/reducer/reducer";
import { reducer as campaignReachReducer } from "../../campaignReach/state/reducer/reducer";

export const reducer = combineReducers({
  platformReach: platformReachReducer,
  campaignReach: campaignReachReducer,
});
