import { PLATFORM_REACH_STATE } from "../../platformReach/state/types/state";
import { CAMPAIGN_REACH_STATE } from "../../campaignReach/state/types/state";

export type REACH_CALCULATOR_STATE = {
  platformReach: PLATFORM_REACH_STATE;
  campaignReach: CAMPAIGN_REACH_STATE;
};
