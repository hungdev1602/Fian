/* eslint-disable react/prop-types */
import ButtonMore from "../ButtonMore/ButtonMore"

const ServiceItem = ({ title, desc, link, secondary, check=false, setOpenBurgerMenu }) => {
  return (
    <>
      <div className={`w-auto lg:w-[260px] 2xl:w-[390px] h-[164px] sm:h-[240px] 2xl:h-[268px] rounded-[20px] pt-[20px] px-[10px] 2xl:px-[23px] text-center relative ${check ? "bg-[#F3F3F3]" : "bg-white"}`}>
        <div className="text-[12px] sm:text-[21px] 2xl:text-[28px] font-[400] font-avenirLight leading-[19px] sm:leading-[29.4px] 2xl:leading-[34.3px] uppercase whitespace-pre-line sm:whitespace-normal 2xl:whitespace-pre-line">
          {title}
        </div>
        <div className="text-[10px] sm:text-[13px] 2xl:text-[19px] font-[400] leading-[12px] sm:leading-[20px] mt-[15px] sm:mt-[20px] whitespace-pre-line sm:whitespace-normal 2xl:whitespace-pre-line">
          {window.innerWidth < 576 ? secondary : desc}
        </div>

        <div className="flex justify-center absolute bottom-[10px] sm:bottom-[20px] left-[10px] sm:left-[30px] 2xl:left-[70px] right-[10px] sm:right-[30px] 2xl:right-[70px]">
          <ButtonMore 
            text={'Подробнее'}
            link={link}
            check={check}
            setOpenBurgerMenu={setOpenBurgerMenu}
          />
        </div>
      </div>
    </>
  )
}

export default ServiceItem