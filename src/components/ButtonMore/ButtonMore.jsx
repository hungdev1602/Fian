/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import arrow_share from "/images/arrow_share.svg"
import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.scss";
const ButtonMore = ({ text, link, customWidth = false, check, setOpenBurgerMenu }) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <>
      {/* Thêm class = "switch" vào thẻ cha (phải thêm data-isOn, onMouseEnter, onMouseLeave) */}
      <Link 
        to={link}
        className="inline-flex items-center justify-between text-[#fff] rounded-[40px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] switch"
        data-isOn={isOn} onMouseEnter={toggleSwitch} onMouseLeave={toggleSwitch}
        customWidth={customWidth ? "yeah" : "nope"}
        onClick={check ? () => setOpenBurgerMenu(false) : null}
      >
        {isOn && <div className="hidden sm:block text-[18px] 2xl:text-[24px] font-[300] pl-[15px] 2xl:pl-[12px]">{text}</div>}
        <div className="block sm:hidden text-[14px] sm:text-[18px] 2xl:text-[24px] font-[300] pl-[15px] 2xl:pl-[12px]">{text}</div>
        {/* Thêm motion. trước thẻ (phải thêm layout transition) */}
        <motion.div 
          className={`${customWidth ? "w-[42px]" : "w-[52px]"} sm:w-[52px] 2xl:w-[50px] aspect-square bg-[#fff] rounded-full flex items-center justify-center cursor-pointer`}
          layout transition={spring}
        >
          <img 
            src={arrow_share} 
            alt="" 
            className="w-[30px] sm:w-[35px] aspect-square object-cover"

          />
        </motion.div>
      </Link>
    </>
  )
}

export default ButtonMore
