import React, { createContext, useReducer } from "react";
import WidgetReducer from "./WidgetReducer";

type AddorEditWidget = (widgets: Widgets) => void;
type RemoveWidget = (id: string) => void;

export interface Widgets {
  id: string,
  name: string,
  description?: string,
}

export interface InitialWidgetState {
  widgets: Array<Widgets>,
  addWidget: AddorEditWidget
}

const initialWidgetState: InitialWidgetState = {
  widgets: [{
    id: "1",
    name: "Namexxxxxxxxxxx"
  }],
  addWidget: (widgets: Widgets): void => { }
};

interface ProviderProps {
  widgets: Array<Widgets>,
  addWidget: AddorEditWidget,
  editWidget: AddorEditWidget,
  removeWidget: RemoveWidget
}

export const WidgetContext = createContext<InitialWidgetState>(initialWidgetState);
export const WidgetProvider = ({ children } : any) => {
  const [state, dispatch] = useReducer(WidgetReducer, initialWidgetState);

  function removeWidget(id: string) {
    dispatch({
      type: "REMOVE_WIDGET",
      payload: id
    });
  }

  function addWidget(widget: Widgets) {
    dispatch({
      type: "ADD_WIDGET",
      payload: widget
    });
  }

  function editWidget(widget: Widgets) {
    dispatch({
      type: "EDIT_WIDGET",
      payload: widget
    });
  }

  let providerProps: ProviderProps = {
    widgets: state.widgets,
    addWidget,
    removeWidget,
    editWidget
  }

  return (
    <WidgetContext.Provider
      value={providerProps}
    >
      {children}
    </WidgetContext.Provider>
  );
};