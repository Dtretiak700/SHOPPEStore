import TabItem from "./TabItem";
import "./tabs.css";

const Tabs = ({setActiveTab}) => {

    return(
        <div className="btnTabs">
            {
                ["Description", "Aditional information", "Reviews(0)"].map((tab, index) => (
                    <TabItem 
                        key={index}
                        tab = {tab}
                        index = {index}
                        setActiveTab={setActiveTab}/>
                ))
            }
        </div>
    )
}

export default Tabs;