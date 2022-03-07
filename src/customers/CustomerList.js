import React, { useEffect, useState } from "react";
import { getAllCustomers, getCustomerPurchases } from "../ApiManager";

//this module is responsible for displaying the customer list

export const CustomerList = () => {
    //useState is a hook, it takes a single argument and returns an array
    const [customers, modifyCustomers] = useState([])
    const [purchases, modifyPurchases] = useState([])

    //useEffect is a hook, it takes two arguments(function and array)
    //sole purpose is to run code when state changes(it's like an event listener)
    useEffect(
        () => {
            getAllCustomers()
                .then((customerArray) => {
                    modifyCustomers(customerArray)
                })
        },
        []
    )
    useEffect(
        () => {
            getCustomerPurchases()
                .then((purchasesArray) => {
                    modifyPurchases(purchasesArray)
                })
        },
        []
    )
    //define a function that finds the total number of purchases for each customer
    //you will need access to purchases and use one customer as parameter
    let totalPurchases = 0
    const countPurchases = (customer) => {
        //use the filter method to return an array of one customer's purchases
        let customerPurchasesArray = purchases.filter((purchase) => {
            return purchase.customerId===customer.id
        })
        //use .length property to count the number of purchases
        totalPurchases = customerPurchasesArray.length
        return totalPurchases
    }
    
    return (
        <>
            {/* //iterate customers and convert them from objects to html using jsx
            //use map array method conversion tool */}
            {
                customers.map(
                    (customer) => {
                        return <p key={`customer--${customer.id}`}>{customer.fullName} Total Purchases: {countPurchases(customer)}</p>
                    }
                )
            }
        </>
    )
}