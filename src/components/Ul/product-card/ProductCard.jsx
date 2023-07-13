import React from 'react';
import productImg from  '../../../assets/images/paprika.png';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <div className='product_item'>
        <div className="product_img">
            <img src={productImg} alt="product_img" />
        </div>

        <div className="product_content">
            <h5><Link>Burger</Link></h5>
            <div>
                <span className='product_preis'>8.00€</span>
                <button className='addToCard_btn'>Add to Card</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;