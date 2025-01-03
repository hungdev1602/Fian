/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import arrow_share from "/images/arrow_share.png"
const Item = ({ background, width, title, cards, link }) => {
  return (
    <>
      <div className={`${width} h-[500px] ${background} bg-cover rounded-[20px] truncate relative`}>
        <div className="absolute top-[20px] left-[20px] text-[28px] text-[#fff] font-[400] font-avenir">{title}</div>

        <div className="absolute bottom-0 left-0 right-0 h-[88px] bg-[#0000007e] py-[25px] px-[20px]">
          <div className="flex items-center justify-between">
            <div className="flex gap-[10px]">
              {
                cards.map((item, index) => (
                  <div 
                    key={index}
                    className="inline-flex items-center justify-center text-[16px] font-[400] font-avenirThin text-[#fff] border border-[#fff] py-[10px] px-[20px] rounded-[60px]"
                  >
                    {item}
                  </div>
                ))
              }
              
            </div>

            <Link 
              to={link} 
              className="w-[50px] h-[50px] flex items-center justify-center bg-[#fff] rounded-full cursor-pointer"
            >
              <img 
                src={arrow_share} 
                alt="" 
                className="w-[15px] aspect-square object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item