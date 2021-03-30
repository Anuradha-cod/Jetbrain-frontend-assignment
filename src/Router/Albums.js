import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAlbum } from "../Redux/Action/userActivityAction";
import Album from "../components/Album";
import { useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const Albume = ({ getAlbum, album }) => {
  const search = useLocation().search;
  const limit = new URLSearchParams(search).get("limit");
  console.log(limit);

  useEffect(() => {
    getAlbum(limit);
  }, []);

  const variant = ["danger", "warning", "info"];

  return (
    <Container fluid>
      <Row>
        {album.map((ele, index) => {
          return <Album item={ele} variant={variant[index % 3]} />;
        })}
      </Row>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  album: state.userActivity.album,
});
export default connect(mapStateToProps, { getAlbum })(Albume);
