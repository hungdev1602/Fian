/* eslint-disable react/prop-types */
import { GoArrowUpRight, GoArrowDown  } from "react-icons/go";
import ButtonMore from "../../../ButtonMore/ButtonMore";
import { useState } from "react";

const ArticleItem = ({ question, answer, link, check = false }) => {
  const [isOpen, setIsOpen] = useState(check);
  return (
    <>
      <div className="w-[520px]">
        <div 
          className="flex justify-between items-center border-b border-[#aaa] cursor-pointer pb-[5px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="text-[24px] font-[400] font-avenir uppercase">{question}</div>
          <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full bg-[#fff]">
            {isOpen ? <GoArrowDown className="text-[18px]" /> : <GoArrowUpRight className="text-[18px]" />}
          </div>
        </div>
        <div 
          className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[10000px]' : 'max-h-0 overflow-hidden'}`}
          style={{ maxHeight: isOpen ? '10000px' : '0', opacity: isOpen ? '1' : '0', marginTop: isOpen ? '30px' : '0' }}
        >
          <div className="px-[20px] border-x border-[#aaa] mt-[20px]">
            <div className="text-[20px] font-[500] mb-[40px]">{answer}</div>
  
            <ButtonMore text={'Читать'} link={link} />
          </div>
          <div className="w-full h-[1px] border-t border-[#aaa] mt-[20px]"></div>
        </div>
      </div>
    </>
  )
}

export default ArticleItem