
import { InitialState, Employees } from "./loginState";

export interface Action {
  type: string,
  payload: any
}

export default (state : InitialState, action: Action) => {
    switch (action.type) {
      default:
        return state;
    }
  };