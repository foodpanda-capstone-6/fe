import react from "react";
import { Container, Row, Col, Navbar, Card } from "react-bootstrap";

const HomePageMenu: react.FC = () => {
  return (
    <Container
      style={{
        width: "100%",
        height: "22rem",
        backgroundColor: "rgba(180, 180, 180, 0.5)",
        paddingRight: "0",
        paddingLeft: "1.5rem",
      }}
    >
      <Row style={{ paddingTop: "1.5rem" }}>
        <Col xs={6}>
          <Row
            style={{
              width: "100%",
              height: "12rem",
              backgroundColor: "white",
            }}
          >
            photo one
          </Row>
          <Row
            style={{
              width: "100%",
              height: "6rem",
              backgroundColor: "white",
              marginTop: "1rem",
            }}
          >
            photo two
          </Row>
        </Col>
        <Col xs={6}>
          <Row
            style={{ width: "100%", height: "9rem", backgroundColor: "white" }}
          >
            photo three
          </Row>
          <Row
            style={{
              width: "100%",
              height: "9rem",
              backgroundColor: "white",
              marginTop: "1rem",
            }}
          >
            photo four
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export { HomePageMenu };
