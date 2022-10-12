import { Link } from "react-router-dom";
const NavItem = () => {
  return (
    <div className="NavItems flexCol fullHeight">
      <Link to="/productInfo" className="SpLink">
        <img src="/icons/Dashboard.png" className="iconHeightWidth grayscale"></img>Home
      </Link>
      <Link to="AboutUs" className="SpLink">
        <img src="/icons/employee management.png" className="iconHeightWidth grayscale" />
        Employee Management
      </Link>
      <Link to="AboutUs" className="SpLink">
        <img src="/icons/new-feed.png" className="iconHeightWidth grayscale" />
        News
      </Link>
      <Link to="AboutUs" className="SpLink">
        <img src="/icons/network.png" className="iconHeightWidth grayscale" />
        Categories
      </Link>
      <Link to="AboutUs" className="SpLink">
        <img src="/icons/employee management.png" className="iconHeightWidth grayscale" />
        Connection
      </Link>
      <Link to="/" className="SpLink">
        <img src="/icons/people.png" className="iconHeightWidth grayscale" /> People
      </Link>
      <Link to="AboutUs" className="SpLink">
        <img src="/icons/license-management.png" className="iconHeightWidth grayscale" />
        Configuration
      </Link>
    </div>
  );
};
export default NavItem;
