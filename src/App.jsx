import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
import CommercialPage from "./pages/CommercialPage/CommercialPage";
import ResidentialPage from "./pages/ResidentialPage/ResidentialPage";
import InvestmentPage from "./pages/InvestmentPage/InvestmentPage";
import ReconstructionPage from "./pages/ReconstructionPage/ReconstructionPage";
import Case1Page from "./pages/Case1Page/Case1Page";
import Case2Page from "./pages/Case2Page/Case2Page";
import Case3Page from "./pages/Case3Page/Case3Page";
const App = () => {

  return (
    <>
      <div className="mt-[65px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/residential" element={<ResidentialPage />} />
          <Route path="/investment" element={<InvestmentPage />} />
          <Route path="/reconstruction" element={<ReconstructionPage />} />
          <Route path="/case1" element={<Case1Page />} />
          <Route path="/case2" element={<Case2Page />} />
          <Route path="/case3" element={<Case3Page />} />
        </Routes>
      </div>

      <div className="container mx-auto">
        <Footer />
      </div>
    </>
  )
}

export default App