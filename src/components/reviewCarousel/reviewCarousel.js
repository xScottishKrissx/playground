import React from 'react';

import "./reviewCarousel.css"
// import personImg from 'https://randomuser.me/api/portraits/women/'


import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class ReviewCarousel extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    prevButton(arrayLength){
        const currentCount = this.state.count;
        if(currentCount > 0) {
            this.setState({count: currentCount - 1})
        }else{
            this.setState({count: arrayLength - 1})
        }

    }

    nextButton(arrayLength){
        const currentCount = this.state.count;
        if(currentCount < arrayLength - 1) {
            this.setState({count: currentCount + 1})
        }else{
            this.setState({count: 0})
        }
        
    }

    randButton(arrayLength){
        const currentCount = this.state.count

        let getRandomNumber = this.randomNumber(arrayLength)
        if(getRandomNumber === currentCount){
            let rollAgain = this.randomNumber(arrayLength)
            this.setState({count: rollAgain})
        }else{
            this.setState({count: getRandomNumber})
        }
  
        
    }

    randomNumber(arrayLength){
        return Math.floor((Math.random() * arrayLength))
    }



    render(){
        

        const people = [
            {
                id:1,
                name:"Susan Smith",
                job:"Web Developer",
                img:"45",
                text:"lorem ipsum"
            },
            {
                id:2,
                name:"Janet Oliver",
                job:"Web Designer",
                img:"46",
                text:"lorem ipsum"
            },
            {
                id:3,
                name:"Sarah Marshall",
                job:"Model",
                img:"47",
                text:"lorem ipsum"
            },
            {
                id:4,
                name:"Sam Fisher",
                job:"Spy",
                img:"48",
                text:"lorem ipsum"
            },
        ]

        const getPerson =  people[this.state.count]
        return(
            <div className="carousel__container">
                <h2>Carousel</h2>

                <div className="carousel__innerContainer">
                    {/* Review */}
                    <article className="carousel__review">
                        <div className="carousel__imgContainer">
                            <img src={"https://randomuser.me/api/portraits/women/" + getPerson.img + ".jpg"} alt="image"/>
                        </div>

                        
                        <Row className="ms-1">
                            <h4>{getPerson.name}</h4>
                            <p>{getPerson.job}</p>
                            <p>{getPerson.info}</p>

                            <Row className="text-center mt-1">
                                <Col className="p-0 mx-0" >                        
                                    {/* previous button */}
                                    <Button className="p-1" onClick={()=>this.prevButton(people.length)} variant="secondary" >
                                        <span class="material-icons">chevron_left</span>
                                    </Button>
                                </Col>

                                <Col className="p-0 mx-0" >  {/* next button */}
                                    <Button className="p-1" onClick={()=>this.nextButton(people.length)} variant="secondary" >
                                        <span class="material-icons">chevron_right</span>
                                    </Button>
                                </Col>

                                <Col className="p-0 mx-0" >
                                    {/* random button */}
                                    <Button  className="p-1" onClick={()=>this.randButton(people.length)} variant="secondary" >
                                        <span class="material-icons">shuffle</span>
                                    </Button>
                                </Col>
                            </Row>

                        </Row>

                    {/* Buttons */}

                    </article>




                </div>
            </div>
        )
    }
}

export default ReviewCarousel;