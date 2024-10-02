import { useTheme } from "../../features/processes/contextTheme";
import FollowUsImages from "../../shared/followUsImages/FollowUsImages";
import "./followUs.css";

const FollowUs = () => {
    const {theme} = useTheme();

    return(
        <div>
            <h2 className={`post-title post-title_${theme}`}>Follow us on instagram</h2>
            <FollowUsImages />
        </div>
    )
}

export default FollowUs;