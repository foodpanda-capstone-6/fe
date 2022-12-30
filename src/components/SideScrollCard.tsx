import React from "react";
import { Container, Navbar, Card, Table } from "react-bootstrap";

const SideSrollCard: React.FC = () => {
  return (
    <Container>
      <h5 style={{ marginTop: "1rem" }}>Your Restaurants</h5>
      <div className="sideScroll">
        <div>
          <Card className="items">
            <Card.Img variant="top" src=".../400x300" />
            <Card.Body>
              <Card.Title>Restaurant Name</Card.Title>
              <Card.Text>Description</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="items">
            <Card.Img variant="top" src=".../400x300" />
            <Card.Body>
              <Card.Title>Restaurant Name</Card.Title>
              <Card.Text>Description</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="items">
            <Card.Img variant="top" src=".../400x300" />
            <Card.Body>
              <Card.Title>Restaurant Name</Card.Title>
              <Card.Text>Description</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export { SideSrollCard };
