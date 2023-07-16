import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import paprika from '../assets/images/paprika.png';

import { Container, Row, Col } from 'reactstrap';



const ÜberUns = () => {
  return (
    <Helmet title= "ÜberUns">
      
        <section>
          <Container>
              <Row>
              <Col lg='6' md='6'>
                <div className='überuns_content'>
                  <h5 className='überuns_title mt-5' >ÜberUns</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,</p>
                </div>
                </Col>

                <Col lg='6' md='6'>
                  <div className='überuns_img'>
                  <img src={paprika}  alt='paprika' className='w-100'/>
                  </div>
                </Col>
              </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
            <Col lg='12' className='text-center'>
              <h4>Das Unternehmen</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed corporis excepturi doloremque! Porro impedit pariatur nostrum quod architecto aliquid, sed odit voluptate neque facere accusantium vero error consectetur rerum, voluptatibus incidunt, molestias repellendus blanditiis minus nam aspernatur! Eos cumque odit esse vel quia illo qui sit at, omnis et consequatur!</p>
              </Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default ÜberUns;