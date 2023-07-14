import React,{useState, useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/Ul/common-section/CommonSection';

import {Container, Row, Col} from "reactstrap"

import products from '../assets/data/products';
import ProductCard from '../components/Ul/product-card/ProductCard';

const AllFoods = () => {

  const [searchTerm, setSearchTerm] = useState()
  return <Helmet title='All-Foods'>
    <CommonSection title='All Foods'/>

    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" sm="6">
            <div className="search_widget d-flex align-items-center justify-content-between w-50">
              <input type="text" placeholder="I'm looking for..."/>
              <span><i className="ri-search-line"></i></span>
            </div>
          </Col>
          <Col lg="6" md="6" sm="6" className="mb-5">
            <div className="sorting_widget text-end">
              <select className='w-50'>
                <option>Default</option>
                <option value="ascending">Alphabetically, A-Z</option>
                <option value="descending">Alphabetically, Z-A</option>
                <option value="high-price">High Price</option>
                <option value="low-price">Low Price</option>

              </select>
            </div>


          </Col>
          {
            products.map(item=> (
            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className='mb-4'>
              {" "}
              <ProductCard item={item} />
            </Col>
            ))
          }
        </Row>
      </Container>
    </section>

  </Helmet>
}

export default AllFoods;