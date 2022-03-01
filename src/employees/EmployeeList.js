import React, { useEffect, useState } from "react";

//this module is responsible for displaying the employee list

export const EmployeeList = () => {
    //useState is a hook, it takes a single argument and returns an array
    const [employees, modifyEmployees] = useState([])
    // const history = useHistory()

    //useEffect is a hook, it takes two arguments(function and array)
    //sole purpose is to run code when state changes(it's like an event listener)
    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                .then((employeeArray) => {
                    modifyEmployees(employeeArray)
                })
        },
        []
    )

    return (
        <>
            {/* //iterate employees and convert them from objects to html using jsx
            //use map array method conversion tool */}
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>{employee.fullName} {employee.location.address}</p>
                    }
                )
            }
        </>
    )
}