import React from "react"
// import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

//this will be what is rendered in the DOM
export const KandyKorner = () => {
    return (
        <>
        <NavBar />
        <ApplicationViews />
        </>
    )
}