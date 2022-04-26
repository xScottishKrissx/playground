import * as React from 'react'
import { useEffect,useRef, useState } from 'react'
import './slider.css'

import woods from './woods.jpg'
import cliffs from './cliffs.jpg'
import mountain from './mountain.jpg'

export const Slider = () =>{

    const [sliderStyle, setSliderStyle] = useState(300)
    const getSliderHeight = useRef()

    useEffect(()=>{

        let sliderHeight;
        const setSliderSize = setInterval(() =>{

            // Update the slider size if the window size changes
            const updateSize = () =>{ setSliderStyle(sliderHeight) }
            window.addEventListener('resize', updateSize);

            // If the current slider height is not the same as the slider height in state, set a new slider height to state. This will update the style, adjusting the size of the slider.
            if(getSliderHeight.current.clientHeight != sliderStyle){
                sliderHeight = getSliderHeight.current.clientHeight
                setSliderStyle(sliderHeight)
            }else{ 
                clearInterval(setSliderSize) 
            }

        },1)
        
        return () => {clearInterval(setSliderSize)}

    },[sliderStyle])


    const next = () => {

    }
    

    const images = ["woods","cliffs", "mountain"]
    const mapImages = images.map ((x,index) => {
        const style = { transform: "translateX(" + index * 100 + '%)'}
        return(
            <div ref={getSliderHeight} key={index}  style={style} className='slider__singleImage' alt={x}>            
                <img  className="w-100" key={index} alt={x} src={require('./' + x + '.jpg')} />                
            </div>
        )
    })
    
    let sliderHeight = {height: "" + sliderStyle + "px"}
    return(
        <div className='slider__container'>
            <div className="slider__ImageWrapper" style={sliderHeight}>
                {mapImages}
            </div>


            <h1>Slider</h1>
            <button onClick={()=>next}>Next</button>
            
        </div>
    )

}

export default Slider;