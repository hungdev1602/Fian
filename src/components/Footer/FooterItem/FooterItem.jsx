/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const FooterItem = ({ title, subMenu = [] }) => {
  return (
    <>
      <div className="">
        <div className="text-[24px] font-[400] text-[#313131] font-avenir uppercase">{title}</div>

        <div className="mt-[10px] flex flex-col gap-[10px]">
          {
            subMenu.map((item, index) => (
              <Link 
                key={index}
                to={item.link}
                className="text-[18px] font-[400] text-[#797979]"
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