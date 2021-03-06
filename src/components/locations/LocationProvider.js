import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const LocationContext = createContext()

// This component establishes what data can be used.
export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
        .then(res => res.json())
        .then(setLocations)
    }

    const getLocationById = (id) => {
        return fetch(`http://localhost:8088/locations/${id}`)
            .then(res => res.json())
    }

    const addLocation = location => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
        .then(response => response.json())
    }

    return (
        <LocationContext.Provider value={{
            locations, addLocation, getLocations, getLocationById
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}