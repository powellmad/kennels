import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animals/AnimalList"
import { AnimalForm } from "./animals/AnimalForm"
import { AnimalProvider } from "./animals/AnimalProvider"
import { AnimalDetail } from "./animals/AnimalDetail"
import { CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerDetail } from "./customers/CustomerDetail"
import { CustomerForm } from "./customers/CustomerForm"
import { LocationList } from "./locations/LocationList"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationDetail } from "./locations/LocationDetail"
import { LocationForm } from "./locations/LocationForm"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
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

            <AnimalProvider>
                <Route exact path="/animals/detail/:animalId(\d+)">
                    <AnimalDetail />
                </Route>
            </AnimalProvider>

            <LocationProvider>
                <Route exact path="/locations">
                    <LocationList />
                </Route>

                <Route path="/locations/create">
                    <LocationForm />
                </Route>

                <Route exact path="/locations/detail/:locationId(\d+)">
                    <LocationDetail />
                </Route>
            </LocationProvider>

            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>

                <Route path="/customers/create">
                    <CustomerForm />
                </Route>
                
                <Route exact path="/customers/detail/:customerId(\d+)">
                    <CustomerDetail />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <LocationProvider>
                    <Route path="/employees">
                        <EmployeeList />
                    </Route>
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}