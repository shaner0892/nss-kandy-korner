import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../ApiManager";

//this module is responsible for displaying the employee list

export const EmployeeList = () => {
    //useState is a hook, it takes a single argument and returns an array
    const [employees, modifyEmployees] = useState([])
    // const history = useHistory()

    const fetchEmployees= () => {
        getAllEmployees()
            .then((employeeArray) => {
                modifyEmployees(employeeArray)
            })
    }

    //useEffect is a hook, it takes two arguments(function and array)
    //sole purpose is to run code when state changes(it's like an event listener)
    useEffect(
        () => {
            fetchEmployees()
        },
        []
    )

    const fireEmployee = (id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
        .then(()=> {
            fetchEmployees()
        })
    }

    return (
        <>
            {/* //iterate employees and convert them from objects to html using jsx
            //use map array method conversion tool */}
            {
                employees.map(
                    (employee) => {
                        return <div>
                            <p key={`employee--${employee.id}`}>{employee.fullName} {employee.location.address} Hourly Rate: {employee.hourlyRate}</p>
                            <button onClick={() => {
                                fireEmployee(employee.id)
                            }}>Fire Employee</button>
                        </div>
                    }
                )
            }
        </>
    )
}