import React from "react";
import { PropsAndState } from './PropsAndState'

export const Home = () => (
    <div className="home">
        <h1>Nashville Kennels</h1>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName={"Madison"} />
    </div>
)