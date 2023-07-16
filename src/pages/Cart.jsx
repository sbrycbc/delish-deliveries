import React from 'react';

import CommonSection from "../components/Ul/common-section/CommonSection"
import Helmet from "../components/Helmet/Helmet"
import "../styles/cart-page.css"

import  {useSelector, useDispatch} from "react-redux"
import {Container, Row, Col} from "reactstrap"

import {cartActions} from "../store/shopping-cart/cartSlice"

import { Link } from 'react-router-dom';

const Cart = () => {

  const cartItems = useSelector(state=>state.cart.cartItems)
  const totalAmount = useSelector(state=>state.cart.totalAmount)

  return (
    <Helmet title="Cart">
      <CommonSection title="Dein Cart"/>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {
                cartItems.length === 0 ? 
                <h5 className="text-center">Deine Warenkorb ist leer</h5>
                : 
                <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Produkt</th>
                    <th>Preis</th>
                    <th>Menge</th>
                    <th>Delete</th>

                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map(item => <Tr item={item} key={item.id}/>)
                  }
                  
                </tbody>
              </table>
              }

              <div className="mt-4">
                <h6>Subtotal: €<span className='cart_subtotal'>{totalAmount}</span></h6>
                <p>Alle Preise in € inkl. gestzl MwSt.</p>
                <p>Ab 20 € versandkostenfrei bestellen</p>
                <div className="cart_page-btn">
                  <button className="addToCart_btn me-4">
                    <Link to="/foods">Weiter einkaufen</Link>

                  </button>
                  <button className="addToCart_btn">
                    <Link to="/checkout">Checkout</Link>

                  </button>
                </div>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = props => {

  const {id, image01, title, price, quantity} = props.item
  const dispatch = useDispatch()

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }
  return <tr>
    <td className="text-center cart_img-box">
      <img src={image01} alt=""/>
    </td>
    <td className="text-center">{title}</td>
    <td className='text-center'>€{price}</td>
    <td className='text-center'>{quantity}x</td>
    <td className="text-center cart_item-del">
      <i className="ri-delete-bin-line" onClick={deleteItem}></i>
    </td>
  </tr>
}

export default Cart;