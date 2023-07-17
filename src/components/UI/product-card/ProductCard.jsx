import React from 'react';
import "../../../styles/product-card.css"
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const ProductCard = (props) => {
    const {id, title, image01, price} = props.item;
    const dispatch = useDispatch();
    const addToCart = () => {
      dispatch(
        cartActions.addItem({
          id,
          title,
          image01,
          price
        }));
    };


  return (
    <div className='product_item'>
        <div className="product_img">
            <img src={image01} alt="product_img" className='w-50'/>
        </div>

        <div className="product_content">
            <h5>
              <Link to={`/foods/${id}`}>{title}</Link>
            </h5>
            <div className='d-flex justify-content-between align-items-center'>
                <span className='product_preis'>€{price}</span>
                <button className='addToCard_btn' onClick={addToCart}>Add to Card</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;