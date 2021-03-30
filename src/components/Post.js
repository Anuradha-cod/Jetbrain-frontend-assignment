import React from "react";
import Card from "react-bootstrap/Card";

const Post = (props) => {
  return (
    <div>
      <Card
        bg={props.variant ? props.variant : "info"}
        text="black"
        style={{ width: "18rem", alignItems: "center" }}
      >
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text text="black">{props.item.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Post;
