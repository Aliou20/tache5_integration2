import "./Teacher.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import user1 from "../../Assets/user1.svg"
import user2 from "../../Assets/user2.svg"
import etoileImg from "../../Assets/etoile.svg";
import etoileVideImg from "../../Assets/etoile2.svg";

function Teacher() {
  const etoiles = [1,2,3,4];
  const cards = [user1 , user2]
  return (
    <div className="teacher">
      <Container>
        <p className="pratice_title1">Pratice Advice</p>
        <h2 className="fw-bold fs-2">Our Experts Teacher</h2>
        <p>Problems trying to resolve the conflit between <br /> the two major realms of classical physics : Newtonian mechanics</p>
        <Row className="teacher_row">
          {
            cards.map((card, index ) => (
              <Col md={5} className={index === 1 ? "d-flex justify-content-center align-items-center offset-md-1 mb-5" : "d-flex justify-content-center align-items-center mb-5"}>
                <div className="teacher_card d-flex align-items-center justify-content-center flex-column">
                  <img src={card} alt="profil" className="user mb-4 mb-md-5 " />
                  <p className="text-center">
                    slate problems trying to resolve the conflit between problems trying to resolve the conflit between 
                    slate problems trying to resolve the conflit between problems trying to resolve the conflit between 
                  </p>
                  <div className="my-0 my-md-2">
                    {
                      etoiles.map(etoile => (
                        <img src={etoileImg} alt="etoiles" className="teacher_etoile" />
                      ))
                    }
                    <img src={etoileVideImg} alt="etoile null" className="" />
                  </div>
                  <h4 className="fw-bold my-2">Regina Miles</h4>
                  <p>Design</p>
                </div>  
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
};

export default Teacher;
