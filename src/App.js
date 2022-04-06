import logo from './logo.svg';
import './App.css';


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ColourFlipper from './components/colourFlipper/colourFlipper';
import Counter from './components/counter/counter';




function App() {
  return (
    <div className="App">
      <h2>Playground</h2>

      <Container >
        
        <Row fluid>
          <Col sm={6} lg={4}> <ColourFlipper /></Col>
          <Col sm={6} lg={4}> <Counter /> </Col>


          
          <Col sm={6} lg={4}></Col>
          <Col sm={6} lg={4}></Col>
          <Col sm={6} lg={4}></Col>
          <Col sm={6} lg={4}></Col>
        </Row>

      </Container>


    </div>
  );
}

export default App;


// Ideas for practice
// 1 -- 