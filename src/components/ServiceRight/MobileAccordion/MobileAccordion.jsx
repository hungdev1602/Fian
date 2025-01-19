import { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";

const MobileAccordion = ({ number, title, desc }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=" pb-[10px] border-b border-[#777]">
        <div 
          className="flex items-center justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-[10px]">
            <div className="w-[29px] flex items-center justify-center aspect-square rounded-full border border-[#aaa] text-[12px] leading-[14.52px]">{number}</div>
            <div className="text-[12px] font-avenir font-[400] leading-[14.7px] uppercase">{title}</div>
          </div>
          <div className="">
            {isOpen ? <FaAngleDown /> : <FaAngleRight />}
          </div>
        </div>
        {/* answer */}
        <div 
          className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[10000px]' : 'max-h-0 overflow-hidden'}`}
          style={{ maxHeight: isOpen ? '10000px' : '0', opacity: isOpen ? '1' : '0', marginTop: isOpen ? '10px' : '0' }}
        >
          <div className="text-[10px] font-[500] leading-[12.1px] text-[#6D6D6D]">{desc}</div>
        </div>
      </div>
    </>
  )
}

export default MobileAccordion