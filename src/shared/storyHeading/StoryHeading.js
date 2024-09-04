import "./storyHeading.css";
import headingImage from "../assets/images/storyHead.png";

const StoryHeading = () => {
    return(
        <div>
            <h1 className="heading-title">Fast Fashion, And Faster Fashion</h1>
            <h5 className="heading-text">by <span>ANNY JOHNSON</span> - October 8,2020</h5>
            <img className="main-head-pic" src={headingImage} alt="Heading Story"/>
        </div>
    )
}

export default StoryHeading;