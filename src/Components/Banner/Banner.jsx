import "./Banner.css";
import React from "react";
import cardsImg1 from "../../Assets/cards1.svg"
import cardsImg2 from "../../Assets/cards2.svg"
import cardsImg3 from "../../Assets/cards3.svg"
import { Col, Container, Row } from "react-bootstrap";

function Banner() {

  const cards = [
    {image : cardsImg1, title : "training Courses",id : 1},
    {image : cardsImg2, title : " 2,769 online courses", id : 2},
    {image : cardsImg3, title : "training Courses", id : 3},
  ]
  return (
    <div className="banner">
      <Container>
        <div className="banner_conteneur_text">
          <div className="banner_title">Welcome</div>
          <h1 className="banner_title2">Selling on the <br/> internet like a pro</h1>
          <p>We know how large objects will act, but things on a <br />small scale just do not act that way</p>
          <div className="banner_conteneur_btn">
            <button className="get_quote_now rounded shadow my-md-5 my-2">Get Quote Now</button>
            <button className="learn_more rounded shadow ">Learn More</button>
          </div>
        </div>
        <Row className="align-items-center justify-content-center g-2 w-100 mx-auto pb-5">
          {
            cards.map(({image, title , id},index) => (
              <Col key={`${index}-${title}`} md={3} className={id === 3 ? "banner_col banner_col_bleu" : "banner_col"}>
                <div className="banner_conteneur_cards">
                <img src={image} alt="imga cards" />
                <h3 className="fs-4 fw-bold my-3">{title}</h3>
                <hr className={id === 3 ? "banner_card_hr w-25 banner_card_hr_white" : "banner_card_hr w-25"} />
                <p>The gradual accumulation of information about atomic and small-scalebehavious...</p>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
