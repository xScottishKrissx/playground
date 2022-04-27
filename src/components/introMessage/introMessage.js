import * as React from 'react'

import './introMessage.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import githubLogo  from './githubLogo.png'

export const IntroductionMessage = () =>{

    
    
return(
    <Row className='intro__container'>
        <Col>

            <Row>
                <Col>
                    <h2>hello</h2>
                </Col>
            </Row>

            <Row>
                <Col>
                <p>This is where i store all of the React related code that I didn't want to build an entire project around, reusable snippets, practice tasks and anything else I think might be useful in the future. I also hope it gives you a general overview of where I am, and what I have so far created, with React.</p>
                <p>I intend to keep adding to this and improving the overall usefulness of the page by adding code previews, search functionality, filters, direct links to github and more.</p>

                <p>Everything on this page was created using React, React Bootstrap and Google Fonts(icons and fonts)</p>
                
                </Col>
            </Row>

            <Row>
                <Col className='intro__githubLinkContainer'>
                   <a title="View code on github" href="https://github.com/xScottishKrissx/playground" > 
                        <img alt="View code on github.com" src={githubLogo} />
                        <span class="intro__githubLink">https://github.com/xScottishKrissx</span>
                    </a>
                </Col>
            </Row>

        </Col>
    </Row>
)

}

export default IntroductionMessage;