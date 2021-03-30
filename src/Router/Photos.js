import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPhotos } from "../Redux/Action/userActivityAction";

const Photos = ({ getPhotos }) => {
  useEffect(() => {
    getPhotos();
  }, []);
  return <div>photos</div>;
};
const mapStateToProps = (state) => ({
  Photos: state.userActivity.Photos,
});
export default connect(mapStateToProps, { getPhotos })(Photos);
