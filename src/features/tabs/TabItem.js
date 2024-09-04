import "./tabs.css";

const TabItem = ({tab, index, setActiveTab}) => {
    return(
        <div>
            <button className="buttonTab"
                    value={index}
                    onClick={() => setActiveTab(index)}
            >
                {tab}
            </button>
        </div>
    )
}

export default TabItem;