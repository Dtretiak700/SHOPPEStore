import "./storyHeading.css";
import headingImage from "../assets/images/storyHead.png";
import { useTheme } from "../../features/processes/contextTheme";

const StoryHeading = () => {
    const {theme} = useTheme();

    return(
        <div>
            <h1 className={`heading-title heading-title_${theme}`}>Fast Fashion, And Faster Fashion</h1>
            <h5 className={`heading-text heading-text_${theme}`}>by <span>ANNY JOHNSON</span> - October 8,2020</h5>
            <img className="main-head-pic" src={headingImage} alt="Heading Story"/>
        </div>
    )
}

export default StoryHeading;