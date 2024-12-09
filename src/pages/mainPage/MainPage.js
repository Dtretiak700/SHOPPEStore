import { useTheme } from "../../processes/contextTheme";
import FollowUs from "../../widgets/followUs/FollowUs";
import Footer from "../../widgets/footer/Footer";
import HeaderSliders from "../../widgets/headerSliders/HeaderSliders";
import AllProducts from "../../widgets/itemsStore/AllProducts";
import "./mainPage.css";

const MainPage = () => {
    const {theme} = useTheme();

    return(
        <div className={`mainContainer mainContainer_${theme}`}>
            <div className="innerContainer">
                <HeaderSliders />
                <AllProducts />
                <hr />
                <FollowUs />
                <hr />
                <Footer />
            </div>
        </div>
    )
}

export default MainPage;