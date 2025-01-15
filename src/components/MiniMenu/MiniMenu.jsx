/* eslint-disable react/prop-types */
import home_mini from "/images/home_mini.png"
import case_mini from "/images/case_mini.png"
import contact_mini from "/images/contact_mini.png"
import about_mini from "/images/about_mini.png"
import burger_mini from "/images/burger_mini.png"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
const MiniMenu = ({ setOpenBurgerMenu }) => {
  const navigate = useNavigate()
  const handleScrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      // Chuyển hướng về trang chính
      navigate("/");
      // Sử dụng setTimeout để đảm bảo rằng việc cuộn diễn ra sau khi chuyển hướng
      setTimeout(() => {
        window.scrollTo({ top: document.querySelector(href).offsetTop, behavior: 'smooth' });
      }, 400); // Thời gian chờ có thể điều chỉnh tùy theo nhu cầu
    }
  };
  return (
    <>
      <div className="h-[60px] bg-white fixed flex sm:hidden justify-between items-center bottom-[30px] left-[65px] right-[65px] z-[500] rounded-[400px] shadow-[0px_0px_7px_0px_rgba(0,0,0,0.25)] px-[25px]">
        <Link to="/" className="w-[30px] h-[30px] flex items-center justify-center"><img src={home_mini} alt="" /></Link>
        <Link 
          to="#cases" 
          className="w-[30px] h-[30px] flex items-center justify-center"
          onClick={(e) => handleScrollToSection(e, "#cases")}
        >
          <img src={case_mini} alt="" />
        </Link>
        <button 
          onClick={() => setOpenBurgerMenu(true)} 
          className="w-[30px] h-[30px] flex items-center justify-center"
        >
          <img src={burger_mini} alt="" />
        </button>
        <Link 
          to="#footer" 
          className="w-[30px] h-[30px] flex items-center justify-center"
          onClick={(e) => handleScrollToSection(e, "#footer")}
        >
          <img src={contact_mini} alt="" />
        </Link>
        <Link to="/about" className="w-[30px] h-[30px] flex items-center justify-center"><img src={about_mini} alt="" /></Link>
      </div>
    </>
  )
}

export default MiniMenu