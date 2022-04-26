import * as React from 'react'
import { useRef,useEffect,useState } from 'react'

import './simpleSlider.css'

import woods from './woods.jpg'
import cliffs from './cliffs.jpg'
import mountain from './mountain.jpg'

export const SimpleSlider = (props) =>{

    const [slidePosition, setSlidePosition] = useState(0)
    const [count, setCount] = useState(0)

    let currentCount = count
    const prev = (length) =>{

        if(count === 0){
            setSlidePosition(slidePosition - 100 * (length - 1))
            setCount(length - 1)
            return 
        }

        currentCount--;
        setSlidePosition(slidePosition + 100 ) 
        setCount(currentCount)
    }

    const next = (length) =>{
        if(count > length - 2) {
            setSlidePosition(0)
            setCount(0)
            return
        }

        currentCount++;
        setCount(currentCount)
        setSlidePosition(slidePosition - 100 ) 

    }

    const style = { transform:'translateX(' + slidePosition + '%)' }
    // THis is how i mapped images. Might be a better way but this is what i used
    const images = ["woods","cliffs", "mountain"]
    const mapImages = images.map ((x,index) => {
        return(
                <img className="w-100" key={index} alt={x} src={require('./' + x + '.jpg')} />                
        )
    })

    // const mapImages = images.map ((x,index) => {
    //     return(
    //         <div>
    //             <img className="w-100" key={index} alt={x} src={require('./' + x + '.jpg')} />   
    //         </div>             
    //     )
    // })
    

    return(
        <div className='simpleSlider__container'>  
            <h2>Slider</h2>

            <div style={style} className="simpleSlider__sliderWrapper" >{mapImages}</div>

            <div className="simpleSlider__buttonContainer d-flex justify-content-center align-items-center p-3">
                <button className='m-1 w-50' onClick={()=>prev(images.length)}><span className="material-icons">arrow_back</span></button>
                <button className="m-1 w-50" onClick={()=>next(images.length)}><span className="material-icons">arrow_forward</span></button>
            </div>
        </div>
    )

}

export default SimpleSlider;