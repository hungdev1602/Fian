import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import CommercialPage from "./pages/CommercialPage/CommercialPage";
const App = () => {

  return (
    <>
      <div className="mt-[65px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
        </Routes>
      </div>

      <div className="container mx-auto">
        <Footer />
      </div>
    </>
  )
}

export default App