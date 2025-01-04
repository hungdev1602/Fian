import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";
const App = () => {

  return (
    <>
      <div className="mt-[65px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>

      <div className="container mx-auto">
        <Footer />
      </div>
    </>
  )
}

export default App