import React from 'react';
import { WidgetProvider } from '../../context/ConfigureWidgetState';
import "./login.css";

export const Login = () => {
    
    return (
        <WidgetProvider>
            <div className="app">
            </div>
        </WidgetProvider>
    )
}