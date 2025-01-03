/* eslint-disable react/prop-types */
import ButtonMore from "../ButtonMore/ButtonMore"

const ServiceItem = ({ title, desc, link }) => {
  return (
    <>
      <div className="w-[390px] h-[268px] bg-[#fff] rounded-[20px] pt-[20px] px-[23px] text-center relative">
        <div className="text-[28px] font-[400] font-avenir leading-[34.3px] uppercase whitespace-pre-line">{title}</div>
        <div className="text-[19px] font-[400] leading-[20px] mt-[20px] whitespace-pre-line">{desc}</div>

        <div className="absolute bottom-[20px] left-[70px] right-[70px]">
          <ButtonMore 
            text={'Подробнее'}
            link={link}
          />
        </div>
      </div>
    </>
  )
}

export default ServiceItem