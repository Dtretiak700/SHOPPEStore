import { useState } from "react";
import Tabs from "../../features/tabs/Tabs";
import ShopHeadBlock from "../../widgets/shopHeadBlock/ShopHeadBlock";
import "./shopPage.css";
import TabInfoOne from "../../features/tabs/TabInfoOne";
import TabInfoTwo from "../../features/tabs/TabInfoTwo";
import TabInfoThree from "../../features/tabs/TabInfoThree";
import SimilarItems from "../../widgets/shopSimilarItems/SimilarItems";
import Footer from "../../widgets/footer/Footer";
import { useTheme } from "../../processes/contextTheme";

const ShopPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const {theme} = useTheme();

    return(
        <div className={`main-container main-container_${theme}`}>
            <div className="inner-container">
                <ShopHeadBlock />
                <Tabs setActiveTab={setActiveTab}/>
                {activeTab === 0 && <TabInfoOne />}
                {activeTab === 1 && <TabInfoTwo />}
                {activeTab === 2 && <TabInfoThree />}
                <SimilarItems />
                <hr />
                <Footer />
            </div>
        </div>
    )
}

export default ShopPage;