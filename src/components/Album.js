import React from "react";
import { Card, Col } from "react-bootstrap";

const Album = (props) => {
  return (
    <Col xs="12" md="6" lg="4">
      <Card
        bg={props.variant ? props.variant : "info"}
        text="white"
        style={{ marginTop: "10px" }}
      >
        <Card.Body>
          <Card.Header>{props.item.id}</Card.Header>
          <Card.Text>{props.item.title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Album;
