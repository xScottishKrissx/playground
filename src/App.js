import logo from './logo.svg';
import './App.css';


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ColourFlipper from './components/colourFlipper/colourFlipper';
import Counter from './components/counter/counter';
import ReviewCarousel from './components/reviewCarousel/reviewCarousel';
import Navbar from './components/navBar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Modal from './components/modal/modal';
import Questions from './components/questions/questions';



function App() {
  return (
    <div className="App">
      {/* <h2>Playground</h2> */}


      <Navbar />
      <Container className="mt-5">
        
        <Row fluid>
         
          <Col sm={6} lg={4}> <Questions /> </Col>
          <Col sm={6} lg={4}> <Modal /> </Col>
          <Col sm={6} lg={4}> <Sidebar /> </Col>      
          <Col sm={6} lg={4}> <ReviewCarousel /> </Col>
          <Col sm={6} lg={4}> <Counter /> </Col>
          <Col sm={6} lg={4}> <ColourFlipper /> </Col>

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