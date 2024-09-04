import "./shopInfo.css";
import reviewStars from "../assets/images/Star.png";

const ShopInfo = () => {
    return(
        <div className="main-container"> 
            <div className="title">
                <h2>Lira Earrings</h2>
                <h4>$ 20,00</h4>
            </div>
            <div className="customer-review-container">
                <div className="review-container">
                    <img src={reviewStars} alt="Review Stars"/>
                    <h5>1 customer review</h5>
                </div>
                <p>I recently purchased a pair of golden earrings, and I couldn't be happier with them. The craftsmanship is exquisite, and the gold has a beautiful shine that adds a touch of elegance to any outfit. They're incredibly versatile—I've worn them both casually and for special occasions, and they always get compliments. The earrings are also very comfortable, even for extended wear. Overall, these golden earrings are a fantastic addition to my jewelry collection, combining timeless beauty with practical durability. Highly recommend!</p>
            </div>
        </div>
    )
}

export default ShopInfo;