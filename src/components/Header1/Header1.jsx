import { Link } from "react-router-dom"
import logo from "/images/logo.svg"
const Header1 = () => {
  return (
    <>
      <div className="flex items-center gap-[93px]">
        <Link to="/" className="w-[30px] h-[35px]">
          <img 
            src={logo} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </Link>

        <div className="flex items-center gap-[40px] text-[#494949] text-[18px]">
          <Link to="/" className="font-[400]">Главная</Link>
          <Link to="/" className="font-[400]">Кейсы</Link>
          <Link to="/" className="font-[400]">Услуги</Link>
          <Link to="/about" className="font-[400]">Об основателе</Link>
        </div>
      </div>
    </>
  )
}

export default Header1