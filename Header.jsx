import './index.css';

const Header = (props) => {
    return(
        <div className="heightLVH flexRow justifyBtwn">
            <div className="oneFourthWidth Lhbgcolor pdngLL flexDiv justifyStart alignCntr">
                <img src={props.imagePath} className="headerIcon"></img>
            </div>
            <div className="leftUserInfo flexDiv alignCntr justifyEnd">
                <div className="mrgnRXS">
                    <h4>{props.userName}</h4>
                </div>
                <div className='mrgnRXS'>
                    <img src={props.userImagePath} className="userImage"></img>
                </div>
            </div>
        </div>
    );
}

export default Header;