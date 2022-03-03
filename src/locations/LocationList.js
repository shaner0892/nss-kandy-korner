// utilize the useEffect() React hook to get the array of locations from your API. All of this will be nearly identical to Honey Rae's
import React, { useEffect, useState } from "react";
import { getAllLocations } from "../ApiManager";

export const LocationList = () => {
    const [locations, modifyLocations] = useState([])

    //this is watching for updates to the locations array and fetches them from the API
    useEffect(
        () => {
            getAllLocations()
                .then((locationArray) => {
                    modifyLocations(locationArray)
                })
        },
        []
    )

    //this is displaying the list of locations
    return (
        <>
        {
            locations.map(
                (locationObject) => {
                    return <p key={`location--${locationObject.id}`}>{locationObject.address}</p>
                }
            )
        }
        </>
    )

}