import React, { useRef } from 'react';
import {Container, Row, Col} from "reactstrap"
import CommonSection from '../components/Ul/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Link } from 'react-router-dom';

import "../styles/checkout.css"

const Register = () => {
  const registerNameRef = useRef()
  const registerPasswordRef = useRef()
  const registerEmailRef = useRef()


  const submitHandler = e => {
    e.preventDefault();
  }
  
  return <Helmet title="Register">
    <CommonSection title="Register"/>
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <form className="form mb-5" onSubmit={submitHandler}>
              <div className="form_group">
                <input type="text" placeholder="Name" required ref={registerNameRef}/>
              </div>
              <div className="form_group">
                <input type="email" placeholder="Email" required ref={registerEmailRef}/>
              </div>
              <div className="form_group">
                <input type="password" placeholder="Password" required ref={registerPasswordRef}/>
              </div>
              <button type="submit" className="addToCard_btn">Register</button>
            </form>
            <Link to="/login">Already have an account? Login</Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Register;
