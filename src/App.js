import React from 'react';
import NavBar from './components/NavBar'
import Carousel from './components/CarouselHome'
import CardsProducts from './components/CardsProducts'
import {Container, Row} from 'react-bootstrap'

function App() {
  return (
    <>
    <NavBar/>
    <Carousel/>
    <Container>
      <Row>
        <CardsProducts/>
      </Row>
    </Container>
    </>
  );
}

export default App;
