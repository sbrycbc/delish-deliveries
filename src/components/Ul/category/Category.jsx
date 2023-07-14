import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import categoryImg01 from '../../../assets/images/paprika.png';
import categoryImg02 from '../../../assets/images/paprika.png';
import categoryImg03 from '../../../assets/images/paprika.png';
import categoryImg04 from '../../../assets/images/paprika.png';


import '../../../styles/category.css';

const categoryData = [
    {
        display:'Fastfood',
        imgUrl: categoryImg01
    },
    {
        display:'Pizza',
        imgUrl: categoryImg02
    },
    {
        display:'Döner',
        imgUrl: categoryImg03
    },
    {
        display:'Köfte',
        imgUrl: categoryImg04
    },
]


const Category = () => {
  return <Container>
    <Row>
    {
        categoryData.map((item, index)=> (
        <Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={index}>
            <div className="category_item d-flex align-items-center gap-3 mb-4 mt-3">
                <div className="category_img" >
                    <img style={{width:'8rem'}} src={item.imgUrl} alt='category_item' />
                </div>
                <h6>{item.display}</h6>

            </div>
        </Col>
        ))
    }   
        
    </Row>
  </Container>
  
}

export default Category;