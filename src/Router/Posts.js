import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPost } from "../Redux/Action/userActivityAction";

const Posts = ({ getPost }) => {
  useEffect(() => {
    getPost();
  }, []);
  return <div>Postsm</div>;
};
const mapStateToProps = (state) => ({
  post: state.userActivity.post,
});
export default connect(mapStateToProps, { getPost })(Posts);
