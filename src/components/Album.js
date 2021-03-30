import React from "react";
import Card from "react-bootstrap/Card";

const Album = (props) => {
  return (
    <Card
      bg={props.variant ? props.variant : "info"}
      text="white"
      style={{ width: "18rem" }}
    >
      <Card.Body>
        <Card.Header>{props.item.id}</Card.Header>
        <Card.Text>{props.item.title}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Album;
