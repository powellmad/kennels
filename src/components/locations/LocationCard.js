import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const LocationCard = ({ location }) => {
    return (
    <section className="location">
        <h3><Link className="location__name" to={`/locations/detail/${location.id}`}>
          { location.name }
        </Link></h3>
        <div className="location__address">Address: {location?.address}</div>
    </section>
)
}