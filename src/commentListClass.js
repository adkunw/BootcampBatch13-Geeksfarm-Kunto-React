import React, { Component } from "react";
import Comment from "./commentClass";
import comments from "./dataComment";

class CommentsList extends Component {
  render() {
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
}

export default CommentsList;
