import React from "react"  
import PhotoGrid from "../images/photo-grid.png"
 
export default function Hero() {
    return (
        <section className="hero">
            <img className="hero--photo" src={PhotoGrid} />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by
                one-of-kind host-all without leaving home.
            </p>
        </section>
    )
}