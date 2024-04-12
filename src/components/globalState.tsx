import { useReducer } from "react"
import { reducer } from "../hooks/useGlobalState/reducer"
import { StateContext, StateDispatchContext } from "../hooks/useGlobalState"

export function GlobalState({
  children
}: {
  children: any
}) {
  const [state, dispatch] = useReducer(reducer, {
    search: {
      name: ''
    },
    result: undefined
  })

  return (
    <StateContext.Provider value={state}>
      <StateDispatchContext.Provider value={dispatch}>
        {children}
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  )
}