import { useTheme } from "../../features/processes/contextTheme";
import ExtraHeading from "../../shared/extraHeadingInfo/ExtraHeading";
import StoryHeading from "../../shared/storyHeading/StoryHeading";
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