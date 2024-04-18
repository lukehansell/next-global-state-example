import getPlatformReach from "../state/actions/getPlatformReach";
import Card from "./card";
import Form from "./form";
import { useGlobalState } from "../../common/hooks/useGlobalState";

export default function Tab1() {
  const [state, dispatch] = useGlobalState()

  function handleSubmit(minAge: number, maxAge: number) {
    dispatch(getPlatformReach(minAge, maxAge))
  }

  return (
    <>
      <h1>Platform Reach</h1>
      <Form onSubmit={handleSubmit} />
      <div style={{
        display: 'flex',
        gap: 5,
        padding: 5
      }}>
        {state?.platformReach.result && (
          <Card reachData={state.platformReach.result} />
        )}
      </div>
    </>
  )
}