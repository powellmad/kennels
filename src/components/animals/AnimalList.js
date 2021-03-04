import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../locations/LocationProvider"
import { CustomerContext } from "../customers/CustomerProvider"
import { useHistory } from "react-router-dom"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    const history = useHistory()

  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getLocations()
        .then(getCustomers)
        .then(getAnimals)
    }, [])

  return (
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      <h2>Animals</h2>
		      <button onClick={() => {history.push("/animals/create")}}>
            Add Animal
          </button>
          {
          animals.map(animal => {
              const owner = customers.find(c => c.id === animal.customerId)
              const clinic = locations.find(l => l.id === animal.locationId)
              return <AnimalCard key={animal.id}
                          location={clinic}
                          customer={owner}
                          animal={animal} />
        })
      }
    </div>
  )
}