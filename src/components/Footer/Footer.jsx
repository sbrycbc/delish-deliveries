import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/sbry.png';

const Footer = () => {
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3' md='4' sm='6'>
          <div className="logo footer__logo text-start">
            <img src={logo} 
            style={{width:'50px'}} alt=' logo' />
            <h5>DelishDeliveries</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ipsum iusto vel cum.</p>
          </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <h5>Lieferzeit</h5>
          <ListGroup>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Sonntag - Dienstag</span>
              <p>10:00am - 11:00pm</p>
            </ListGroupItem>

            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Freitag - Montag</span>
              <p>OFF Tage</p>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'></Col>

        <Col lg='3' md='4' sm='6'></Col>

      </Row>
    </Container>
  </footer>
}

export default Footer;