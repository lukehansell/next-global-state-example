import { Reducer, useState } from "react";
import { StateContext, StateDispatchContext } from "../reachCalculator/common/hooks/useGlobalState";
import TabSelector from "../reachCalculator/common/components/tabSelector";
import PlatformReachTab from "../reachCalculator/platformReach/components/tab";
import CampaignReachTab from "../reachCalculator/campaignReach/components/tab";
import useReducerWithThunk from "../reachCalculator/common/hooks/useReducerWithThunk";
import { REACH_CALCULATOR_STATE } from "../reachCalculator/common/types/state";
import { reducer } from "../reachCalculator/common/state/reducer";
import { initialState } from "../reachCalculator/common/state/initialState";
import { Action } from "../reachCalculator/common/types/action";

export enum TABS {
  PLATFORM_REACH,
  CAMPAIGN_REACH
}

export default function Home() {
  const [state, dispatch] = useReducerWithThunk<Reducer<REACH_CALCULATOR_STATE, Action>>(reducer, initialState)
  const [selectedTab, setSelectedTab] = useState(TABS.PLATFORM_REACH)

  return (
    <StateContext.Provider value={state}>
      <StateDispatchContext.Provider value={dispatch}>
        <div style={{
          padding: 5
        }}>
          <TabSelector selectedTab={selectedTab} onChange={setSelectedTab} tabs={[{
            name: 'Platform Reach',
            value: TABS.PLATFORM_REACH
          }, {
            name: 'Campaign Reach',
            value: TABS.CAMPAIGN_REACH
          }]}/>
          {selectedTab === TABS.PLATFORM_REACH && <PlatformReachTab />}
          {selectedTab === TABS.CAMPAIGN_REACH && <CampaignReachTab />}
        </div>
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  );
}
