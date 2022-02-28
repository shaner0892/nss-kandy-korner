// utilize the useEffect() React hook to get the array of products from your API. All of this will be nearly identical to Honey Rae's
import React, { useEffect, useState } from "react";

export const ProductList = () => {
    const [products, modifyProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8090/products?_expand=productType&_sort=productTypeId&_order=asc")
                .then(res => res.json())
                .then((productArray) => {
                    modifyProducts(productArray)
                })
        },
        []
    )

    return (
        <>
        {
            products.map(
                (productObject) => {
                    return <p key={`product--${productObject.id}`}>{productObject.name} ${productObject.price} {productObject.productType.type}</p>
                }
            )
        }
        </>
    )

}