import { ACTIONS } from "../types/actions"
import { DispatchThunk } from "../../../common/types/dispatchThunk"

export default function getPlatformReach(minAge: number, maxAge: number) {
  return async (dispatch: DispatchThunk) => {
    const res = await fetch(`/api/platform-reach?minAge=${minAge}&maxAge=${maxAge}`)
    const data = await res.json()

    dispatch({
      type: ACTIONS.UPDATE_PLATFORM_RESULT,
      payload: data
    })
  }
}