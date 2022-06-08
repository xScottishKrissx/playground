import React from 'react'
import { useState } from 'react'



export default function FavCountryView(props) {

    // localStorage.clear()

    const country = props.country
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

    const setNewCountry = (x) => { localStorage.setItem("favCountry", x) }



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
