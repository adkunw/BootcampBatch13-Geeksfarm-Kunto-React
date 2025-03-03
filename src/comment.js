function Comment({ avatar, name, comment, dateTime }) {
  return (
    <div className="ui comments">
      <div className="comment">
        <a className="avatar">
          <img src={avatar} alt={name} />
        </a>
        <div className="content">
          <a className="author">{name}</a>
          <div className="metadata">
            <span className="date">{dateTime}</span>
          </div>
          <div className="text">{comment}</div>
          <div className="actions">
            <button className="reply">Reply</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
