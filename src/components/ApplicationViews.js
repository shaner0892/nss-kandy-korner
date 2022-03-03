import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "../customers/CustomerList"
import { EmployeeList } from "../employees/EmployeeList"
import { HireEmployee } from "../employees/HiringForm"
import { LocationList } from "../locations/LocationList"
import { ProductList } from "../products/ProductList"
import { PurchasesList } from "../purchases/PurchasesList"
//This is a Controller Component. Its only responsibility to to control the behavior of the system and maps URLs to components.
//In the ApplicationViews component, you will define how your application will respond when the URL matches each of those patterns. When a user clicks on one of the hyperlinks in the navigation bar, this code dictates which component should be rendered.
//responsibility is to determine which view of the application should be rendered 
//route is a component and listens for the event
//The <Link/> and the <Route/> JSX elements are complementary to each other. If you add a new Link element in your application with a new URL, then you must create a matching Route element.
export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>

            <Route path="/products">
                <ProductList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/apply">
                <HireEmployee />
            </Route>

            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route path="/purchases">
                <PurchasesList />
            </Route>
        </>
    )
}