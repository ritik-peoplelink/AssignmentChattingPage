import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import FooterPage from "./FooterPage";

const MainPage = () => {
  return (
    <BrowserRouter>
    <div className="heightFVH fullWidth">
        <Header imagePath="/icons/inlink_logo_64.png" userName="Ritik" userImagePath="/icons/ritik_pic.jpg"/>
        <FooterPage />
    </div>
    </BrowserRouter>
  );
};
export default MainPage;
