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
        }else{
            setSidebarStatus(true)
            document.getElementById("sidebar__container").classList.remove("hideSidebar")
            document.getElementById("sidebar__container").classList.add("showSidebar")
        }
    }

return(
    <div>
{/* In Page Toggle Sidebar Button */}
        <h1>Sidebar</h1>
        <Button className="sidebar__toggleButton" onClick={()=>toggleSidebar()}>
            {displaySidebar === false ? 
                 <div><span class="material-icons">view_sidebar</span>Show Sidebar</div>
                : 
                <div><span class="material-icons">close</span>Hide Sidebar</div>
            }
        </Button>

        <div id="sidebar__container" className="sidebar__container">

            <div  className="sidebar__innerContainer">

{/* Menu Header and Toggle Sidebar Button */}
                <div onClick={()=>toggleSidebar()} id="sidebar__header" className="sidebar__header" >
                    <div class="sidebar__toggleButton"><span class="material-icons">close</span></div>
                    <h2>Sidebar</h2>
                </div>

{/* The Menu Contents */}
                <ul className="sidebar__menuContainer">
                    <li>Colout Flipper</li>
                    <li>Counter</li>
                    <li>Carousel</li>
                    <li>Sidebar</li>
                </ul>
                
            </div>

        </div>
    </div>
)

}

export default Sidebar;