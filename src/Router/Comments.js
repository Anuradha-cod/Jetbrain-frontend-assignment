import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getComment } from "../Redux/Action/userActivityAction";

const Comments = ({ getComment, comment }) => {
  useEffect(() => {
    getComment();
  }, []);
  return (
    <div>
      {comment.map((ele) => {
        return <div>{ele.email}</div>;
      })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  comment: state.userActivity.comment,
});
export default connect(mapStateToProps, { getComment })(Comments);
