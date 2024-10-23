export function ComplexComment(props) {
  // complex component which displays different elements of a comment
  return (
    <div className="Comment componentBox">
      <div className="UserInfo">
        {" "}
        {/* the user info is one aspect of the comment */}
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">
        {" "}
        {/* the actual comment text is another aspect */}
        {props.text}
      </div>
      <div className="Comment-date">
        {" "}
        {/* the comment date is another aspect */}
        {props.date.toLocaleString()}
      </div>
    </div>
  );
}

function UserInfo(props){
    <div className="UserInfo">
    {" "}
    {/* the user info is one aspect of the comment */}
    <img
      className="Avatar"
      src={props.avatarUrl}
      alt={props.name}
    />
    <div className="UserInfo-name">{props.name}</div>
  </div>
}

export function Comment(props) {
    return (
    <div className="Comment componentBox">
    <UserInfo user={props.author} /> {/* here we pass the author prop down to the UserInfo component */}
    <div className="Comment-text">
    {props.text}
    </div>
    <div className="Comment-date">
    {props.date.toLocaleString()}
    </div>
    </div>
    );
}