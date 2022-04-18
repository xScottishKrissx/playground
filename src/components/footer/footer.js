import React from 'react';

import './footer.css'

export const Footer = (props) =>{
    
    const currentdate = new Date();
    const dateOptions = { year: 'numeric' }
    const myDate = currentdate.toLocaleDateString('en-GB', dateOptions);

    function customScrollTo(id){
        let element = document.getElementById(id)
        element.scrollIntoView({behavior: 'smooth', block: 'start'})
        
    }

    
     
    return(
        <footer >
            <div id="footer__innerContainer" className="footer__innerContainer p-4 d-flex align-items-center justify-content-center">
                <span>&copy; {myDate} chris dunne </span> 
                <span role="button" onClick={()=>customScrollTo("App")} className="material-icons footer__scrollTop">keyboard_double_arrow_up</span>
                
            </div>
        </footer>
    )
}

export default Footer;