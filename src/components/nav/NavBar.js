import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

//This is a Presentation Component. Directly expresses HTML.
//link component has one job: create anchor tags
//The <Link/> and the <Route/> JSX elements are complementary to each other. If you add a new Link element in your application with a new URL, then you must create a matching Route element.
export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
        </ul>
    )
}