import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAlbum } from "../Redux/Action/userActivityAction";

const Album = ({ getAlbum }) => {
  useEffect(() => {
    getAlbum();
  }, []);
  return <div>albums</div>;
};
const mapStateToProps = (state) => ({
  album: state.userActivity.album,
});
export default connect(mapStateToProps, { getAlbum })(Album);
