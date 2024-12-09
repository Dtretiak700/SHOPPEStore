import { useTheme } from "../../processes/contextTheme";
import "./itemsCard.css";

const ItemsCard = ({ itemPic, name, price }) => {
    const {theme} = useTheme();

    return(
        <div className="item-card">
            <div className="image-container">
                <img className="items-pic" src={itemPic} alt="Shop Items"/>
            </div>
            <h3 className={`itemsName itemsName_${theme}`}>{name}</h3>
            <h4 className="itemsPrice">{price}</h4>
        </div>
    )
}

export default ItemsCard;