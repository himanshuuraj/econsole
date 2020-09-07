
import { InitialWidgetState, Widgets } from "./ConfigureWidgetState";

export interface Action {
  type: string,
  payload: any
}

export default (state : InitialWidgetState, action: Action) => {
    switch (action.type) {
      case "REMOVE_WIDGET":
        return {
          ...state,
          widgets: state.widgets.filter(
            (widget : Widgets) => widget.id !== action.payload
          )
        };
      case "ADD_WIDGET":
        return {
          ...state,
          widgets: [...state.widgets, action.payload]
        };
      case "EDIT_WIDGET":
        const updatedWidget = action.payload;
        const updatedWidgets = state.widgets.map((widget: Widgets) => {
          if (widget.id === updatedWidget.id) {
            return updatedWidget;
          }
          return widget;
        });
  
        return {
          ...state,
          employees: updatedWidget
        };
      default:
        return state;
    }
  };