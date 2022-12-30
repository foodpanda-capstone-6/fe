import react from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../App.css";

interface props {
  showSideNav: boolean;
  setShowSideNav: react.Dispatch<react.SetStateAction<boolean>>;
}

const SideNav: React.FC<props> = ({ showSideNav, setShowSideNav }) => {
  return (
    <Container
      style={{
        position: "absolute",
        top: "0",
        height: "100%",
      }}
    >
      <Row
        style={{
          height: "100%",
        }}
      >
        <Col xs={10} style={{ backgroundColor: "#FFFFFF" }}>
          <Row
            style={{
              backgroundColor: "#FF2B85",
              height: "8rem",
              color: "#FFFFFF",
              paddingLeft: "2rem",
              paddingTop: "3rem",
              paddingBottom: "2rem",
            }}
          >
            <Row style={{ fontWeight: "bolder", fontSize: "20px" }}>Name</Row>
            <Row>Coporate Account</Row>
          </Row>
          <Row className="sideNavBarMid">Become a pandapro</Row>
          <Row className="sideNavBarMid">Order & reordering</Row>
          <Row className="sideNavBarMid">Profile</Row>
          <Row className="sideNavBarMid">Address</Row>
          <Row className="sideNavBarMid">Challenges & Rewards</Row>
          <Row className="sideNavBarMid">Vouchers</Row>
          <Row className="sideNavBarMid">Help Center</Row>
          <Row className="sideNavBarMid"> Invite friend</Row>
          <Row className="sideNavBarMid">Settings</Row>
          <Row className="sideNavBarMid">Log out</Row>
        </Col>
        <Col
          xs={2}
          style={{ backgroundColor: "rgba(180, 180, 180, 0.5)" }}
          onClick={() => setShowSideNav(!showSideNav)}
        ></Col>
      </Row>
    </Container>
  );
};

export { SideNav };
