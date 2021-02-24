import React from "react"
import "./Kennel.css"

export const Kennel = () => {
    const kennel = {
        locations: [
            {
                city: "Nashville ",
                area: "North "
            }
        ]
    }
    
    return ( 
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the {kennel.locations[0].city}{kennel.locations[0].area} Location</div>
            <div>500 Puppy Way</div>
        </address>
    </>
    )
}