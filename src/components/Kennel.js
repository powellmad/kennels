import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"
import { AnimalCard } from "./animals/AnimalCard.js"
import { CustomerCard } from "./customers/CustomerCard.js"
import { EmployeeCard } from "./employees/EmployeeCard.js"
import { LocationCard } from "./locations/LocationCard.js"
import { PropsAndState } from "./PropsAndState.js"


export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)


    // <>
    //     <PropsAndState yourName="Mad" />
    //     <h2>Nashville Kennels</h2>
    //     <small>Loving care when you're not there.</small>
    //     <address>
    //         <div>Visit Us at the {kennel.locations[0].city}{kennel.locations[0].area} Location</div>
    //         <div>500 Puppy Way</div>
    //     </address>

    //     <h2>Animals</h2>
    //     <article className="animals">
    //         <AnimalCard />
    //         <AnimalCard />
    //         <AnimalCard />
    //         <AnimalCard />
    //         <AnimalCard />
    //     </article>

    //     <h2>Employees</h2>
    //     <article className="empolyees">
    //         <EmployeeCard />
    //         <EmployeeCard />
    //         <EmployeeCard />
            
    //     </article>

    //     <h2>Locations</h2>
    //     <article className="locations">
    //         <LocationCard />
    //         <LocationCard />
    //     </article>
        
    //     <h2>Customers</h2>
    //     <article className="customers">
    //         <CustomerCard />
    //         <CustomerCard />
    //         <CustomerCard />
    //     </article>
    // </>