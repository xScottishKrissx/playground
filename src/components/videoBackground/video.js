import * as React from 'react'

import { useRef,useState, useEffect } from 'react'

import './video.css'

import video from './video_compressed_1.mp4'

export const SimpleVideo = (props) =>{


    const videoRef = useRef(null)
    
    const [isVideoPaused, setVideoPaused] = useState(true)
    const [isPageLoaded, setPageLoaded] = useState(false)

    // on load..
    useEffect(()=>{ setPageLoaded(true) })
    
    function controlVideo(){

        const video =  videoRef.current

        if(isVideoPaused === false){
            video.pause()
            setVideoPaused(true)
        }else{
            video.play()
            setVideoPaused(false)
        }
    }


return(
    <div onClick={()=>controlVideo()} className="simpleVideo__container d-flex justify-content-center align-items-center w-100 h-100">

        {/* {isPageLoaded === false ? <h1>Page Not Loaded</h1> : <h1>Page Loaded</h1>} */}

        <div className="simpleVideo__header position-absolute">
            <h2>Simple Video</h2>
        </div>

        <div className="simpleVideo__controlsContainer w-100 h-100 d-flex align-items-end">
            <div className="simpleVideo__controls ms-4 mb-4" role="button">
                {isVideoPaused === true ? 
                    <span className="material-icons">play_circle_filled</span> 
                    : 
                    <span className="material-icons">pause_circle_filled</span> 
                }

            </div>
            
        </div>

        <video ref={videoRef} className="simpleVideo__video position-absolute" muted autoPlay={!isVideoPaused} loop>
            <source src={video} type="video/mp4" />
        </video>


    </div>
)

}

export default SimpleVideo;