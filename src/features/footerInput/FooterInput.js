import { useForm } from "@formspree/react";
import "./footerInput.css";
import arrowButton from "../../shared/assets/images/buttonInput.png";

const FooterInput = () => {
    const [state, handleSubmit, reset] = useForm('xleqapwj');
    if (state.succeeded) {
    return <div className="reset-container">
                <h3 className="input-text">You have successfully subscribed to our newsletter.</h3>
                <p className="input-extra-text">Follow us on social media for more updates and special offers.</p>
                <button onClick={reset} className="button-reset">Close</button>
            </div>
    }
    return (
    <form onSubmit={handleSubmit}>
        <input id="email" type="email" name="email" placeholder="Give an email, get the newsletter." />
        <button className="submit-button" type="submit" disabled={state.submitting}>
            <img className="arrow" src={arrowButton} alt="Submit"/>
        </button>
    </form>
    )
}

export default FooterInput;