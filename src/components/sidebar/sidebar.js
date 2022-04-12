import * as React from 'react'

import './sidebar.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export const Sidebar = (props) =>{
    
    const [displaySidebar, setSidebarStatus] = useState(false)

    function toggleSidebar(){
        // console.log("Toggle Sidebar")

        if(displaySidebar === true){
            setSidebarStatus(false)            
            document.getElementById("sidebar__container").classList.add("hideSidebar")
            document.getElementById("sidebar__container").classList.remove("showSidebar")
            // document.getElementById("sidebar__container").classList.toggle("showSidebar")
        }else{
            setSidebarStatus(true)
            document.getElementById("sidebar__container").classList.remove("hideSidebar")
            document.getElementById("sidebar__container").classList.add("showSidebar")
            
            // document.getElementById("sidebar__container").classList.toggle("hideSidebar")
        }
    }

return(
    <div>
{/* In Page Toggle Sidebar Button */}
        <h1>Sidebar</h1>
        <Button className="sidebar__toggleButton" onClick={()=>toggleSidebar()}>
            {displaySidebar === false ? 
                 <div className="d-flex"><span className="material-icons">view_sidebar</span>Show Sidebar</div>
                : 
                <div className="d-flex"><span className="material-icons">close</span>Hide Sidebar</div>
            }
        </Button>

        <div id="sidebar__container" className="sidebar__container position-fixed">

            <div  className="sidebar__innerContainer">

{/* Menu Header and Toggle Sidebar Button */}
                <div onClick={()=>toggleSidebar()} id="sidebar__header" className="sidebar__header d-flex align-items-center mt-2 mb-3" role="button">
                    <div className="sidebar__toggleButton m-3"><span className="material-icons">close</span></div>
                    <h2>Sidebar</h2>
                </div>

{/* The Menu Contents */}
                <ul className="sidebar__menuContainer ps-2 list-unstyled fs-4">
                    <li className="p-2" role="button">Colour Flipper</li>
                    <li className="p-2" role="button">Counter</li>
                    <li className="p-2" role="button">Carousel</li>
                    <li className="p-2" role="button">Sidebar</li>
                </ul>

            </div>

        </div>
    </div>
)

}

export default Sidebar;