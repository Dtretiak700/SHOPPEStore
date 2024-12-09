import "./similarItems.css";
import similarItemOne from "../../shared/assets/images/itemEarringsGold.png";
import similarItemTwo from "../../shared/assets/images/itemEarringsGoldCircle.png";
import similarItemThree from "../../shared/assets/images/itemHairSet.png";
import similarItemFour from "../../shared/assets/images/itemHairSetGold.png";
import similarItemFive from "../../shared/assets/images/itemHairSetThree.png";
import similarItemSix from "../../shared/assets/images/itemNecklace.png";
import { useTheme } from "../../processes/contextTheme";


const SimilarItems = () => {
    const { theme } = useTheme();

    return(
        <div className="main-scroll-container">
            <h2 className={`simItemsHeading simItemsHeading_${theme}`}>Similar Items</h2>
            <div className="scroll-container">
                <div className="itemsContainer">
                    <img src={similarItemOne} alt="Jewelry"/>
                    <h3 className={`itemsHead itemsHead_${theme}`}>Lira Earrings</h3>
                    <h4 className="itemsPrice">$ 20,00</h4>
                </div>
                <div className="itemsContainer">
                    <img src={similarItemTwo} alt="Jewelry"/>
                    <h3 className={`itemsHead itemsHead_${theme}`}>Hal Earrings</h3>
                    <h4 className="itemsPrice">$ 25,00</h4>
                </div>
                <div className="itemsContainer">
                    <img src={similarItemThree} alt="Jewelry"/>
                    <h3 className={`itemsHead itemsHead_${theme}`}>Kaede Hair Pin Set Of 3</h3>
                    <h4 className="itemsPrice">$ 30,00</h4>
                </div>
                <div className="itemsContainer">
                    <img src={similarItemFour} alt="Jewelry"/>
                    <h3 className={`itemsHead itemsHead_${theme}`}>Hair Pin Set of 3</h3>
                    <h4 className="itemsPrice">$ 30,00</h4>
                </div>
                <div className="itemsContainer">
                    <img src={similarItemFive} alt="Jewelry"/>
                    <h3 className={`itemsHead itemsHead_${theme}`}>Yuki Hair Pin Set of 3</h3>
                    <h4 className="itemsPrice">$ 29,00</h4>
                </div>
                <div className="itemsContainer">
                    <img src={similarItemSix} alt="Jewelry"/>
                    <h3 className={`itemsHead itemsHead_${theme}`}>Plaine Necklace</h3>
                    <h4 className="itemsPrice">$ 19,00</h4>
                </div>
            </div>
        </div>
    )
}

export default SimilarItems;