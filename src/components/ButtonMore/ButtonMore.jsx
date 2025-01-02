/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import arrow_share from "/images/arrow_share.png"
import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.scss";
const ButtonMore = ({ text }) => {
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
        to={'/'}
        className="inline-flex items-center justify-between text-[#fff] truncate switch"
        data-isOn={isOn} onMouseEnter={toggleSwitch} onMouseLeave={toggleSwitch}
      >
        {isOn && <div className="text-[24px] font-[500]">{text}</div>}
        {/* Thêm motion. trước thẻ (phải thêm layout transition) */}
        <motion.div 
          className="w-[50px] h-[50px] bg-[#fff] rounded-full flex items-center justify-center cursor-pointer"
          layout transition={spring}
        >
          <img 
            src={arrow_share} 
            alt="" 
            className="w-[15px] aspect-square object-cover"

          />
        </motion.div>
      </Link>
    </>
  )
}

export default ButtonMore
