import { Link } from "react-router-dom"
import logo from "/images/logo.svg"
import human_white from "/images/human_white.png"
const Header2 = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Link to={'/'} className="inline-block w-[30px] h-[35px] truncate">
          <img src={logo} alt="" className="w-full h-full object-cover"/>
        </Link>
       
        <div className="hidden sm:flex items-center gap-[40px] text-[#494949] text-[14px] 2xl:text-[18px]">
          <Link to="/" className="font-[400]">Главная</Link>
          <Link to="/" className="font-[400]">Кейсы</Link>
          <Link to="/" className="font-[400]">Услуги</Link>
          <Link to="/about" className="font-[400]">Об основателе</Link>
        </div>

        <div className="hidden md:flex items-center gap-[10px]">
          <div className="w-[150px] 2xl:w-[250px] h-[40px] 2xl:h-[50px] bg-[#333333] text-[#fff] rounded-[40px] flex items-center justify-center cursor-pointer">Связаться</div>
          <div className="w-[40px] 2xl:w-[50px] aspect-square rounded-full bg-[#333333] p-[8px]">
            <img src={human_white} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header2