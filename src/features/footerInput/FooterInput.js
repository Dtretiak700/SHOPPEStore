import { useForm } from "@formspree/react";
import "./footerInput.css";
import arrowButton from "../../shared/assets/images/buttonInput.png";
import { useTheme } from "../../processes/contextTheme";

const FooterInput = () => {
    const [state, handleSubmit, reset] = useForm('xleqapwj');
    const {theme} = useTheme();
    if (state.succeeded) {
    return <div className="reset-container">
                <h3 className={`input-text input-text_${theme}`}>You have successfully subscribed to our newsletter.</h3>
                <p className="input-extra-text">Follow us on social media for more updates and special offers.</p>
                <button onClick={reset} className={`button-reset button-reset_${theme}`}>Close</button>
            </div>
    }
    return (
    <form onSubmit={handleSubmit}>
        <input 
            id="email" 
            type="email" 
            name="email" 
            placeholder="Give an email, get the newsletter." 
            className={`email_${theme}`}
        />
        <button 
            className={`submit-button submit-button_${theme}`} 
            type="submit" 
            disabled={state.submitting}
        >
            <img 
                className="arrow" 
                src={arrowButton} 
                alt="Submit"
            />
        </button>
    </form>
    )
}

export default FooterInput;