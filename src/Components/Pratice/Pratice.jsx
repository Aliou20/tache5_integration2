import "./Pratice.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import profilImg from "../../Assets/profil1.svg";
import profilImg2 from "../../Assets/profil2.svg";
import profilImg3 from "../../Assets/profil3.svg";
import profilImg4 from "../../Assets/profil4.svg";
import likeImg from "../../Assets/like.svg";
import basketImg from "../../Assets/basket.svg";
import eysImg from "../../Assets/eys.svg";
import etoileImg from "../../Assets/etoile.svg";
import { BsDownload , BsChevronRight} from "react-icons/bs";
import horlogeImg from "../../Assets/horloge.svg"
import vector4Img from "../../Assets/Vector4.svg"



function Pratice() {
  const profils = [profilImg , profilImg2 , profilImg3 , profilImg4]
  return (
    <div className="pratice">
      <Container>
        <p className="pratice_title1">Pratice Advice</p>
        <h2 className="pratice_title2 fs-2 fw-bold">Make online education accessible</h2>
        <p>Problems trying to resolve the conflit between <br /> the two major realms of classical physics : Newtonian mechanics</p>
        <Row className="pratice_conteneur_card align-items-center justify-content-center">
          {
            profils.map((profil,index) => (
              <Col md={3} className="my-md-0 my-2">
                <div className="pratice_card">
                  <img src={profil} alt="profil" className="w-100" />
                  <button className="pratice_sale rounded shadow">Sale</button>
                    <div className="pratice_profil_text">
                      <div className="d-flex align-items-center justify-content-between pt-5">
                        <div className="pratice_profil_title1">English</div>
                        <div className="d-flex align-items-center  rounded-4 px-2 text-white" style={{backgroundColor : "#252B42", }}>
                          <img src={etoileImg} alt="etoile image" />
                          <div className="ps-2">4.9</div>
                        </div>
                      </div>
                      <h4>Graphic Design</h4>
                      <p>We focus ergonomics and meeting you...</p>
                      <div className="d-flex align-items-center ">
                        <BsDownload />
                        <div className="ms-2 fw-bold text-muted">15 Sales</div>
                      </div>
                      <p className="fw-bold my-2">$16.48 <span style={{color : "#57C332"}}>$6.48</span></p>
                      <div>
                        <img src={horlogeImg} alt='horloge' /> <span className=" me-3">Pro...</span>
                        <img src={vector4Img} alt='vector4' /> <span className=" me-3">64 Les...</span>
                        <img src={horlogeImg} alt='horloge' /> <span className="">22hr...</span>
                      </div>
                      <button className="pratice_button">Learn More <BsChevronRight /></button>
                    </div>
                  <div className="pratice_conteneur_icon">
                    <img src={likeImg} alt="icon" className="pratice_icon" />
                    <img src={basketImg} alt="icon" className="pratice_icon" />
                    <img src={eysImg} alt="icon" className="pratice_icon" />
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
};

export default Pratice;
