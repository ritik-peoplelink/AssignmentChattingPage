import "./index.css";
import { Routes, Route} from "react-router-dom";
import NavItem from "./NavItem";
import PeoplePage from "./PeoplePage";
const FooterPage = () => {
  return (
    <div className="FooterPage flexRow">
      <div className="LeftScreen oneFourthWidth">
        <NavItem></NavItem>
      </div>
      <div className="RightScreen oneThirdWidth">
        <Routes>
          <Route path="/" element={<PeoplePage />}>
            {/* <Route path="/" element={<Process />} />
            <Route path="/components" element={<Components />} /> */}
          </Route>
          {/* <Route path="/" element={<ProductDetailScreen />}>
          </Route> */}
        </Routes>
      </div>
    </div>
  );
};

export default FooterPage;
