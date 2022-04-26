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
        console.log(count)
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
            <div ref={getSliderHeight} key={index}  style={style} className='slider__singleImage' alt={x + "__image"}>            
                <img  className="w-100" key={index} alt={x} src={require('./' + x + '.jpg')} />
                <div className='slider__singleImageCaptionWrapper'>{x}</div>     
            </div>
        )
    })
    
    let sliderHeight = {height: "" + sliderStyle + "px"}
    return(
        <div className='slider__container'>
            <h2>Simple Slider</h2>
            <div className="slider__ImageWrapper" style={sliderHeight}>
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