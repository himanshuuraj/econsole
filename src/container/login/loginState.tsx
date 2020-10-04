import React, { createContext, useReducer } from "react";
import HomeReducer from "./loginReducer";

type AddorEditEmployee = (employees: Employees) => void;
type RemoveEmployee = (id: number) => void;

export interface Employees {
  email: string,
  password: string
}

export interface InitialState {
  employees: Array<Employees>,
  addEmployee : AddorEditEmployee,
  removeEmployee : RemoveEmployee,
  editEmployee : AddorEditEmployee
}

const initialState: InitialState = {
  employees: [],
  addEmployee: (employees: Employees) => { },
  removeEmployee: (id: number) => { },
  editEmployee: (employees: Employees) => { },
};

interface ProviderProps {
  employees: Array<Employees>,
  removeEmployee: (id: number) => void,
  addEmployee: (employees: Employees) => void,
  editEmployee: (employees: Employees) => void
}

export const GlobalContext = createContext<InitialState>(initialState);
export const GlobalProvider = ({ children } : any) => {
  const [state, dispatch] = useReducer(HomeReducer, initialState);

  function removeEmployee(id: number) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id
    });
  }

  function addEmployee (employees: Employees) {
    dispatch({
      type: "ADD_EMPLOYEES",
      payload: employees
    });
  }

  function editEmployee(employees: Employees) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employees
    });
  }

  let providerProps: ProviderProps = {
    employees: state.employees,
    removeEmployee,
    addEmployee,
    editEmployee
  }

  return (
    <GlobalContext.Provider
      value={providerProps}
    >
      {children}
    </GlobalContext.Provider>
  );
};