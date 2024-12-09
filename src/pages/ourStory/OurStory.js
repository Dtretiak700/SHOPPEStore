import { useTheme } from "../../processes/contextTheme";
import ExtraHeading from "../../entities/extraHeadingInfo/ExtraHeading";
import StoryHeading from "../../entities/storyHeading/StoryHeading";
import Footer from "../../widgets/footer/Footer";
import "./ourStory.css";

const OurStory = () => {
    const {theme} = useTheme();

    return(
        <div className={`main-container main-container_${theme}`}>
            <div className={`inner-container inner-container_${theme}`}>
                <hr />
                <StoryHeading />
                <ExtraHeading />
                <hr />
                <Footer />
            </div>
        </div>
    )
}

export default OurStory;