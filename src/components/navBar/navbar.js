import * as React from 'react'

import './navbar.css'
import { useState } from 'react';


export const Navbar = (props) =>{
   
    const [displayMenu, setMenuStatus] = useState(false) 
    
    function toggleMenu(){

        if(displayMenu === true){
            console.log("Hide Menu")
            document.getElementById("responsiveNavbar__menuAnchor").classList.remove("showMenu")
            setMenuStatus(false)
        }

        if(displayMenu === false){
            console.log("Show Menu")
            document.getElementById("responsiveNavbar__menuAnchor").classList.add("showMenu")
            setMenuStatus(true)
        }
    }
    
    
return(
    <nav className="responsiveNavbar mt-2">

        {/* Nav Header */}
        <div className="responsiveNavbar__header ">
            <h2 className="mb-0">Responsive Navbar</h2>

            {/* Toggle */}
            <span onClick={()=>toggleMenu()} id="menuToggle" class="material-icons">menu</span>

        </div>

        {/* Links */}
        <div className="responsiveNavbar__links" id="responsiveNavbar__menuAnchor">
            <span className="ps-2 pe-2">Home</span>
            <span className="ps-2 pe-2">About</span>
            <span className="ps-2 pe-2">Contact</span>
            <span className="ps-2 pe-2">Search</span>
        </div>


    </nav>
)

}

export default Navbar;