import "./shopHeadBlock.css";
import shopItem from "../../shared/assets/images/itemEarringsGold.png";
import { useTheme } from "../../processes/contextTheme";
import reviewStars from "../../shared/assets/images/Star.png";

const ShopHeadBlock = () => {
    const { theme } = useTheme();


    return(
        <div className="head-container">
            <img className="main-pic-shop" src={shopItem} alt="Shop Item"/>
            <div className="main-container"> 
            <div className="title">
                <h2 className={`heading-info heading-info_${theme}`}>Lira Earrings</h2>
                <h4>$ 20,00</h4>
            </div>
            <div className="customer-review-container">
                <div className="review-container">
                    <img src={reviewStars} alt="Review Stars"/>
                    <p className={`customer-info_${theme}`}>1 customer review</p>
                </div>
                <p className={`customer-info_${theme}`}>I recently purchased a pair of golden earrings, and I couldn't be happier with them. The craftsmanship is exquisite, and the gold has a beautiful shine that adds a touch of elegance to any outfit. They're incredibly versatile—I've worn them both casually and for special occasions, and they always get compliments. The earrings are also very comfortable, even for extended wear. Overall, these golden earrings are a fantastic addition to my jewelry collection, combining timeless beauty with practical durability. Highly recommend!</p>
            </div>
        </div>
        </div>
    )
}

export default ShopHeadBlock;