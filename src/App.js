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
import SimpleFilter from './components/simpleFilter/simpleFIlter';
import SimpleVideo from './components/videoBackground/video';
import Footer from './components/footer/footer';



function App() {
  return (
    <div className="App d-flex flex-column align-items-center" id="App">

      <Navbar />
      <Container id="app__container" className="mt-5 mb-5">
        
        <Row fluid="true">

          <Col sm={6} lg={6} className="p-0 overflow-hidden position-relative"> <SimpleVideo /> </Col>
          <Col sm={6} lg={6}> <SimpleFilter /> </Col>
          <Col sm={6} lg={6}> <Questions /> </Col>
          <Col sm={6} lg={6}> <Modal /> </Col>
          <Col sm={6} lg={6}> <Sidebar /> </Col>      
          <Col sm={6} lg={6}> <ReviewCarousel /> </Col>
          <Col sm={6} lg={6}> <Counter /> </Col>
          <Col sm={6} lg={6} className="p-0"> <ColourFlipper /> </Col>

          <Col sm={6} lg={4}></Col>
          <Col sm={6} lg={4}></Col>
          <Col sm={6} lg={4}></Col>
        </Row>

      </Container>

      <Footer />


    </div>
  );
}

export default App;