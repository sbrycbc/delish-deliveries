import React from 'react';
import { useSelector } from 'react-redux';
import {Container, Row, Col} from "reactstrap"
import CommonSection from '../components/Ul/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';

import "../styles/checkout.css"
 
const Checkout = () => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount)
  const shippingCost = 5

  const totalAmount = cartTotalAmount + shippingCost


  return <Helmet title="Checkout">
    <CommonSection title="Checkout"/>
    <section>
      <Container>
        <Row>
          <Col lg="8" md="6">
            <h6 className="mb-4">Shipping Address</h6>
            <form className="checkout_form">
              <div className="form_group">
                <input type="text" placeholder="Enter your name"/>
              </div>
              <div className="form_group">
                <input type="text" placeholder="Enter your email"/>
              </div>
              <div className="form_group">
                <input type="number" placeholder="Phone number"/>
              </div>
              <div className="form_group">
                <input type="text" placeholder="Land"/>
              </div>
              <div className="form_group">
                <input type="text" placeholder="Stadt"/>
              </div>
              <div className="form_group">
                <input type="number" placeholder="Postleitzahl"/>
              </div>
            </form>
            <button className="addToCart_btn">Payment</button>

          </Col>
          <Col lg="4" md="6">
            <div className='checkout_bill'>
              <h6 className='d-flex justify-content-between align-items-center mb-3'>Subtotal: <span>€{cartTotalAmount}</span></h6>
              <h6 className='d-flex justify-content-between align-items-center mb-3'>Shipping: <span>€{shippingCost}</span></h6>
              <div className='checkout_total'>
                <h5 className='d-flex justify-content-between align-items-center'>Total: <span>€{totalAmount}</span></h5>

              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </section>

  </Helmet>
}

export default Checkout;