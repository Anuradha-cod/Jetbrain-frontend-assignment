import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Comment = (props) => {
  return (
    <Card
      bg={props.variant ? props.variant : "info"}
      text="black"
      style={{ width: "18rem" }}
    >
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>{props.item.body}</Card.Text>
        <Card.Link text="white" href="#">
          {props.item.email}
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Comment;
