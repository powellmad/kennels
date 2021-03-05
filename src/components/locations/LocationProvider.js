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
        return fetch(`http://localhost:8088/location/${id}`)
            .then(res => res.json())
    }

    return (
        <LocationContext.Provider value={{
            locations, getLocations, getLocationById
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}