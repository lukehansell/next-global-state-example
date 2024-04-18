import { Reducer } from "react";

function combineReducers(reducers: { [key: string]: Reducer<any, any> }) {
  return (state: any, action: any) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        [prop]: reducers[prop](acc[prop], action),
      };
    }, state);
  };
}

export default combineReducers;
