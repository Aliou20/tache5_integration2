import "./Packages.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import blueImg from "../../Assets/rectangle_blue.svg"
import redImg from "../../Assets/rectangle_red.svg"
import personneImg from "../../Assets/image_personne.svg"
import calendierImg from "../../Assets/calendrier.svg"
import singleImg from "../../Assets/single.svg"

function Packages() {
  return (
    <Container>
      <Row className="packages align-items-center mx-auto">
          <Col md={5} className="">
            <div className="packages_hr w-25"></div>
            <h2 className="fw-bold fs-2 mb-5">Packages that are <br /> approdable</h2>
            <p className="">Probleme trying to resolve the conflit between the two major realms of classical physics. Newtonian mechanics</p>
            <button className="package_learn_more">Learn More <FaAngleRight /></button>
          </Col>
        <Col md={6} className="offset-1 pachage_col_2">
          <img src={blueImg} alt="image personne" className="package_image_blue" />
          <img src={personneImg} alt="image personne"  className="package_image_personne img img-responsive" />
          <img src={redImg} alt="image personne" className="package_image_red"/>
          <img src={calendierImg} alt="image personne" className="package_calendrier"/>
          <img src={singleImg} alt="image personne" className="package_single"/>
        </Col>
    </Row>
  </Container>
  );
};

export default Packages;
