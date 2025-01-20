/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import arrow_share from "/images/arrow_share.svg"
import arrow_share_white from "/images/arrow_share_white.svg"
const Item = ({ background, width, title, cards, link, setIsOpen, check = false }) => {
  return (
    <>
      <div className={`${width} h-[300px] 2xl:h-[500px] ${background} bg-cover rounded-[20px] truncate relative`}>
        <div className="absolute top-[20px] left-[20px] text-[24px] 2xl:text-[28px] text-[#fff] font-[400] font-avenirThin">{title}</div>

        <div className="absolute bottom-0 left-0 right-0 h-[50px] sm:h-[60px] 2xl:h-[88px] bg-[#0000007e] py-[10px] 2xl:py-[25px] px-[10px] 2xl:px-[20px]">
          <div className="flex items-center justify-between">
            <div className="flex gap-[5px] 2xl:gap-[10px]">
              {
                cards.map((item, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center justify-center text-[14px] sm:text-[16px] font-[400] font-avenirThin text-[#fff] border border-[#A7A398] py-[7px] sm:py-[10px] 2xl:py-[10px] px-[20px] sm:px-[12px] xl:px-[20px] rounded-[60px] leading-[17.15px] sm:leading-[19.4px]"
                  >
                    {item}
                  </div>
                ))
              }
              
            </div>

            <Link 
              to={link} 
              className="w-[30px] sm:w-[40px] 2xl:w-[50px] aspect-square flex items-center justify-center bg-[#fff] rounded-full cursor-pointer transition-all duration-200 hover:bg-[#000000CC] group"
              onClick={check ? () => setIsOpen(false) : null}
            >
              <img 
                src={arrow_share} 
                alt="" 
                className="w-[20px] sm:w-[25px] aspect-square object-cover block group-hover:hidden"
              />
              <img 
                src={arrow_share_white} 
                alt="" 
                className="w-[20px] sm:w-[25px] aspect-square object-cover hidden group-hover:block"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item