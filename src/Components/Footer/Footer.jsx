import "./Footer.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import facebook from "../../Assets/facebook.svg"
import insta from "../../Assets/insta.svg"
import twitter from "../../Assets/twitter.svg"

function Footer() {
  const links = [
    {title : "Company info" , link1 : "About Us" , link2 : "Carrier" , link3  : "We are hiring" , link4 : "Blog"},
    {title : "Features" , link1 : "Business Marketing" , link2 : "Users Analytic" , link3  : "Live Chat" , link4 : "Ultimited Support"},
    {title : "Ressources" , link1 : "IOS & Android" , link2 : "Watch a Demo" , link3  : "Customers" , link4 : "API"}
  ]
  return (
    <div className="footer py-5">
      <Container>
        <Row>
          <Col md={3} className="my-5 m text-md-start text-center">
            <p className="fs-3 text-white fw-bold">Get In Touch</p>
            <p className="text-white">the quick fox jumps over the lazy dog</p>
            <img src={facebook} alt="icon"  className="me-3"/>
            <img src={insta} alt="icon" className="me-3"/>
            <img src={twitter} alt="icon" className="me-3"/>
          </Col>
          {
            links.map(({title , link1 ,link2 , link3 , link4}) => (
            <Col md={3} className="my-5 text-md-start text-center">
              <p className="fs-3 text-white fw-bold">{title}</p>
              <p className="text-white fw-bold">{link1} </p>
              <p className="text-white fw-bold">{link2} </p>
              <p className="text-white fw-bold">{link3} </p>
              <p className="text-white fw-bold">{link4} </p>
            </Col>

            ))
          }
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
