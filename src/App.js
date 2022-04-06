import logo from './logo.svg';
import './App.css';


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ColourFlipper from './components/colourFlipper/colourFlipper';




function App() {
  return (
    <div className="App">
      <h2>Playground</h2>

      <Container >
        
        <Row>
          <Col><ColourFlipper /></Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>

      </Container>


    </div>
  );
}

export default App;


// Ideas for practice
// 1 -- 