/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const FooterItem = ({ title, subMenu = [], check = false }) => {
  return (
    <>
      <div className="">
        <div className="text-base sm:text-[20px] 2xl:text-[24px] font-[400] text-[#313131] font-avenir uppercase">{title}</div>

        <div className="mt-[10px] flex flex-col gap-[10px]">
          {
            subMenu.map((item, index) => (
              <Link 
                key={index}
                to={item.link}
                className="text-[12px] sm:text-base 2xl:text-[18px] font-[400] text-[#7A7A7A]"
              >
                {item.title}
              </Link>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default FooterItem