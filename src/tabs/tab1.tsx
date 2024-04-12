import getUserDetails from "../actions/getUserDetails";
import Card from "../components/card";
import Form from "../components/form";
import { useGlobalState } from "../hooks/useGlobalState";

export default function Tab1() {
const [state, dispatch] = useGlobalState()

  function handleSubmit(name: string) {
    dispatch(getUserDetails(name))
  }

  return (
    <>
      <Form onSubmit={handleSubmit} />
      <div style={{
        display: 'flex',
        gap: 5,
        padding: 5
      }}>
        {state?.result && (
          <Card name={state.result.name} age={state.result.age} />
        )}
      </div>
    </>
  )
}