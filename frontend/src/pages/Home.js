import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaComment } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <Row style={{ marginTop: "15%" }} className="justify-content-md-center">
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>Share the world with your friends</h1>
          <p>Simple ChatApp lets you connect with the world</p>
          <LinkContainer to="/chat">
            <Button variant="primary">
              Get Started{" "}
              <i className="fas fa-comments home-message-icon">
                <FaComment />
              </i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      {/* <Col md={6} className="home__bg"></Col> */}
    </Row>
  );
}

export default Home;
