import { ACTIONS } from "../types/actions";

export default function getUserDetails(minAge: number, maxAge: number) {
  return async (dispatch: any) => {
    const res = await fetch(
      `/api/campaign-reach?minAge=${minAge}&maxAge=${maxAge}`
    );
    const data = await res.json();

    dispatch({
      type: ACTIONS.UPDATE_CAMPAIGN_RESULT,
      payload: data.reach,
    });
  };
}
