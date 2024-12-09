import FooterInput from "../../features/footerInput/FooterInput";
import { useTheme } from "../../processes/contextTheme";
import ExtraInfo from "../../shared/extraFooterInfo/ExtraInfo";
import "./footer.css";

const Footer = () => {
    const {theme} = useTheme();

    return(
        <div>
            <div className={`footer-container footer-container_${theme}`}>
                <div className="links-container">
                    <a href="/" className="footer-link">Contact</a>
                    <a href="/" className="footer-link">Privacy Policy</a>
                </div>
                <FooterInput />
            </div>
            <ExtraInfo />
        </div>
    )
}

export default Footer;