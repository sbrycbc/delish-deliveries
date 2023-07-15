import React, {useState, useEffect} from 'react';
import products from '../assets/data/products';

import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/Ul/common-section/CommonSection';

import {Container, Row, Col} from "reactstrap"

import productImg from "../assets/images/product_01.1.jpg"

import "../styles/product-details.css"

const FoodDetails = () => {
  return <Helmet title="Product-details">
    <CommonSection title="product 01"/>
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product_images">
                <div className="img_item">
                  <img src={productImg} alt="product-img-01" className='w-50' />
                </div>
                <div className="img_item">
                  <img src={productImg} alt="product-img-02" className="w-50"/>
                </div>
                <div className="img_item">
                  <img src={productImg} alt="product-img-03" className="w-50"/>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3">

              <div className="product_main-img">
                  <img src={productImg} alt="product-main-img" className="w-100"/>
              </div>

            </Col>
            <Col lg="6" md="6">
              <div className="single_product_content">
                <h2 className="product_title mb-3">Pizza with mushroom</h2>
                <p className='product_price'>{" "}Price:
                <span className='product_price'>€34</span>
                </p>
                <p className='category mb-5'>Category : <span>Burger</span></p>
                <button className='addToCard_btn'>Add to Cart</button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-3 py-2">
                <h6>Description</h6>
                <h6>Review</h6>

              </div>
              <div className="tab_content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim nisi distinctio veritatis optio voluptatibus nemo voluptas repellendus eaque voluptate accusantium alias consequuntur dicta unde, officiis sunt praesentium, iste soluta!</p>
              </div>
              <div className="tab_form">
                <div className="review">
                  <p className="user_name mb-0">John Doe</p>
                  <p className="user_email mb-0">jhon1@gmail.com</p>

                  <p className='feedback_text'>great product</p>
                </div>
                <form className='form'>
                  <div className="form_group">
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="form_group">
                    <input type="text" placeholder="Enter your name" />
                  </div>
                  <div className="form_group">
                    <textarea rows={5} type="text" placeholder="Enter your name" />
                  </div>
                  <button type="submit" className='addToCard_btn'>Submit</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  </Helmet>

}

export default FoodDetails;