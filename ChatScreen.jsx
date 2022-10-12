import "./index.css";
import { FaPhoneAlt, FaVideo, FaRegGrinAlt, FaImage } from "react-icons/fa";
const ChatScreen = () => {
  return (
    <div className="chatScreen">
      <div className="UpperCard">
        <UpperUserCard
          userImage="/icons/ritik_pic.jpg"
          userName="Sai Krishna"
          userStatus="online"
        />
      </div>
      <div className="MidScreen ">
        <img src="/icons/chatScreen.jpg" className="chatImage"></img>
        <p>
          <b>No message yet, Start conversation</b>
        </p>
      </div>
      <div>
        <LowerCard />
      </div>
    </div>
  );
};

const UpperUserCard = (props) => {
  return (
    <div className="UpperCard flexRow justifyBtwn alignCntr pdngLG borderTLR">
      <div className="flexDiv wEP">
        <div>
          <img src={props.userImage} className="userImage mrgnRSM"></img>
        </div>
        <div>
          <div className="UserStatus">
            <h4>{props.userName}</h4>
            <li className="statusCol">{props.userStatus}</li>
          </div>
        </div>
      </div>
      <div className="wSP">
        <CallingBtns />
      </div>
    </div>
  );
};

const CallingBtns = () => {
  return (
    <div className="roundedBtns flexDiv alignCntr justifySpaceEvenly">
      <div className="userImage flexDiv alignCntr justifyCntr callingBtnCol">
        <FaPhoneAlt/>
      </div>
      <div className="userImage flexDiv alignCntr justifyCntr callingBtnCol">
        <FaVideo />
      </div>
    </div>
  );
};

const LowerCard = () => {
  return (
    <div className="LowerCard">
      <div>
        <FaRegGrinAlt />
      </div>
      <div>
        <FaImage />
      </div>
      <div className="SearchBar">
        <input
          type="text"
          className="searchBox oneThirdWidth"
          placeholder="search"
        ></input>
      </div>
    </div>
  );
};

export default ChatScreen;
