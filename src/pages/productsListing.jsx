import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Product from '../components/product';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useEffect } from "react";
import axios from 'axios'


function ProductsListing() {
  const url = "https://fakestoreapi.com/products?";
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(url)
    .then( res =>{
      console.log(res.data)
      setProduct(res.data)
    })
    .catch( err =>{
      console.log("Connection failed to API")
    })
  }, []);


  return (
    <>
    <Container>
      <Row className='m-3' gap={3}>
        {product.map((eachProduct, index)=>{
          return(
            <Col xs={12} sm={12} md={6} lg={4} xl={3} xxl={3} gap={3} className='mb-3'>
              <Product productInfo={eachProduct} />
            </Col>
          )
        })}
      </Row>
    </Container>
    </>
  )
}

export default ProductsListing
