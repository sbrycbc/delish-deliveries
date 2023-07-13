import React from 'react';
import Helmet from '../components/Helmet/Helmet.js'
import { Container, Row, Col } from 'reactstrap';

import paprika from '../assets/images/paprika.png';

const Home = () => {
  return <Helmet title='Home'>
    <section>
      <Container>
        <Row>
        <Col lg='6' md='6'>
          <div className='hero_content '>
            <h5 className='mb-3 mt-4'>Einfache Bestellung und Schnelle Lieferung</h5>
            <h1 className='mb-4'><span>Bist Du Hunger???</span> Kommm einfach!!!<span>an deiner Tür!!!</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </Col>

        <Col lg='6' md='6'>
          <div className='hero_img'>
          <img src={paprika}  alt='paprika' className='w-100'/>
          </div>
        </Col>
        </Row>
      </Container>
    </section>

    </Helmet>
  
}

export default Home;