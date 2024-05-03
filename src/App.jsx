import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navbar/NavBar";
import AboutMePage from "./pages/AboutMePage";
import AllCoursesPage from "./pages/AllCoursesPage";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/courses" element={<AllCoursesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <div className='endDiv'></div>
      </BrowserRouter>
    </>
  );
};

export default App;
