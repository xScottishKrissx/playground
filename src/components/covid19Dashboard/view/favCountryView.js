import React from 'react'
import { useState } from 'react'

// Rules
// 2 Props Needed
// 1 - A country
// 2 - That countries coordinates - [latitude, longitude]

export default function FavCountryView(props) {

    // localStorage.clear()
    const {country, lat, long,updateMarker} = props
    const usersFavCountry = localStorage.getItem("favCountry") || "UK"
    // const startingCountry = usersFavCountry || "UK"
    // eslint-disable-next-line no-unused-vars
    const [updateStateOnStarClick, forceUpdate] = useState(0)
    
    // Set a new default
    const setNewDefault = () =>{ 
        // console.log(country)
        setNewCountry(country) 
        // This exists only to force the component to re-render in order to update the star on page
        forceUpdate(value => value + 1)      
        updateMarker(country)  
    }
    
    const setNewCountry = (x) => { 
        localStorage.setItem("favCountry" , x)
        localStorage.setItem("lat" , lat)
        localStorage.setItem("long", long)
    }

 
    
    return (
        <>
            
            <button onClick={setNewDefault}>
                {usersFavCountry.toLowerCase() === country.toLowerCase() ? 
                    <span title="Your current favourite country" id="star" className="material-icons">star</span> : 
                    <span title="Mark this country as your favourite for easier tracking" id="unstar" className="material-icons">star_border</span>
                }
            </button>
        </>
    )
}
