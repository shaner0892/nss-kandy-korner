import React, { useEffect, useState } from "react";

//this module is responsible for displaying the customer list

export const CustomerList = () => {
    //useState is a hook, it takes a single argument and returns an array
    const [customers, modifyCustomers] = useState([])
    // const history = useHistory()

    //useEffect is a hook, it takes two arguments(function and array)
    //sole purpose is to run code when state changes(it's like an event listener)
    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    modifyCustomers(customerArray)
                })
        },
        []
    )

    return (
        <>
            {/* //iterate customers and convert them from objects to html using jsx
            //use map array method conversion tool */}
            {
                customers.map(
                    (customer) => {
                        return <p key={`customer--${customer.id}`}>{customer.fullName}</p>
                    }
                )
            }
        </>
    )
}