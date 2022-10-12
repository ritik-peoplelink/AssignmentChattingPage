import "./index.css";

const UserCard = (props) => {
  return (
    <div className="UserCard flexRow justifyBtwn alignCntr pdngLG borderTLR">
      <div className="userImg flexDiv">
        <div>
          <img src={props.userImage} className="userImage mrgnRSM"></img>
        </div>
        <div className="userInfo">
          <h3>{props.userName}</h3>
          <p>{props.greetMsg}</p>
        </div>
      </div>

      <div className="dateTime">
        <p>29/08/2022</p>
      </div>
    </div>
  );
};

export default UserCard;
