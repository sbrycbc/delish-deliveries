import React from 'react';
import Helmet from '../components/Helmet/Helmet';
import uberuns from '../assets/images/uberuns.png';
import "../styles/uberuns.css";


import { Container, Row, Col } from 'reactstrap';

import UnsereTeamSlider from '../components/Ul/slider/UnsereTeamSlider';




const ÜberUns = () => {

  return (
    <Helmet title= "ÜberUns">
        <section>
          <Container>
              <Row className="mb-5">
              <Col lg='6' md='6'>
                <div className='uberuns_content'>
                  <h4 className='uberuns_title mt-5' >ÜberUns</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,</p>
                </div>
                <h4 className="uberuns_title mt-5">Das Unternehmen</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed corporis excepturi doloremque! Porro impedit pariatur nostrum quod architecto aliquid, sed odit voluptate neque facere accusantium vero error consectetur rerum, voluptatibus incidunt, molestias repellendus blanditiis minus nam aspernatur! Eos cumque odit esse vel quia illo qui sit at, omnis et consequatur!</p>
                </Col>

                <Col lg='6' md='6'>
                  <div className='uberuns_img'>
                  <img src={uberuns}  alt='uberuns'/>
                  </div>
                </Col>
              </Row>
              <Row>
            <Col lg='12' className='text-center'>
              <h4 className="uberuns_title">Unsere Team</h4>
              </Col>
              <Col lg='12' className='text-center'>
                <UnsereTeamSlider/>
              </Col>

            </Row>
          </Container>
        </section>

        <section>
          <Container>

          </Container>
        </section>
    </Helmet>
  )
}

export default ÜberUns;