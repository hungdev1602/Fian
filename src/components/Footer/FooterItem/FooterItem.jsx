/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
const FooterItem = ({ title, subMenu = [], check = false, target="_self" }) => {
  const navigate = useNavigate()
  const handleScrollToSection = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      // Chuyển hướng về trang chính
      navigate("/");
      // Sử dụng setTimeout để đảm bảo rằng việc cuộn diễn ra sau khi chuyển hướng
      setTimeout(() => {
        window.scrollTo({ top: document.querySelector(href).offsetTop, behavior: 'smooth' });
      }, 300); // Thời gian chờ có thể điều chỉnh tùy theo nhu cầu
    }
  };
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
                className="text-[12px] sm:text-base 2xl:text-[18px] font-[300] text-[#7A7A7A]"
                target={target}
                onClick={(e) => handleScrollToSection(e, item.link)}
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