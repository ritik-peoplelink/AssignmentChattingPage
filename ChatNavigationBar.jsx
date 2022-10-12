import { Link } from "react-router-dom";
import { useState } from "react";
import './index.css';

const ChatNavigationPage = () =>{
    return(
        <div className="PL alignCntr flexRow justifyStart">
            <div className="LL borderActive">
                <Link to="/productInfo" className="SpLinks">CHAT</Link>
            </div>
            <div className="LL">
            <Link to="AboutUs" className="SpLinks">GROUP</Link>
            </div>
            <div className="LL">
            <Link to="AboutUs" className="SpLinks">BROADCAST</Link>
            </div>
        </div>
    );
}

export default ChatNavigationPage;