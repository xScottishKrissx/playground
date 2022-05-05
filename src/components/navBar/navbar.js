import * as React from 'react'

import './navbar.css'
import { useState, useRef} from 'react';
import RMPSearch from '../__RPMComponents/utilities/RMPSearch';


export const Navbar = (props) =>{
   
    const [displayMenu, setMenuStatus] = useState(false) 
    const navbar = useRef(null)
    const menuAnchor = useRef(null)
    

    function toggleMenu(){

        if(displayMenu === true){
            menuAnchor.current.classList.remove("showMenu")
            setMenuStatus(false)
        }

        if(displayMenu === false){
            menuAnchor.current.classList.add("showMenu")
            setMenuStatus(true)
        }
    }




    // console.log(window.pageYOffset);

    // Scroll into view...    
    // function customScrollTo(id){
    //     if(!navbar.current) return
    //     menuAnchor.current.classList.remove("showMenu")
        
    //     const navbarHeight = navbar.current.getBoundingClientRect().height;       
    //     const fixedNav = navbar.current.classList.contains("fixMenu")
        
    //     let element = document.getElementById(id)
    //     // element.scrollIntoView({behavior: 'smooth', block: 'start'})
    //     let position = element.offsetTop - navbarHeight
    //     if(fixedNav){
    //         window.scrollTo({left:0, top:position})
    //     }else{
    //         window.scrollTo({left:0, top:position - navbarHeight})
    //     }
    // }



    // On Scroll Event, fix navbar
    const handleScroll = () => {
        if(!navbar.current) return
        
        const navbarHeight = navbar.current.getBoundingClientRect().height;       

        if(window.scrollY > navbarHeight ) {
           navbar.current.classList.add('fixMenu')
        }else{
            navbar.current.classList.remove('fixMenu')
        }
        
      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });
    
    
return(
    <nav className="responsiveNavbar mt-2" ref={navbar}>

        {/* Nav Header */}
        <div className="responsiveNavbar__header" >
            <h2 className="mb-0">React Micro Projects</h2>

            {/* Toggle */}
            <span onClick={()=>toggleMenu()} id="menuToggle" className="material-icons">menu</span>

        </div>

        {/* Links */}
        <div className="responsiveNavbar__links" ref={menuAnchor}>
            {/* <span className="ps-2 pe-2">Home</span>
            <span className="ps-2 pe-2">About</span> */}
            <a targer="__new" id="portfolioLink" href="https://christopherdunne.co.uk/"><span className="ps-2 pe-2">Portfolio</span></a>
            {/* <span className="ps-2 pe-2">Search</span> */}
            
            <RMPSearch setInputState={props.setInputState}/>

            {/* Scroll Into View Menu */}
            {/* <span onClick={()=>customScrollTo("colourFlipper")}>Scroll to...</span> */}



        </div>


    </nav>
)

}

export default Navbar;