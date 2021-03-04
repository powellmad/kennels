import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animals/AnimalList"
import { AnimalForm } from "./animals/AnimalForm"
import { AnimalProvider } from "./animals/AnimalProvider"
// import { CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
// import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalProvider>
                    <LocationProvider>
                        <CustomerProvider>
                            {/* Note the addition of "exact" now that we have an additional route with "/animals" in it below this Route: "/animals/create" */}
                            <Route exact path="/animals">
                                <AnimalList />
                            </Route>

                            <Route path="/animals/create">
                                <AnimalForm />
                            </Route>
                        </CustomerProvider>
                    </LocationProvider>
                </AnimalProvider>

            </Route>
        </>
    )
}