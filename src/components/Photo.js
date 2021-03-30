import React from "react";
import Card from "react-bootstrap/Card";

const Photo = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.item.thumbnailUrl} />
      <Card.Body>
        <Card.Title>{props.item.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Photo;
