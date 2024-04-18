import getCampaignReach from "../state/actions/getCampaignReach";
import Card from "./card";
import Form from "./form";
import { useGlobalState } from "../../common/hooks/useGlobalState";

export default function Tab1() {
const [state, dispatch] = useGlobalState()

  function handleSubmit(minAge: number, maxAge: number) {
    dispatch(getCampaignReach(minAge, maxAge))
  }

  return (
    <>
      <h1>Campaign Reach</h1>
      <Form onSubmit={handleSubmit} />
      <div style={{
        display: 'flex',
        gap: 5,
        padding: 5
      }}>
        {state?.campaignReach.result && (
          <Card reach={state.campaignReach.result} />
        )}
      </div>
    </>
  )
}