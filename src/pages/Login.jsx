import React, { useRef } from 'react';
import {Container, Row, Col} from "reactstrap"
import CommonSection from '../components/Ul/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Link } from 'react-router-dom';

import "../styles/checkout.css"

const Login = () => {
  const loginNameRef = useRef()
  const loginPasswordRef = useRef()

  const submitHandler = e => {
    e.preventDefault();
  }

  return <Helmet title="Login">
    <CommonSection title="Login"/>
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="m-auto text-center">
            <form className="form mb-5" onSubmit={submitHandler}>
              <div className="form_group">
                <input type="email" placeholder="Email" required ref={loginNameRef}/>
              </div>
              <div className="form_group">
                <input type="password" placeholder="Password" required ref={loginPasswordRef}/>
              </div>
              <button type="submit" className="addToCard_btn">Login</button>
            </form>
            <Link to="/register">Don`t have an account? Create an account</Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login;
