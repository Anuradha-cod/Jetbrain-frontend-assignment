import React, { useEffect } from "react";
import { connect } from "react-redux";
import Post from "../components/Post";
import { getPost } from "../Redux/Action/userActivityAction";

const Posts = ({ getPost, post }) => {
  useEffect(() => {
    getPost();
  }, []);
  const variant = ["danger", "warning", "info"];

  return (
    <div>
      {post.map((ele, index) => {
        return <Post item={ele} variant={variant[index % 3]} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  post: state.userActivity.post,
});
export default connect(mapStateToProps, { getPost })(Posts);
