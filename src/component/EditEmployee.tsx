import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext, Employees } from '../context/GlobalState';
import { useHistory, Link, match } from "react-router-dom";

export interface EditEmployeeRouteParams {
    id: string;
  }

export const Editemployee = ({ match }: { match: match<EditEmployeeRouteParams> }) => {
    let history = useHistory();
    const { employees, editEmployee } = useContext(GlobalContext);
    const [selectedUser, setSeletedUser] = useState<Employees>();
    const currentUserId = match.params.id;

    useEffect(() => {
        const employeeId = currentUserId;
        const selectedUser = employees.find((emp: Employees): boolean => emp.id === parseInt(employeeId));
        if(selectedUser !== undefined)
            setSeletedUser(selectedUser);
    }, []);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedUser !== undefined) {
            editEmployee(selectedUser);
            history.push('/');
        } else {
            alert("There is no selected user");
        }
    }

    const handleOnChange = (userKey: keyof Employees, value: string | number) => {
        if (selectedUser === undefined) return;
        let obj: any = selectedUser;
        obj[userKey] = value;
        return setSeletedUser({ ...obj });
    }

    if (!selectedUser || !selectedUser.id) {
        return <div>sdf</div>
    }

    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Name of employee
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.name} onChange={(e) => handleOnChange('name', e.target.value)} type="text" placeholder="Enter name" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.location} onChange={(e) => handleOnChange('location', e.target.value)} type="text" placeholder="Enter location" />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="designation">
                            Designation
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" value={selectedUser.designation} onChange={(e) => handleOnChange('designation', e.target.value)} type="text" placeholder="Enter designation" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                            Edit Employee
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}