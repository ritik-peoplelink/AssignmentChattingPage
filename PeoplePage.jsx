import ChatNavigationPage from './ChatNavigationBar';
import ChatScreen from './ChatScreen';
import './index.css';
import UserCard from './UserCard';

const PeoplePage = ()=>{
    return(
       <div className='ChattingPage flexRow'>
            <div className='rightActionsPage borderTLR'>
                <div className='SearchBar flexDiv alignCntr justifyCntr'>
                    <input type='text' className='searchBox' placeholder='search'></input>
                </div>
                <div className='chatNavigation'>
                    <ChatNavigationPage />
                </div>
                <div className='addContact'>
                    <button className='cnBtn'>+ Add Contact</button>
                </div>
                <div className='availableUsers'>
                    <UserCard userImage="/icons/ritik_pic.jpg" userName="Sai Krishna" greetMsg="Good Morning Sai Krishna"/>
                </div>
            </div>
            <div className='chatPage borderTLR'>
                <ChatScreen/>
            </div>
       </div>
    );
}

export default PeoplePage;