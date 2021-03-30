import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAlbum } from "../Redux/Action/userActivityAction";
import Album from "../components/Album";

const Albume = ({ getAlbum, album }) => {
  useEffect(() => {
    getAlbum();
  }, []);

  const variant = ["danger", "warning", "info"];

  return (
    <div>
      {album.map((ele, index) => {
        return <Album item={ele} variant={variant[index % 3]} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  album: state.userActivity.album,
});
export default connect(mapStateToProps, { getAlbum })(Albume);
