import React from "react"
import { Route, Redirect } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

//this will be what is rendered in the DOM
//why do you use () and not {} for this function? ****************
export const KandyKorner = () => (
    <>
    <Route
        render={() => {
            if (localStorage.getItem("kandy_customer")) {
                return (
                <>
                    <NavBar />
                    <ApplicationViews />
                </>
                );
            } else {
                return <Redirect to="/login" />;
            }
        }}
    />

    <Route path="/login">
        <Login />
    </Route>
    <Route path="/register">
        <Register />
    </Route>
    </>
)