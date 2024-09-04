import FollowUs from "../../widgets/followUs/FollowUs";
import Footer from "../../widgets/footer/Footer";
import HeaderSliders from "../../widgets/headerSliders/HeaderSliders";
import Items from "../../widgets/itemsStore/AllProducts";
import "./mainPage.css";

const MainPage = () => {
    return(
        <div className="mainContainer">
            <div className="innerContainer">
                <HeaderSliders />
                <Items />
                <hr />
                <FollowUs />
                <hr />
                <Footer />
            </div>
        </div>
    )
}

export default MainPage;