import React from "react";
import Header from "../Pages/Shared/Navbar/Header";

import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Pages/Shared/Footer/Footer";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";
import RegitNav from "../Pages/Shared/RegitNav/RegitNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <p>maine contene comming......</p>
          </Col>
          <Col lg={3}>
            <RegitNav></RegitNav>
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    </div>
  );
};

export default Main;
