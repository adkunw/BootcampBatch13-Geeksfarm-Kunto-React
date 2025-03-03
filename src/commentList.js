import React from "react";
import Comment from "./comment";
import comments from "./dataComment";

function CommentsList() {
  return (
    <div className="ui comments">
      {comments.map((commentData, index) => (
        <Comment
          key={index}
          avatar={commentData.avatar}
          name={commentData.name}
          comment={commentData.comment}
          dateTime={commentData.dateTime}
        />
      ))}
    </div>
  );
}

export default CommentsList;
