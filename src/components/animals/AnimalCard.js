import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"

export const AnimalCard = ({ animal, location, customer }) => (
    <section className="animal">
        <h3 >
      <Link className="animal__name" to={`/animals/detail/${animal.id}`}>
          { animal.name }
        </Link>
        </h3>
        <div className="animal__breed">{animal.breed}</div>
        {/* <div className="location__name">Location: {location?.name}</div>
        <div className="customer__name">Customer: {customer?.name}</div> */}
    </section>
)