/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import FormEmail from "../../FormEmail/FormEmail";
import burger_home from "/images/burger_home.png"
import burger_case from "/images/burger_case.png"
import burger_case_white from "/images/burger_case_white.png"
import burger_service from "/images/burger_service.png"
import burger_service_white from "/images/burger_service_white.png"
import burger_contact from "/images/burger_contact.png"
import burger_contact_white from "/images/burger_contact_white.png"
import burger_about from "/images/burger_about.png"

import { Link } from "react-router-dom";
import { useState } from "react";
import Item from "../../../pages/HomePage/Sections/Section4/components/Item/Item";
import ServiceItem from "../../ServiceItem/ServiceItem";
import { RiTelegram2Line } from "react-icons/ri";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
const BurgerMenu = ({ openBurgerMenu, setOpenBurgerMenu }) => {
  const [isOpen, setIsOpen] = useState("");
  const data = [
    {
      background: 'bg-bg1',
      title: `БЦ ЗАО`,
      width: `w-full lg:w-[380px] xl:w-[400px] 2xl:w-[601px]`,
      cards: ['Коммерческая', 'Покупка'],
      link: `/case1`
    },
    {
      background: 'bg-bg2',
      title: `БЦ СЗАО`,
      width: `w-full lg:w-[300px] xl:w-[330px] 2xl:w-[480px]`,
      cards: ['Коммерческая', 'Покупка'],
      link: `/case2`
    },
    {
      background: 'bg-bg3',
      title: `БЦ Баумонский`,
      width: `w-full lg:w-[300px] xl:w-[330px] 2xl:w-[480px]`,
      cards: [window.innerWidth < 1600 ? 'ГАБ' : 'Продажа ГАБ', 'Капитализация'],
      link: `/case3`,
      thirdary: `ГАБ`
    },
  ]
  const data1 = [
    {
      title: `Коммерческая 
      недвижимость`,
      desc: `Покупка, продажа, упаковка, готовые 
      арендные бизнесы для инвесторов`,
      link: `/commercial`,
      secondary: `Покупка, продажа, упаковка, 
      габ для инвесторов`
    },
    {
      title: `Жилая 
      недвижимость`,
      desc: `Услуги по покупке и продажи жилой 
      недвижимости`,
      link: `residential`,
      secondary: `Услуги по покупке и продажи 
      жилой недвижимости`
    },
    {
      title: `Инвестиции в 
      недвижимость`,
      desc: `Минимизируем риски и 
      обеспечиваем высокую доходность`,
      link: `/investment`,
      secondary: `Минимизируем риски и 
      обеспечиваем доходность`
    },
    {
      title: `Перепланировка и 
      реконструкции`,
      desc: `Оптимизируем вашу недвижимость 
      и повысим ее привлекательность`,
      link: `/reconstruction`,
      secondary: `оптимизируем вашу 
      недвижимость`
    },
  ]
  const socialsData = [
      {
        icon: <RiTelegram2Line className="text-[16px] 2xl:text-[24px]"/>,
        link: "/",
      },
      {
        icon: <FaWhatsapp className="text-[16px] 2xl:text-[24px]"/>,
        link: "/",
      },
      {
        icon: <FaInstagram className="text-[16px] 2xl:text-[24px]"/>,
        link: "/",
      },
      {
        icon: <FaXTwitter className="text-[16px] 2xl:text-[24px]"/>,
        link: "/",
      },
      {
        icon: <FiYoutube className="text-[16px] 2xl:text-[24px]"/>,
        link: "/",
      }
    ]
  return (
    <>
      <div className={`block sm:hidden fixed inset-0 bg-white z-[999] my-[-1px] py-[20px] overflow-y-scroll transition duration-800 ease-linear ${openBurgerMenu ? "visible opacity-100" : "invisible opacity-0"}`}>
        <div className="relative bg-white container mx-auto">

          <div className="flex items-center justify-between">
            <div className="uppercase text-[24px] leading-[21.6px] font-avenir font-bold">меню</div>
            <div 
              onClick={() => setOpenBurgerMenu(false)} 
              className=""
            >
              <IoClose className="text-[26px]"/>
            </div>
          </div>

          {/* menu item */}
          <div className="mt-[30px]">
            {/* Главная */}
            <Link 
              to="/" 
              className="flex items-center gap-[10px] text-[16px] leading-[19.6px] font-avenir font-[400] uppercase"
              onClick={() => setOpenBurgerMenu(false)}
            >
              <img src={burger_home} alt="" className="w-[25px] aspect-square object-cover" />
              Главная
            </Link>
            {/* ======= Наши работы =========*/}
            <div 
              className={`flex items-center justify-between mt-[20px] transition-all duration-300 ease-in-out ${isOpen === "first" ? 'p-[10px] bg-black text-white rounded-[20px]' : ''}`}
            >
              <div 
                className="flex items gap-[10px]"
                onClick={() => setIsOpen("first")}
              >
                <img src={isOpen === "first" ? burger_case_white : burger_case} alt="" className="w-[25px] aspect-square object-cover"/>
                <div className="uppercase text-[16px] leading-[24.6px] font-avenir font-[400]">Наши работы</div>
              </div>
              {
                isOpen === "first" ? <div onClick={() => setIsOpen("")}><IoClose className="text-[20px]"/></div> : null
              }
            </div>
            {/* answer */}
            <div 
              className={`transition-all duration-300 ease-in-out ${isOpen === "first" ? 'max-h-[10000px]' : 'max-h-0 overflow-hidden'}`}
              style={{ maxHeight: isOpen === "first" ? '10000px' : '0', opacity: isOpen === "first" ? '1' : '0', marginTop: isOpen === "first" ? '20px' : '0' }}
            >
              {/* data */}
              <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-[20px] lg:gap-0 mt-[20px] sm:mt-[40px]">
                {data.map((item, index) => (
                  <Item 
                    key={index} 
                    {...item} 
                    setIsOpen={setOpenBurgerMenu}
                    check={true}
                  />
                ))} 
              </div>
            </div>
            {/* ============================= */}
            
            {/* ======= Услуги =========*/}
            <div 
              className={`flex items-center justify-between mt-[20px] transition-all duration-300 ease-in-out ${isOpen === "second" ? 'p-[10px] bg-black text-white rounded-[20px]' : ''}`}
            >
              <div 
                className="flex items gap-[10px]"
                onClick={() => setIsOpen("second")}
              >
                <img src={isOpen === "second" ? burger_service_white : burger_service} alt="" className="w-[25px] aspect-square object-cover"/>
                <div className="uppercase text-[16px] leading-[24.6px] font-avenir font-[400]">Услуги</div>
              </div>
              {
                isOpen === "second" ? <div onClick={() => setIsOpen("")}><IoClose className="text-[20px]"/></div> : null
              }
            </div>
            {/* answer */}
            <div 
              className={`transition-all duration-300 ease-in-out ${isOpen === "second" ? 'max-h-[10000px]' : 'max-h-0 overflow-hidden'}`}
              style={{ maxHeight: isOpen === "second" ? '10000px' : '0', opacity: isOpen === "second" ? '1' : '0', marginTop: isOpen === "second" ? '20px' : '0' }}
            >
              {/* data */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] sm:gap-[20px] mt-[20px] sm:mt-[40px]">
                {data1.map((item, index) => (
                  <ServiceItem 
                    title={item.title}
                    desc={item.desc}
                    link={item.link}
                    secondary={item.secondary}
                    check={true}
                    setOpenBurgerMenu={setOpenBurgerMenu}
                    key={index}
                  />
                ))}
              </div>
            </div>
            {/* ============================= */}


            {/* ======= Контакты =========*/}
            <div 
              className={`flex items-center justify-between mt-[20px] transition-all duration-300 ease-in-out ${isOpen === "third" ? 'p-[10px] bg-black text-white rounded-[20px]' : ''}`}
            >
              <div 
                className="flex items gap-[10px]"
                onClick={() => setIsOpen("third")}
              >
                <img src={isOpen === "third" ? burger_contact_white : burger_contact} alt="" className="w-[25px] aspect-square object-cover"/>
                <div className="uppercase text-[16px] leading-[24.6px] font-avenir font-[400]">Контакты</div>
              </div>
              {
                isOpen === "third" ? <div onClick={() => setIsOpen("")}><IoClose className="text-[20px]"/></div> : null
              }
            </div>
            {/* answer */}
            <div 
              className={`transition-all duration-300 ease-in-out ${isOpen === "third" ? 'max-h-[10000px]' : 'max-h-0 overflow-hidden'}`}
              style={{ maxHeight: isOpen === "third" ? '10000px' : '0', opacity: isOpen === "third" ? '1' : '0', marginTop: isOpen === "third" ? '20px' : '0' }}
            >
              {/* data */}
              <div className="flex items-center gap-[10px] mt-[20px] mb-[20px]">
                {socialsData.map((item, index) => (
                  <Link 
                    key={index}
                    to={item.link}
                    className="w-[30px] 2xl:w-[45px] aspect-square bg-[#333333] text-[#fff] rounded-full flex items-center justify-center cursor-pointer"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
              <div className="text-[12px] font-[400] leading-[14.5px] text-[#808080]">+7 999 999 99 99</div>
              <div className="text-[12px] font-[400] leading-[14.5px] text-[#808080] mt-[10px]">fianrealestate@yandex.ru</div>
              <div className="text-[12px] font-[400] leading-[14.5px] text-[#808080] mt-[10px]">Большая тишинская 8 к1 офис 307</div>
            </div>
            {/* ============================= */}

            {/* Главная */}
            <Link 
              to="/about" 
              className="flex items-center gap-[10px] text-[16px] leading-[19.6px] font-avenir font-[400] uppercase mt-[20px]"
              onClick={() => setOpenBurgerMenu(false)}
            >
              <img src={burger_about} alt="" className="w-[25px] aspect-square object-cover" />
              Об основателе
            </Link>
          </div>
          <FormEmail check={true}/>
        </div>
      </div>
    </>
  )
}

export default BurgerMenu