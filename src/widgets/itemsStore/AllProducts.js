import ItemsCard from "../../shared/itemsCard/ItemsCard";
import ShopButtons from "../../features/shopButtons/ShopButtons";
import "./allProducts.css";
import { useState } from "react";
import { itemsInfo } from "../../shared/itemsCard/itemsInfo";

const Items = () => {
    const [shopData, setShopData] = useState(itemsInfo);

    const filteredItems = (category) => {
        const newItems = itemsInfo.filter(element => element.category === category);
        setShopData(newItems);
    }
    
    return(
        <div>
            <div className="title-container">
                <h3 className="shop-title">Shop</h3>
                <ShopButtons filteredItems={filteredItems} 
                            setShopData={setShopData}
                />
            </div>
            <div className="items-container">
                {shopData.map(item => {
                    const {id, itemPic, name, price, category} = item;
                    return (
                        <ItemsCard  key={id} 
                                    itemPic={itemPic}
                                    name={name}
                                    price={price}
                                    category={category}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Items;