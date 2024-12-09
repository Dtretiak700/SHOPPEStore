import { useTheme } from "../../processes/contextTheme";
import "./tabs.css";

const TabItem = ({tab, index, setActiveTab}) => {
    const { theme } = useTheme();

    return(
        <div>
            <button className={`buttonTab buttonTab_${theme}`}
                    value={index}
                    onClick={() => setActiveTab(index)}
            >
                {tab}
            </button>
        </div>
    )
}

export default TabItem;