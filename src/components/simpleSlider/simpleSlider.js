import * as React from 'react'
import { useRef,useEffect,useState } from 'react'

import './simpleSlider.css'

import woods from './woods.jpg'
import cliffs from './cliffs.jpg'
import mountain from './mountain.jpg'

export const SimpleSlider = (props) =>{

    const [test, setTest] = useState(0)
    const slider = useRef()

    const next = () =>{ setTest(test - 100 ) }
    const prev = () =>{ setTest(test + 100 ) }
    
    const images = ["woods","cliffs", "mountain"]
    const mapImages = images.map ((x,index) => {
        return(
                <img key={index} alt={x} src={require('./' + x + '.jpg')} />            
        )
    })

    
    const style = {
        transform:'translateX(' + test + '%)',
    }

return(
    <div className='simpleSlider__container'>  
        <h2>Slider</h2>
        <div ref={slider} style={style} className={`simpleSlider__sliderWrapper ${test}`}>{mapImages}</div>

        <button onClick={()=>next()}>Next</button>
        <button onClick={()=>prev()}>Prev</button>
    </div>
)

}

export default SimpleSlider;