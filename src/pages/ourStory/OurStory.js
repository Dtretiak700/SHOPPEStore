import ExtraHeading from "../../shared/extraHeadingInfo/ExtraHeading";
import StoryHeading from "../../shared/storyHeading/StoryHeading";
import Footer from "../../widgets/footer/Footer";
import "./ourStory.css";

const OurStory = () => {
    return(
        <div>
            <div className="main-container">
                <div className="inner-container">
                    <hr />
                    <StoryHeading />
                    <ExtraHeading />
                </div>
                <hr />
                <Footer />
            </div>
        </div>
    )
}

export default OurStory;