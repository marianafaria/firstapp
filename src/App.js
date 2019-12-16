import React from 'react';
import NavBar from './components/NavBar'
import Carousel from './components/CarouselHome'
import CardsProducts from './components/CardsProducts'
import CardsDigimon from './components/CardsDigimon'
import Footer from './components/Footer'
import {Container, Row} from 'react-bootstrap'

function App() {
  return (
    <>
    <NavBar/>
    <Carousel/>
    <br/>
    <Container>
      {/*<Row><CardsProducts/></Row>*/}
      <hr></hr>
      <Row><CardsDigimon/></Row>
      <br/>
    </Container>
    <br/>
    <Footer/>
    </>
  );
}

export default App;
