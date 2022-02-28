// utilize the useEffect() React hook to get the array of locations from your API. All of this will be nearly identical to Honey Rae's
import React, { useEffect, useState } from "react";

export const LocationList = () => {
    const [locations, modifyLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8090/locations")
                .then(res => res.json())
                .then((locationArray) => {
                    modifyLocations(locationArray)
                })
        },
        []
    )

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