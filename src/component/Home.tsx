import React, { useContext } from 'react';
import { Heading } from './Heading';
import { Employeelist } from "./Employeelist";
import { WidgetProvider } from './../context/ConfigureWidgetState';
import { WidgetContext, InitialWidgetState } from '../context/ConfigureWidgetState';
import { GlobalContext, InitialState } from '../context/GlobalState';

export const Home = () => {
    const { widgets } = useContext<InitialWidgetState>(WidgetContext);
    const { employees } = useContext<InitialState>(GlobalContext);
    return (
        <WidgetProvider>
            <div className="App">
                {
                    widgets.map((item, index) => <div key={index}>{item.name}</div>)
                }
                <div className="container mx-auto">
                    <h3 className="text-center  text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase">CRUD with React Context API and Hooks</h3>
                    <Heading />
                    <Employeelist />
                </div>
            </div>
        </WidgetProvider>
    )
}