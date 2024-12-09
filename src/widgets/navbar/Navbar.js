import { useTheme } from "../../processes/contextTheme";
import { ThemeSwitcher } from "../../features/themeSwitcher/ThemeSwitcher";
import "./menu.css";
import { Link } from "react-router-dom";


const Navbar = () => {
    const {theme} = useTheme();

    return (
        <div className={`nav-container nav-container_${theme}`}>
            <nav className="navigation">
                <p className={`logo-menu logo-menu_${theme}`}><span>S</span>HOPPE</p>
                <div className="links-container">
                    <Link to="/" className={`menu-link menu-link_${theme}`}>Home</Link>
                    <Link to="/shop" className={`menu-link menu-link_${theme}`}>Shop</Link>
                    <Link to="/our_story" className={`menu-link menu-link_${theme}`}>Our Story</Link>
                    <ThemeSwitcher />
                </div>
            </nav>
        </div>
    )
}

export default Navbar;