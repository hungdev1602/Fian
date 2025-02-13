/* eslint-disable react/prop-types */
import { GoArrowUpRight, GoArrowDown  } from "react-icons/go";
import ButtonMore from "../../../ButtonMore/ButtonMore";
import { useState } from "react";

const ArticleItem = ({ question, answer, link, check = false }) => {
  const [isOpen, setIsOpen] = useState(check);
  return (
    <>
      <div className="w-auto 2xl:w-[520px]">
        <div 
          className="flex justify-between items-center border-b border-[#aaa] cursor-pointer pb-[5px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[24px] font-[400] font-avenir uppercase mt-[12px] sm:mt-0 whitespace-nowrap">{question}</div>
          <div className="w-[30px] lg:w-[35px] aspect-square flex items-center justify-center rounded-full bg-[#fff]">
            {isOpen ? <GoArrowDown className="text-[18px]" /> : <GoArrowUpRight className="text-[18px]" />}
          </div>
        </div>
        <div 
          className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[10000px]' : 'max-h-0 overflow-hidden'}`}
          style={{ maxHeight: isOpen ? '10000px' : '0', opacity: isOpen ? '1' : '0', marginTop: isOpen ? (window.innerWidth < 1920 ? '10px' : '30px') : '0' }}
        >
          <div className="px-[10px] sm:px-[20px] border-x border-[#aaa] mt-[20px]">
            <div className="text-[12px] xl:text-base 2xl:text-[20px] text-[#494949] font-[400] mb-[20px] 2xl:mb-[40px]">{answer}</div>
  
            <ButtonMore text={'Читать'} link={link} customWidth={true} target="_blank"/>
          </div>
          <div className="w-full h-[1px] border-t border-[#aaa] mt-[20px]"></div>
        </div>
      </div>
    </>
  )
}

export default ArticleItem