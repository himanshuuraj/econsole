import React, { createContext, useReducer } from "react";
import HomeReducer from "./homeReducer";
import loginReducer from "../login/loginReducer";

type AddorEditEmployee = (employees: LoginDetails) => void;
type RemoveEmployee = (id: number) => void;

export interface LoginDetails {
  email: string,
  password: string,
}

export interface InitialState {
  employees: Array<LoginDetails>,
  addEmployee : AddorEditEmployee,
  removeEmployee : RemoveEmployee,
  editEmployee : AddorEditEmployee
}

const initialState: InitialState = {
  employees: [],
  addEmployee: (employees: LoginDetails) => { },
  removeEmployee: (id: number) => { },
  editEmployee: (employees: LoginDetails) => { },
};

interface ProviderProps {
  employees: Array<LoginDetails>,
  removeEmployee: (id: number) => void,
  addEmployee: (employees: LoginDetails) => void,
  editEmployee: (employees: LoginDetails) => void
}

export const GlobalContext = createContext<InitialState>(initialState);
export const GlobalProvider = ({ children } : any) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  let obj: any = {};
  return (
    <GlobalContext.Provider value={obj}>
      {children}
    </GlobalContext.Provider>
  );
};