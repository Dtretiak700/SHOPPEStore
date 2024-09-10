import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/mainPage/MainPage';
import OurStory from './pages/ourStory/OurStory';
import "./shared/navbarStyle/menu.css";
import ShopPage from "./pages/shopPage/ShopPage";

function App() {
  return (
    <Router>
        <div className="nav-container">
            <nav className="navigation">
                <p className="logo-menu"><span>S</span>HOPPE</p>
                <div className="links-container">
                    <Link to="/SHOPPEStore" className="menu-link">Home</Link>
                    <Link to="/shop" className="menu-link">Shop</Link>
                    <Link to="/our_story" className="menu-link">Our Story</Link>
                </div>
            </nav>
        </div>

                <Routes>
                    <Route path="/SHOPPEStore" element={<MainPage />} />
                    <Route path="shop" element={<ShopPage />}/>
                    <Route path="/our_story" element={<OurStory />} />
                </Routes>
        </Router>
  );
}

export default App;

