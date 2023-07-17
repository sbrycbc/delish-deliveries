import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';


import "../styles/checkout.css";
 
const Checkout = () => {

  const [enterName, setEnterName] = useState(' ')
  const [enterEmail, setEnterEmail] = useState(' ')
  const [enterNumber, setEnterNumber] = useState(' ')
  const [enterCountry, setEnterCountry] = useState(' ') 
  const [enterCity, setEnterCity] = useState(' ') 
  const [postalCode, setPostalCode] = useState(' ') 
  const shippingInfo = []


  const cartTotalAmount = useSelector(state => state.cart.totalAmount)
  const shippingCost = cartTotalAmount < 20 ? 5 : 0

  const totalAmount = cartTotalAmount + Number(shippingCost)

  const submitHandler = e=>{
    e.preventDefault()
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber, 
      country: enterCountry,
      city: enterCity,
      postalCode:postalCode,
    };

    shippingInfo.push(userShippingAddress)
    console.log(shippingInfo)

  }


  return <Helmet title="Checkout">
    <CommonSection title="Checkout"/>
    <section>
      <Container>
        <Row>
          <Col lg="8" md="6">
            <h6 className="mb-4">Lieferung Address</h6>
            <form className="checkout_form" onSubmit={submitHandler}>
              <div className="form_group">
                <input type="text" placeholder="Enter your name" required onChange={e=> setEnterName(e.target.value)}/>
              </div>
              <div className="form_group">
                <input type="text" placeholder="Enter your email" required onChange={e=> setEnterEmail(e.target.value)}/>
              </div>
              <div className="form_group">
                <input type="number" placeholder="Phone number" required onChange={e=> setEnterNumber(e.target.value)}/>
              </div>
              <div className="form_group">
                <input type="text" placeholder="Land" required onChange={e=> setEnterCountry(e.target.value)}/>
              </div>
              <div className="form_group">
                <input type="text" placeholder="Stadt" required onChange={e=> setEnterCity(e.target.value)}/>
              </div>
              <div className="form_group">
                <input type="number" placeholder="Postleitzahl" required onChange={e=> setPostalCode(e.target.value)}/>
              </div>
              <Link to="/payment">
              <button type="submit" className="addToCart_btn">
                Payment
              </button></Link>

            </form>

          </Col>
          <Col lg="4" md="6">
            <div className='checkout_bill'>
              <h6 className='d-flex justify-content-between align-items-center mb-3'>Summe: <span>€{cartTotalAmount}</span></h6>
              <h6 className='d-flex justify-content-between align-items-center mb-3'>Versand: <span>€{shippingCost}</span></h6>
              <div className='checkout_total'>
                <h5 className='d-flex justify-content-between align-items-center'>Gesamtsumme: <span>€{totalAmount}</span></h5>

              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </section>

  </Helmet>
}

export default Checkout;