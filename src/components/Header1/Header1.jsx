import { Link } from "react-router-dom"
import logo from "/images/new_logo.svg"
import logo_phone from "/images/new_logo_phone.svg"
import { useNavigate } from 'react-router-dom';
const Header1 = () => {
  const navigate = useNavigate()
  const handleScrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      // Chuyển hướng về trang chính
      navigate("/");
      // Sử dụng setTimeout để đảm bảo rằng việc cuộn diễn ra sau khi chuyển hướng
      setTimeout(() => {
        window.scrollTo({ top: document.querySelector(href).offsetTop, behavior: 'smooth' });
      }, 300); // Thời gian chờ có thể điều chỉnh tùy theo nhu cầu
    }
  };
  return (
    <>
      <div className="flex items-center gap-[50px] 2xl:gap-[93px]">
        <Link to="/" className="hidden sm:block w-[40px] h-[55px]">
          <img 
            src={logo} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </Link>
        {/* Mobile Logo */}
        <Link to="/" className="sm:hidden block w-full">
          <img 
            src={logo_phone} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </Link>

        <div className="hidden sm:flex items-center gap-[20px] 2xl:gap-[40px] text-[#494949] text-[14px] 2xl:text-[18px]">
          <Link to="/" className="font-[400]">Главная</Link>
          <Link 
            to="#cases" 
            className="font-[400]"
            onClick={(e) => handleScrollToSection(e, "#cases")}
          >
            Кейсы
          </Link>
          <Link 
            to="/" 
            className="font-[400]"
            onClick={(e) => handleScrollToSection(e, "#services")}
          >
            Услуги
          </Link>
          <Link to="/about" className="font-[400]">Об основателе</Link>
        </div>
      </div>
    </>
  )
}

export default Header1