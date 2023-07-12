import React from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/images/sbry.png'

const Header = () => {
  return (
    <header className="header">

      <Container>
        <div className="nav_wrapper">
          <div className="logo">
            <img src={logo} alt=' logo' />
            <h5>DelishDeliveries</h5>
          </div>
          
        </div>
      </Container>

    </header>
  )
}

export default Header;