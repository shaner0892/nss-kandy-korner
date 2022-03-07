import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getAllLocations } from "../ApiManager";

export const HireEmployee = () => {
    //use the useState hook function to set the initial value of the new object
    const [locations, modifyLocations] = useState([])
    
    //add useEffect
    //this is watching for updates to the locations array and fetches them from the API, it updates locations to = the locations array from the API
    useEffect(
        () => {
            getAllLocations()
                .then((locationArray) => {
                    modifyLocations(locationArray)
                })
        },
        []
    )
    //useState hook function sets the initial value of employee to the defined properties, updateEmployee is a function you invoke later on to modify the values
    const [employee, updateEmployee] = useState({
        fullName: "",
        locationId: 0,
        manager: false,
        fullTime: false,
        hourlyRate: 0
    });
    //need clarification on this ***************
    const history = useHistory()

    const apply = (evt) => {
        //capture the evt (event) and prevent the default (form submitted and reset) from happening
        evt.preventDefault()
        //object that we want to send to our API
        const newEmployee = {
            fullName: employee.fullName,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate
        }

        //POST the newEmployee object from above to the API
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //you cannot send JavaScript objects across HTTP so you have to send it in strings/stringify
            body: JSON.stringify(newEmployee)
        }

        //fetch the new list of employees from the API
        return fetch("http://localhost:8088/employees?_expand=location", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }
    //this will be the form you display, you need to capture user input and save to new object
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Full Name: </label>
                    <input
                        // what does required autoFocus do? ************
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Bob Smith"
                        //this onChange function is an event listener that uses the setter function from above 
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.fullName = evt.target.value
                                updateEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location: </label>
                    <select name="location" className="form-control"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.locationId = parseInt(evt.target.value)
                                updateEmployee(copy)
                            }
                        }
                    >
                        <option value="0">Select your location</option>
                            {locations.map((location) => {
                                return <option value={location.id}>{location.address}</option>
                            })}
                    </select> 
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager: </label>
                        <input type="radio" name="manager" value={true} onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.manager = evt.target.value
                                updateEmployee(copy)
                            }
                        }/>Yes
                        <input type="radio" name="manager" value={false} onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.manager = evt.target.value
                                updateEmployee(copy)
                            }
                        }/>No
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Full Time Employee: </label>
                    <input type="checkbox"
                        className="form-control"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.fullTime = evt.target.checked
                                updateEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate: </label>
                    <input 
                        required autoFocus
                        type="float"
                        className="form-control"
                        placeholder="XX.XX"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.hourlyRate = parseFloat(evt.target.value)
                                updateEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-hire" onClick={apply}>
                Submit
            </button>
        </form>
    )
}
