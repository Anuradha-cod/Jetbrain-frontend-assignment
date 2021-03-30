import React, { useEffect } from "react";
import { connect } from "react-redux";
import Comment from "../components/Comment";
import { getComment } from "../Redux/Action/userActivityAction";

const Comments = ({ getComment, comment }) => {
  useEffect(() => {
    getComment();
  }, []);
  const variant = ["danger", "Primary", "info"];
  return (
    <div className="grid-container">
      {/* <Comment /> */}
      {comment.map((ele, index) => {
        return <Comment item={ele} variant={variant[index % 3]} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  comment: state.userActivity.comment,
});
export default connect(mapStateToProps, { getComment })(Comments);
