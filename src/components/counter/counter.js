import React from 'react';

import './counter.css'
import Button from 'react-bootstrap/Button';

export class Counter extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            count:0,
            colour: "black"
        }
    }
    handleCounter(x){
        let count = this.state.count
        let colour = this.state.colour

    // Change count
        if(x.includes("decrease"))count--;
        if(x.includes("increase"))count++
        if(x.includes("reset"))count = 0
        
    // Change colour
        if(count > 0)colour = "green" 
        if(count < 0)colour = "red"
        if(count === 0)colour = "black"
        

        this.setState({
            count: count, 
            colour: colour
        }) 

    }
    render(){
        const style = { color: this.state.colour }
        return(
            <div className="counter">
                    <h2>Counter</h2>            
                    <h3 className="counter__displayCounter" style={style}>{this.state.count}</h3>
                    <div className="counter_buttonContainer">
                        <Button className="counter__button" variant="outline-dark" onClick={()=>this.handleCounter("decrease")}>Decrease</Button>
                        <Button className="counter__button" variant="outline-dark" onClick={()=>this.handleCounter("increase")}>Increase</Button>
                        <Button className="counter__button" variant="outline-dark" onClick={()=>this.handleCounter("reset")}>Reset</Button>
                    </div>
            </div>
        )
    }
}

export default Counter;