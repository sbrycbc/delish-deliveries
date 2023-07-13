import React from 'react';
import Helmet from '../components/Helmet/Helmet.js'
import { Container, Row, Col } from 'reactstrap';

import paprika from '../assets/images/paprika.png';
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';

import Category from '../components/Ul/category/Category.jsx';
import '../styles/home.css';

import featureImg01 from '../assets/images/paprika.png';
import featureImg02 from '../assets/images/paprika.png';
import featureImg03 from '../assets/images/paprika.png';

import products from '../assets/data/products.js';

import foodCategoryImg01 from '../assets/images/paprika.png';
import foodCategoryImg02 from '../assets/images/paprika.png';
import foodCategoryImg03 from '../assets/images/paprika.png';



const featureDate = [
  {
      title:'Quick Delivery',
      imgUrl: featureImg01,
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, laboriosam.'
  },
  {
      title:'Siper Dine In',
      imgUrl: featureImg02,
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, laboriosam.'
  },
  {
      title:'Easy Pick Up',
      imgUrl: featureImg03,
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, laboriosam'
  },
]

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

    <section className='pt-0'>
      <Category />
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h5 className='feature_subtitle mb-4'>Was wir servieren</h5>
            <h2 className='feature_title'>Lehnen Sie sich einfach zu Hause zurück</h2>
            <h2 className='feature_title'>wir werden <span>das kümmern</span></h2>
            <p className='mb-1 mt-4 feature_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, earum!</p>
            <p className='feature_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, debitis commodi {' '}</p>
          </Col>

          {
            featureDate.map((item,index)=>(
              <Col lg='4' md='4' key={index} className='mt-5' >
                <div className="feature_item text-center px-5 py-3">
                  <img src={item.imgUrl} alt="feature_img" className='w-30 mb-3' style={{width:'20rem'}}/>
                  <h5 className=' fw-bold mb-3' >{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))
          }
        </Row>
  
        <Row>
          <Col lg='12' className="text_center">
            <h2>Popular Foods</h2>
          </Col>
          <Col lg='12'>
            <div className="food_category d-flex align-items-center justify-content-center gap-5">
            <button className='all_btn foodBtnActive'>Alles</button>
            <button className='d-flex align-items-center gap-2'><img src={foodCategoryImg01} alt="category_1"/>Burger</button>
            <button className='d-flex align-items-center gap-2'><img src={foodCategoryImg02} alt="category_2"/>Pizza</button>
            <button className='d-flex align-items-center gap-2'><img src={foodCategoryImg03} alt="category_3"/>Bread</button>

          </div>


          </Col>

        </Row>
      </Container>
    </section>
    </Helmet>
  
}

export default Home;