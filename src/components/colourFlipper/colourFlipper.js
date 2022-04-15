import React from 'react';
import './colourFlipper.css'


import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class ColourFlipper extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            setColour: {}
        }
    }

    handleClick(){
        // Get random rgba
        const r1 = Math.floor((Math.random() * 255) + 1)
        const r2 = Math.floor((Math.random() * 255) + 1)
        const r3 = Math.floor((Math.random() * 255) + 1)
        const randomRGBA = "rgba(" + r1 + "," + r2 + "," + r3 + ")";

        // Assign random colour to state
        this.setState({setColour:randomRGBA})
    }

    // get hex code
    getHex(){
        const hex = [0,1,2,3,4,5,6,7,8,"A","B","C","D","E","F"]

        let hexColour = "#"

        for(let i = 0; i < 6; i++){
            hexColour += hex[this.randomNumber(hex)]
        }        
        // Assign random colour to state
        this.setState({setColour:hexColour})
    }
    randomNumber(x){
        return Math.floor((Math.random() * x.length))
    }


    // 
    handleCopy(){
        navigator.clipboard.writeText(this.state.setColour)
        console.log("Copy")
    }


    render(){
        const style = { backgroundColor: this.state.setColour }
        const displayColour = this.state.setColour

        

        return(
            <div style={style} id="colourFlipper" className="colourFlipper">
                
                <h2>Colour Flipper</h2>
                <div className="colourFlipper__innerContainer" >
                    {displayColour.length > 0 ? 
                        <span className="colourFlipper__displayColour">{displayColour}
                        <Button variant="secondary" onClick={()=>this.handleCopy()}><span className="material-icons">content_copy</span></Button>
                        
                        </span> : 
                        <span className="colourFlipper__displayColour">...</span>
                    }
                    



                    
                    
                </div>

                <div className="colourFlipper__buttonContainer">
                    <Row>
                        <Col xs={6}><Button variant="secondary" onClick={()=>this.handleClick()}>Get RBGA</Button></Col>
                        <Col xs={6}><Button variant="secondary" onClick={()=>this.getHex()}>Get HEX</Button></Col>
                    </Row>
                </div>

                
               
            </div>
        )
    }
}

export default ColourFlipper;