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
    getAnimals()
    }, [])

  return (
    <>
    {console.log("AnimalList: Render", animals)}
    <h2>Animals</h2>
    <button onClick={() => {history.push("/animals/create")}}>
    Add Animal
    </button>
    
    <div className="animals">
          {
          animals.map(animal => {
              return <AnimalCard key={animal.id} animal={animal} location={animal.location} customer={animal.customer}/>
        })
      }
    </div>
    </>
  )
}