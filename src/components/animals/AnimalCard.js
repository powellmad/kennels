import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, location, customer }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="location__name">Location: {location.name}</div>
        <div className="customer__name">Customer: {customer.name}</div>
    </section>
)