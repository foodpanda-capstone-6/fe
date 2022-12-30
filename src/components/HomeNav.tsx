import react from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineSettingsInputComponent } from "react-icons/md";

interface props {
  showSideNav: boolean;
  setShowSideNav: react.Dispatch<react.SetStateAction<boolean>>;
}

const HomeNav: react.FC<props> = ({ showSideNav, setShowSideNav }) => {
  console.log(showSideNav);
  return (
    <Container
      style={{
        backgroundColor: "#FF2B85",
        fontSize: "22px",
        color: "#FFFFFF",
        height: "6rem",
      }}
    >
      <Row
        style={{
          paddingTop: "0.5rem",
          height: "3rem",
        }}
      >
        <Col style={{ paddingLeft: "1rem" }}>
          <GiHamburgerMenu onClick={() => setShowSideNav(!showSideNav)} />
        </Col>
        <Col>foodpanda</Col>
        <Col>
          <AiOutlineHeart style={{ marginLeft: "5rem" }} />
        </Col>
      </Row>
      <Row
        style={{
          height: "3rem",
        }}
      >
        <Col xs={10}>
          <InputGroup className="mb-3">
            <InputGroup.Text
              id="basic-addon1"
              style={{ backgroundColor: "white" }}
            >
              @
            </InputGroup.Text>
            <Form.Control
              placeholder="Search for shops & restaurant"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>

        <Col>
          <MdOutlineSettingsInputComponent style={{ marginLeft: "1rem" }} />
        </Col>
      </Row>
    </Container>
  );
};

export { HomeNav };
