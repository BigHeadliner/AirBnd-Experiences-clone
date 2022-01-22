import React from "react"   
import Logo from "../images/airbnb-logo.png"
 
export default function Navnar() { 
     return ( 
         <nav> 
             <img className="nav--logo" src={Logo} />
         </nav> 
     )
}