import * as React from 'react'

import './navbar.css'
import { useState, useRef} from 'react';


export const Navbar = (props) =>{
   
    const [displayMenu, setMenuStatus] = useState(false) 
    const navbar = useRef(null)

    function toggleMenu(){



        console.log(document.querySelector('.footer__innerContainer').getBoundingClientRect());

        if(displayMenu === true){
            document.getElementById("responsiveNavbar__menuAnchor").classList.remove("showMenu")
            setMenuStatus(false)
        }

        if(displayMenu === false){
            document.getElementById("responsiveNavbar__menuAnchor").classList.add("showMenu")
            setMenuStatus(true)
        }
    }




    console.log(window.pageYOffset);

    // Scroll into view...    
    function customScrollTo(id){
        if(!navbar.current) return
        document.getElementById("responsiveNavbar__menuAnchor").classList.remove("showMenu")
        
        const navbarHeight = navbar.current.getBoundingClientRect().height;       
        const fixedNav = document.getElementById("responsiveNavbar").classList.contains("fixMenu")
        
        let element = document.getElementById(id)

        // element.scrollIntoView({behavior: 'smooth', block: 'start'})
        if(fixedNav){
            console.log("navbar IS fixed");
            window.scrollTo({left:0, top:element.offsetTop})
        }else{
            console.log("navbar is NOT fixed");
            window.scrollTo({left:0, top:element.offsetTop - 200})
        }
    }



    // On Scroll Event, fix navbar
    const handleScroll = () => {
        if(!navbar.current) return
        
        const navbarHeight = navbar.current.getBoundingClientRect().height;       

        if(window.scrollY > navbarHeight ) {
            document.getElementById("responsiveNavbar").classList.add('fixMenu')
        }else{
            document.getElementById("responsiveNavbar").classList.remove('fixMenu')
        }
        
      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });
    
    
return(
    <nav className="responsiveNavbar mt-2" id="responsiveNavbar">

        {/* Nav Header */}
        <div className="responsiveNavbar__header " ref={navbar}>
            <h2 className="mb-0">Responsive Navbar</h2>

            {/* Toggle */}
            <span onClick={()=>toggleMenu()} id="menuToggle" className="material-icons">menu</span>

        </div>

        {/* Links */}
        <div className="responsiveNavbar__links" id="responsiveNavbar__menuAnchor">
            <span className="ps-2 pe-2">Home</span>
            <span className="ps-2 pe-2">About</span>
            <span className="ps-2 pe-2">Contact</span>
            <span className="ps-2 pe-2">Search</span>


            {/* Scroll Into View Menu */}
            <span onClick={()=>customScrollTo("colourFlipper")}>Scroll to...</span>


        </div>


    </nav>
)

}

export default Navbar;