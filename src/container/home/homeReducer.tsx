import { InitialState } from "./homeState";
import { Action } from "./../../global/global";

export default (state : InitialState, action: Action) => {
    switch (action.type) {
      case "REMOVE_EMPLOYEE":
        return {
        };
      case "ADD_EMPLOYEES":
        return {
          ...state,
          employees: [...state.employees, action.payload]
        };
      case "EDIT_EMPLOYEE":
        const updatedEmployee = action.payload;
        const updatedEmployees = {}
      default:
        return state;
    }
  };