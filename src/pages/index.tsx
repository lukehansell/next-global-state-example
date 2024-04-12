import { useState } from "react";
import { STATE } from "../hooks/useGlobalState/types";
import { reducer } from "../hooks/useGlobalState/reducer";
import { StateContext, StateDispatchContext } from "../hooks/useGlobalState";
import TabSelector from "../components/tabSelector";
import Tab1 from "../tabs/tab1";
import useReducerWithThunk from "../hooks/useReducerWithThunk";

const initialState: STATE = {
  search: {
    name: ''
  },
};

export default function Home() {
  const [state, dispatch] = useReducerWithThunk(reducer, initialState)
  const [selectedTab, setSelectedTab] = useState(1)

  return (
    <StateContext.Provider value={state}>
      <StateDispatchContext.Provider value={dispatch}>
        <div>
          <TabSelector selectedTab={selectedTab} onChange={setSelectedTab} />
          {selectedTab === 1 && <Tab1 />}
        </div>
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  );
}
