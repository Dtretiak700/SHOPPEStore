import "./shopHeadBlock.css";
import shopItem from "../../shared/assets/images/itemEarringsGold.png";
import ShopInfo from "../../shared/shopInfo/ShopInfo";

const ShopHeadBlock = () => {
    return(
        <div className="head-container">
            <img className="main-pic-shop" src={shopItem} alt="Shop Item"/>
            <ShopInfo />
        </div>
    )
}

export default ShopHeadBlock;