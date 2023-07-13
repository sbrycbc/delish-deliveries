import React from 'react';
import Helmet from '../components/Helmet/Helmet.js'
import { Container, Row, Col } from 'reactstrap';

import paprika from '../assets/images/paprika.png';
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';

import Category from '../components/Ul/category/Category.jsx';

const Home = () => {
  return <Helmet title='Home'>
    <section>
      <Container>
        <Row>
        <Col lg='6' md='6'>
          <div className='hero_content'>
            <h5 className='mb-3 mt-4'>Einfache Bestellung und Schnelle Lieferung</h5>
            <h1 className='mb-4 hero_title'><span>Bist Du Hunger???</span> <br /> Kommm einfach!!!<span> an deiner Tür!!!</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisicing elit</p>
            <div className='hero_btns d-flex align-items-center gap-5 mt-3'>
              <button className='bestellt_btn d-flex align-items-center justify-content-between' >Jetzt Bestellt <i class="ri-arrow-right-s-fill"></i></button>
              <button className='all_foods_btn'><Link to='/foods'>Sehen alle</Link></button>
            </div>
            <div className='hero_service d-flex align-items-center gap-5 mt-5'>
              <p className='d-flex align-items-center gap-2 '>
                <span className='versand_icon'>
                  <i class="ri-car-fill"></i></span>Kostenloser Versand </p>
              <p className='d-flex align-items-center gap-2 '>
                <span className='versand_icon'><i class="ri-folder-shield-line"></i></span>{' '}
                100% secure checkout</p>
            </div>
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

    <section>
      <Category />
    </section>

    </Helmet>
  
}

export default Home;