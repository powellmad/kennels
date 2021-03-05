import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"

import "./Location.css"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()
  }, [])

  return (
    <div className="locationComponent">
      <h2>Locations</h2>
      <div className="locations">
        {console.log("LocationList: Render", locations)}
        {
          locations.map(location => {

            return <LocationCard key={location.id} locations={location} />
          })
        }
      </div>
    </div>
  )
}