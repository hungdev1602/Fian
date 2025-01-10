/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import arrow_share from "/images/arrow_share.png"
const Item = ({ background, width, title, cards, link }) => {
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
                    className="inline-flex items-center justify-center text-[14px] sm:text-[16px] font-[400] font-avenirThin text-[#fff] border border-[#fff] py-[7px] sm:py-[10px] 2xl:py-[10px] px-[20px] sm:px-[12px] xl:px-[20px] rounded-[60px] leading-[17.15px] sm:leading-[19.4px]"
                  >
                    {item}
                  </div>
                ))
              }
              
            </div>

            <Link 
              to={link} 
              className="w-[30px] sm:w-[40px] 2xl:w-[50px] aspect-square flex items-center justify-center bg-[#fff] rounded-full cursor-pointer"
            >
              <img 
                src={arrow_share} 
                alt="" 
                className="w-[12px] 2xl:w-[15px] aspect-square object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item