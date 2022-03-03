// utilize the useEffect() React hook to get the array of purchases from your API. All of this will be nearly identical to Honey Rae's
import React, { useEffect, useState } from "react";

export const PurchasesList = () => {
    const [purchases, modifyPurchases] = useState([])

    //this is watching for updates to the purchases array and fetches them from the API
    //need to change this so that it only shows purchases of current customer, not total
    //ex: http://localhost:8088/purchases?customerId=97
    // parseInt(localStorage.getItem("kandy_customer"))
    useEffect(
        () => {
            fetch("http://localhost:8088/purchases?_expand=product&_expand=customer&_expand=location&_expand=employee")
                .then(res => res.json())
                .then((purchaseArray) => {
                    modifyPurchases(purchaseArray)
                })
        },
        []
    )

    //this is displaying the list of purchases ONLY for current customer
    //need a ternary statement to match customer.id with current customer
    return (
        <>
        {
            purchases.map(
                (purchase) => {
                    return <p key={`purchase--${purchase.id}`}>{purchase.customer.id===parseInt(localStorage.getItem("kandy_customer")) ? `${purchase.product.name} ${purchase.product.price}` : ""}</p>
                }
                )
            }
        </>
    )
}
// return <p key={`purchase--${purchase.id}`}>{purchase.product.name} ${purchase.product.price}</p>