import React from 'react'
import { useState } from 'react'

// Rules
// 2 Props Needed
// 1 - A country
// 2 - That countries coordinates - [latitude, longitude]

export default function FavCountryView(props) {

    // localStorage.clear()

    const {country, lat, long} = props
    const usersFavCountry = localStorage.getItem("favCountry") || "UK"
    // const startingCountry = usersFavCountry || "UK"
    const [updateStateOnStarClick, forceUpdate] = useState(0)
    
    // Set a new default
    const setNewDefault = () =>{ 
        // console.log(country)
        setNewCountry(country) 
        // This exists only to force the component to re-render in order to update the star on page
        forceUpdate(value => value + 1)        
    }

    const setNewCountry = (x) => { 
        localStorage.setItem("favCountry", x) 
        localStorage.setItem("lat" , lat)
        localStorage.setItem("long", long)
    }
    
    return (
        <>
            
            <button onClick={setNewDefault}>
                {usersFavCountry.toLowerCase() === country.toLowerCase() ? 
                    <span id="star" className="material-icons">star</span> : 
                    <span id="unstar" className="material-icons">star_border</span>
                }
            </button>
        </>
    )
}
