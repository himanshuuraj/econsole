
import { InitialState, Employees } from "./sidebarState";

export interface Action {
  type: string,
  payload: any
}

export default (state : InitialState, action: Action) => {
    switch (action.type) {
      case "REMOVE_EMPLOYEE":
        return {
          ...state,
          employees: state.employees.filter(
            (employee : Employees) => employee.id !== action.payload
          )
        };
      case "ADD_EMPLOYEES":
        return {
          ...state,
          employees: [...state.employees, action.payload]
        };
      case "EDIT_EMPLOYEE":
        const updatedEmployee = action.payload;
        const updatedEmployees = state.employees.map((employee: Employees) => {
          if (employee.id === updatedEmployee.id) {
            return updatedEmployee;
          }
          return employee;
        });
  
        return {
          ...state,
          employees: updatedEmployees
        };
      default:
        return state;
    }
  };