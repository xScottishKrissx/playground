/* eslint-disable no-unused-vars */
import * as React from 'react'
import { useEffect,useRef, useState } from 'react'
import './slider.css'

import woods from './woods.jpg'
import cliffs from './cliffs.jpg'
import mountain from './mountain.jpg'

export const Slider = () =>{

    const [sliderStyle, setSliderStyle] = useState(300)
    const [slidePosition, setSlidePosition] = useState(0)
    const [count, setCount] = useState(0)
    const getSliderHeight = useRef()

// Set the size of the slider after render
    useEffect(()=>{
        // console.log(sliderStyle)
        // console.log(sliderHeight)
        if(sliderStyle > 100 ){
            const setSliderSize = setInterval(() =>{

                // Update the slider size if the window size changes
                const updateSize = () =>{ setSliderStyle(sliderStyle) }
                window.addEventListener('resize', updateSize);

                // If the current slider height is not the same as the slider height in state, set a new slider height to state. This will update the style, adjusting the size of the slider.

                if(getSliderHeight.current.clientHeight !== sliderStyle){
                    setSliderStyle(getSliderHeight.current.clientHeight)
                }else{ 
                    clearInterval(setSliderSize) 
                }
            },1)
            
            return () => {clearInterval(setSliderSize)}

        }else{
            setSliderStyle(300)
        }

    })

    let currentCount = count
    
    const next = (arrayLength) => {
        if(count > arrayLength - 2){
            setSlidePosition(0)
            setCount(0)
            return
        }
        currentCount++
        setCount(currentCount)
        setSlidePosition(slidePosition - 100 ) 
        // console.log(count)
    }

    const prev = (arrayLength) =>{
        if(count === 0){
            setSlidePosition(slidePosition - 100 * (arrayLength - 1))
            setCount(arrayLength - 1)
            return 
        }
        currentCount--
        setCount(currentCount)
        setSlidePosition(slidePosition + 100)
    }
    

    
    const images = ["woods","cliffs", "mountain"]
    const mapImages = images.map ((x,index) => {
        const style = { transform: "translateX(" + (slidePosition + (index * 100) ) + '%)'}
        return(
            <div ref={getSliderHeight} key={index}  style={style} className='slider__singleImage position-absolute' alt={x + "__image"}>            
                <img  className="w-100" key={index} alt={x} src={require('./' + x + '.jpg')} />
                <div className='slider__singleImageCaptionWrapper align-items-center d-flex fs-1 h-100 justify-content-center opacity-25 position-absolute text-white top-0 w-100'>{x}</div>     
            </div>
        )
    })
    
    let sliderHeight = {height: "" + sliderStyle + "px"}
    // if(sliderHeight < 100)setSliderStyle(300)
    // console.log(sliderStyle)
    return(
        <div className='slider__container h-100 w-100'>
            <h2>Simple Slider </h2>
            {/* <p>V6</p> */}
            <div className="slider__ImageWrapper overflow-hidden position-relative" style={sliderHeight}>
                {mapImages}
            </div>

           
            <div className="simpleSlider__buttonContainer d-flex justify-content-center align-items-center p-3">
                <button className='m-1 w-50' onClick={()=>prev(images.length)}><span className="material-icons">arrow_back</span></button>
                <button className="m-1 w-50" onClick={()=>next(images.length)}><span className="material-icons">arrow_forward</span></button>
            </div>
            
        </div>
    )

}

export default Slider;