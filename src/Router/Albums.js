import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAlbum } from "../Redux/Action/userActivityAction";
import Album from "../components/Album";
import { useLocation } from "react-router-dom";

const Albume = ({ getAlbum, album }) => {
  const search = useLocation().search;
  const limit = new URLSearchParams(search).get("limit");
  console.log("anuradha", limit);

  useEffect(() => {
    getAlbum(limit);
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
