import React, { useContext, useEffect } from 'react';
import { WidgetProvider, Widgets } from '../../context/ConfigureWidgetState';
import { WidgetContext, InitialWidgetState } from '../../context/ConfigureWidgetState';
import { GlobalContext, InitialState } from '../../context/GlobalState';
import backgroundImage from './../../images/bg.webp';
import "./home.css";

export const Home = () => {
    const { widgets, addWidget } = useContext<InitialWidgetState>(WidgetContext);
    const { employees } = useContext<InitialState>(GlobalContext);

    let widget: Widgets = {
        id: "22",
        name : "Updated Name"
    }

    useEffect(() => {
        addWidget(widget);
    }, []);
    
    return (
        <WidgetProvider>
            <div className="app">
                {/* <img src={backgroundImage}/> */}
            </div>
        </WidgetProvider>
    )
}