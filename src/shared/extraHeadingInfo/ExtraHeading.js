import "./extraHeading.css";
import headSmall from "../assets/images/headImageSmall.png";

const ExtraHeading = () => {
    return(
        <div className="extra-main-container">
            <div className="extra-container">
                <h5 className="text">It was a coincidental meeting halfway around the world that inspired the idea for Maya Brenner. On this trip, our founder, Anny Jonhson, met an intriguing British woman with impeccable yet understated style. The woman had a particular fondness for wearing her vintage jewerly. Her name? Maya Brenner</h5>
                <h5 className="text">Inspired by her new acquaintance’s timeless style, Anny decided to create his own line of jewerly. Minimalistic and refined, the classic design came to be has become a staple, with truly wide-ranging appeal. A few years on, this design is still part of the fabric of what makes Anny Johnson so special.</h5>  
                <img className="small-head-pic" src={headSmall} alt="Heading Small Story"/>
                <h2 className="small-title">Top trends</h2>
                <h5 className="text">Our jewellery is designed to be worn every day, no matter the occasion.
                With a casual yet tasteful allure, our jewellery collection is a true celebration of the impeccable craftsmanship behind all of Anny Jonhson’s timeless designs.</h5>
                <ul className="text-list">
                    <li>● quality accessories that stand the test of time</li>
                    <li>● build a sustainable future for the brand </li>
                    <li>● growing responsibly and collaborating with our partners</li>
                    <li>● we believe we can make the greatest contributions</li>
                </ul>
            </div>
        </div>
    )
}

export default ExtraHeading;