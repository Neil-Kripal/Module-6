function UserInfo(props) {
    return (
      <div className="UserInfo">
        <img className="Avatar" src={props.avatarUrl} alt={props.name} />
        <div className="UserInfo-name">{props.name}</div>
      </div>
    );
  }

function ComplexComment(props) {
    return (
      <div className="Comment componentBox">
        <UserInfo avatarUrl={props.author.avatarUrl} name={props.author.name} />
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{props.date.toLocaleString()}</div>
      </div>
    );
  }
  
export default ComplexComment