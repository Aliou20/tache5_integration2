import "./Products.css";
import React from "react";
import { Container } from "react-bootstrap";

function Products() {
  return (
    <div className="products">
      <Container className="d-flex align-items-center justify-content-center flex-column">
        <p className="pratice_title1 text-center">Pratice Advive</p>
        <h2 className="text-center">Featured Products</h2>
        <p className="text-center mb-5">Problems trying to resolve the conflit between <br /> the two major realms of classical physics : Newtonian mechanics</p>
        <div className="w-100 d-flex justify-content-center">
          <div className="w-50">
            <input type="text" name='text' className="product-input " placeholder="You mail" />
          </div>
          <button className="product_button">Subscribe</button>
        </div>
      </Container>
    </div>
  );
};

export default Products;
