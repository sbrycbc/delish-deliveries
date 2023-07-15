import React, {useState, useEffect} from 'react';
import products from '../assets/data/products';

import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/Ul/common-section/CommonSection';

import {Container, Row, Col} from "reactstrap"

import "../styles/product-details.css"

import ProductCard from '../components/Ul/product-card/ProductCard';

const FoodDetails = () => {

  const [tab, setTab] = useState('desc')

  const {id} = useParams()

  const product = products.find(product=> product.id===id)
  const [previewImg, setPreviewImg] = useState(product.image01)

  const {title, price, category, desc} = product

  const relatedProducts = products.filter(item=> category === item.category)

  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])
  


  return <Helmet title="Product-details">
    <CommonSection title={title}/>
      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product_images">
                <div className="img_item mb-2" onClick={()=>setPreviewImg(product.image01)}>
                  <img src={product.image01} alt="product-img-01" className='w-50' />
                </div>
                <div className="img_item mb-2" onClick={()=>setPreviewImg(product.image02)}>
                  <img src={product.image02} alt="product-img-02" className="w-50"/>
                </div>
                <div className="img_item" onClick={()=>setPreviewImg(product.image03)}>
                  <img src={product.image03} alt="product-img-03" className="w-50"/>
                </div>
              </div>
            </Col>
            <Col lg="3" md="3">

              <div className="product_main-img">
                  <img src={previewImg} alt="product-main-img" className="w-100"/>
              </div>

            </Col>
            <Col lg="6" md="6">
              <div className="single_product_content">
                <h2 className="product_title mb-3">{title}</h2>
                <p className='product_price'>{" "}Price:
                <span className='product_price'>€{price}</span>
                </p>
                <p className='category mb-5'>Category : <span>{category}</span></p>
                <button className='addToCard_btn'>Add to Cart</button>
              </div>
            </Col>
            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-3 py-2">
                <h6 className={`${tab==="desc"?"tab_active":''}`} onClick={()=>setTab("desc")}>Description</h6>
                <h6 className={`${tab==="rev"?"tab_active":''}`} onClick={()=>setTab("rev")}>Review</h6>

              </div>

              {
                tab === "desc" ? <div className="tab_content">
                <p>{desc}</p>
              </div> : <div className="tab_form">
                <div className="review pt-5">
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
              }


            </Col>
            <Col lg="12" className='mb-5 mt-4'>
              <h5>You might also like</h5>
            </Col>
            {
              relatedProducts.map(item=>(
                <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                  <ProductCard item={item}/>
                </Col>
              ))
            }
          </Row>
        </Container>
      </section>
  </Helmet>

}

export default FoodDetails;