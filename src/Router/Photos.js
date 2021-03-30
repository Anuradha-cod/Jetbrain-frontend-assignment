import React, { useEffect } from "react";
import { connect } from "react-redux";
import Photo from "../components/Photo";
import { getPhotos } from "../Redux/Action/userActivityAction";

const Photos = ({ getPhotos, photos }) => {
  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <div>
      {photos.map((ele) => {
        return <Photo item={ele} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  photos: state.userActivity.photos,
});
export default connect(mapStateToProps, { getPhotos })(Photos);
