import FooterInput from "../../features/footerInput/FooterInput";
import ExtraInfo from "../../shared/extraFooterInfo/ExtraInfo";
import "./footer.css";

const Footer = () => {
    return(
        <div>
            <div className="footer-container">
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