import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/mainPage/MainPage';
import OurStory from './pages/ourStory/OurStory';
import ShopPage from "./pages/shopPage/ShopPage";
import Navbar from "./features/navbar/Navbar";


function App() {
  return (
    <Router>
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

