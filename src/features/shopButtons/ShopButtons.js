import "./shopButtons.css";
import { itemsInfo } from "../../shared/itemsCard/itemsInfo";

const ShopButtons = ({ filteredItems, setShopData }) => {
    return(
        <div className="buttons-container">
            <button className="shop-button active" onClick={() => setShopData(itemsInfo)}>View All</button>
            <button className="shop-button" onClick={() => filteredItems("earrings")}>Earrings</button>
            <button className="shop-button" onClick={() => filteredItems("hair")}>Hair Sets</button>
            <button className="shop-button" onClick={() => filteredItems("necklace")}>Necklaces</button>
        </div>
    )
}

export default ShopButtons;