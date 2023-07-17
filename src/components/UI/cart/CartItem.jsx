import React from 'react';
import { ListGroupItem } from 'reactstrap';
// import productImg from '../../../assets/images/product_01.1.jpg';

import "../../../styles/cart-item.css";

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const CartItem = ({item}) => {
   const {id,title,price,image01,quantity,totalPrice} = item
   const dispatch = useDispatch()

   const incrementItem =()=> {
      dispatch(cartActions.addItem({
         id,
         title,
         price,
         image01
      }))
   } 

   const decreaseItem =()=> {
      dispatch(cartActions.removeItem(id))
   } 

   const deleteItem =()=> {
      dispatch(cartActions.deleteItem(id))

   }

  return <ListGroupItem className='border-0 cart_item'>
    <div className="cart_item-info d-flex gap-2">
        <img src={image01} alt="product-img" />
        <div className="cart_product-info w-100 d-flex align-items-center justify-content-between gap-4">
           <div>
             <h6 className="cart_product-title">{title}</h6>
             <p className="cart_product-price d-flex align-items-center gap-5">
                {quantity}x <span>€{totalPrice}</span>
            </p>
               <div className="increase_decrease-btn d-flex align-items-center justify-content-between">
                  <span className="increase_btn" onClick={incrementItem}><i className="ri-add-circle-fill"></i></span>
                  <span className="quantity">{quantity}</span>
                  <span className="decrease_btn" onClick={decreaseItem}><i className="ri-subtract-line"></i></span>
               </div>
           </div>
           <span className="delete_btn" onClick={deleteItem}><i className="ri-close-circle-fill"></i></span>
        </div>
    </div>

  </ListGroupItem>
}

export default CartItem