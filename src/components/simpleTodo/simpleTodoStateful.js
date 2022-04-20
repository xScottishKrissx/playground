import React from 'react';

import './simpleTodo.css'

export class SimpleToDo extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            items:[]
        }
    }

    handleClick(){
        console.log("Click!")

        let itemsArray = this.state.items || [] 
        itemsArray.push(1)
        this.setState({items:itemsArray})
        console.log(this.state.items)
        
    }


    render(){
    
        console.log(this.state.items)
    return(
            <div className="simpleTodo__container">
            <h1>Simple To-Do</h1>
    
            <div className="simpleTodo__formContainer">
                <form className="simpleTodo__form">
                    <label htmlFor="itemEntry"></label>
                    <input type="text" name="itemEntry" />
                </form>
                <button onClick={() => this.handleClick()}>add</button>
                {/* <button>edit</button> */}
    
                
            </div>
    
            <div className="simpleTodo__list">
                {this.state.items}
                {/* {items.map(x => {
                    return(
                        <p>{x}</p>
                    )
                })} */}
    
            </div>
        </div>
        )
    }
}

export default SimpleToDo;