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