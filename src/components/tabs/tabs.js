import * as React from 'react'

import { useState } from 'react'


import './tabs.css'

export const Tabs = (props) =>{

    const [isActive, setActive] = useState("tab1")

    const data = [
        {
            id:"tab1",
            title: "Tab 1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam, distinctio perferendis rem voluptas molestias culpa ut quasi eligendi sapiente nemo, iste impedit numquam, pariatur optio libero similique illum molestiae?"
        },
        {
            id:"tab2",
            title: "Tab 2",
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim reiciendis consequatur dignissimos, necessitatibus similique explicabo alias quia repellat impedit culpa. Non fuga eum necessitatibus, nulla ab vero eos rem illo."
        },
        {
            id:"tab3",
            title: "Tab 3",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, repellendus explicabo? Qui recusandae cumque debitis! Enim voluptatibus maxime praesentium. Quisquam placeat molestiae natus aperiam dolor in inventore, ad repellendus nisi!"
        },
        {
            id:"tab4",
            title: "Tab 4",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi iste suscipit totam voluptatum voluptate quasi perferendis cupiditate dolorum vel temporibus ipsam, ex tempore hic rerum expedita laudantium tenetur! Dolorum, accusamus."
        },

    ]

    const getTab = data.filter(x => x.id === isActive)
    const mapTabs = getTab.map((x,index) => {
        return(
            <div key={index} className="tabs__content p-3">
                <h3>{x.title}</h3>
                <p>{x.content}</p>
            </div>
        )
    })

    const mapButtons = data.map ((x,index) => {
        return (
                <button 
                    key={index}
                    className={ `${x.id === isActive ? "tabs__button active" : "tabs__button" }`  }  
                    onClick={()=>showTab(x.id)}>

                        {x.title}
                        
                </button>
        )
    })

    function showTab(x){ setActive(x) }
    
return(
    <div className="tabs__container position-relative h-100 w-100">

        <div className="tabs__header text-center pt-3">
            <h2>Simple Tabs</h2>
        </div>

        {mapTabs}  
        
        <div className="tabs__buttonsContainer d-flex position-absolute bottom-0 w-100">
            {mapButtons}  
        </div>
                  
    </div>
)

}

export default Tabs;