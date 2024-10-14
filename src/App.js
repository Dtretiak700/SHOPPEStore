import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/mainPage/MainPage';
import OurStory from './pages/ourStory/OurStory';
// import "./features/navbar/menu.css";
import ShopPage from "./pages/shopPage/ShopPage";
// import { ThemeSwitcher } from "./features/themeSwitcher/ThemeSwitcher";
// import { useTheme } from "./features/processes/contextTheme";
import Navbar from "./features/navbar/Navbar";


function App() {
  // const {theme} = useTheme();

  return (
    <Router>
        {/* <div className={`nav-container nav-container_${theme}`}>
            <nav className="navigation">
                <p className={`logo-menu logo-menu_${theme}`}><span>S</span>HOPPE</p>
                <div className="links-container">
                    <Link to="/" className={`menu-link menu-link_${theme}`}>Home</Link>
                    <Link to="/shop" className={`menu-link menu-link_${theme}`}>Shop</Link>
                    <Link to="/our_story" className={`menu-link menu-link_${theme}`}>Our Story</Link>
                    <ThemeSwitcher />
                </div>
            </nav>
        </div> */}

              <Navbar />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="shop" element={<ShopPage />}/>
                    <Route path="/our_story" element={<OurStory />} />
                </Routes>
        </Router>
  );
}

export default App;

