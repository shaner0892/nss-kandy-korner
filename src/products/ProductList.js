// utilize the useEffect() React hook to get the array of products from your API. All of this will be nearly identical to Honey Rae's
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { getAllProducts } from "../ApiManager";


export const ProductList = () => {
    const [products, modifyProducts] = useState([])
    const history = useHistory()

    //this is watching for updates to the products array and fetching them from the API
    useEffect(
        () => {
            getAllProducts()
                .then((productArray) => {
                    modifyProducts(productArray)
                })
        },
        []
    )

    //create a function for when the purchase button is clicked that the information is stored and sent to the API
    const purchaseCandy = (productObject) => {
        //capture the evt (event) and prevent the default (form submitted and reset) from happening
        // //do I need this? since it's not a form?
        // evt.preventDefault()
        //object that we want to send to our API
        const newPurchase = {
            //product object only has id, name, and productType
            productId: productObject.id,
            locationId: 5,
            employeeId: 7,
            customerId: parseInt(localStorage.getItem("kandy_customer")),
        }

        //POST the newPurchase object from above to the API
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //you cannot send JavaScript objects across HTTP so you have to send it in strings/stringify
            body: JSON.stringify(newPurchase)
        }

        //fetch the new list of purchases from the API
        return fetch("http://localhost:8088/purchases", fetchOption)
            .then(() => {
                history.push("/purchases")
            })
    }

    //this displays the list of products with a purchase button next to each
    //add onClick to invoke purchase function
    return (
        <>
        {
            products.map(
                (productObject) => {
                    return <div>
                        <p key={`product--${productObject.id}`}>{productObject.name} ${productObject.price} {productObject.productType.type}</p>
                        <button onClick={() => purchaseCandy(productObject)}>Purchase</button>
                    </div>
                }
            )
        }
        </>
    )
}