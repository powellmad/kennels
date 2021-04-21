import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useHistory } from "react-router-dom"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
    const { animals, getAnimals, searchTerms, setSearchTerms } = useContext(AnimalContext)

    const [ filteredAnimals, setFiltered ] = useState([])
    const history = useHistory()

  useEffect(() => {
    // console.log("AnimalList: useEffect - getAnimals")
    getAnimals()
    }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])


  return (
    <div className="animalComponent">
    {/* {console.log("AnimalList: Render", animals)} */}
    <h2>Animals</h2>
    <button onClick={() => {history.push("/animals/create")}}>
    Add Animal
    </button>
    
    <div className="animals">
      {
        filteredAnimals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
      }
      </div>
    </div>
  )
}