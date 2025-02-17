/* eslint-disable react/prop-types */
import { useState } from "react";
import { ModalWrapper } from "../ModalWrapper/ModalWrapper"
import MobileAccordion from "../ServiceRight/MobileAccordion/MobileAccordion"
import Title from "../Title/Title"
import FormEmail from "../FormEmail/FormEmail";
const ServiceLeft = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="mt-[40px] sm:mt-[100px] 2xl:mt-[120px]">
        <Title title={data.title} />

        <div className="flex justify-between items-start mt-[40px]">
          {/* Left */}
          <div className="flex-1 hidden md:flex flex-col gap-[10px] lg:gap-[30px] mr-[20px] lg:mr-[35px] 2xl:mr-[50px]">
            {
              data.info.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-between ${item.padding} 2xl:pb-[25px] border-b border-[#aaa]`}
                >
                  {/* Left */}
                  <div className="flex items-center gap-[15px] 2xl:gap-[20px]">
                    <div className="w-[30px] lg:w-[50px] aspect-square flex items-center justify-center rounded-full border border-[#aaa] text-xl font-bold">{index + 1}</div>
                    <div className="text-[12px] lg:text-[20px] 2xl:text-[24px] font-[400] font-avenir uppercase leading-[18px] 2xl:leading-[21px]">{item.title}</div>
                  </div>

                  {/* Right */}
                  <div className="w-[230px] lg:w-[330px] 2xl:w-[430px] text-[12px] lg:text-[15px] 2xl:text-[20px] text-[#6D6D6D] leading-[19.36px] 2xl:leading-[24px] whitespace-normal 2xl:whitespace-pre-line">{item.desc}</div>
                </div>
              ))
            }


            <div className="flex items-center justify-between">
              {
                data.desc ? <div className="text-[10px] lg:text-[20px] 2xl:text-[28px] font-[500] text-[#333] whitespace-pre-line leading-[14.52px] lg:leading-[24.2px] 2xl:leading-[34px]">{data.desc}</div> : null
              }
              

              <button onClick={() => setIsOpen(true)} className="w-[200px] 2xl:w-[350px] h-[40px] lg:h-[50px] 2xl:h-[75px] bg-[#333333] text-base 2xl:text-[24px] font-[400] text-[#fff] rounded-[40px]">{data.buttonText}</button>
            </div>
          </div>

          {/* Mobile Left */}
          <div className="flex flex-col gap-[10px] md:hidden flex-1 mr-[10px]">
          {
              data.info.map((item, index) => (
                <MobileAccordion 
                  key={index}
                  number={index + 1}
                  title={item.title}
                  desc={item.desc}
                />
              ))
            }
            {
              data.check &&
              <div className="block md:hidden items-center justify-between mt-[20px]">
                <div className="w-auto text-[12px] font-[500] text-[#494949] leading-[14.52px] lg:leading-[24.2px] 2xl:leading-[34px]">{data.desc}</div>

                {
                  data.hideButton ? '' : <button onClick={() => setIsOpen(true)} className="w-[165px] h-[40px] lg:h-[50px] 2xl:h-[75px] bg-[#333333] text-[14px] 2xl:text-[24px] font-[500] text-[#fff] rounded-[40px]">{data.buttonText}</button>
                }
              </div>
            }
          </div>

          {/* Right */}
          {/* === */}
          <div className={`w-[150px] md:w-[300px] 2xl:w-[500px] ${data.heightImg} rounded-[20px] truncate`}>
            <img src={data.image} alt="" className="w-full h-full object-cover"/>
          </div>
        </div>
        {
          !data.check &&
          <div className="flex md:hidden items-center justify-between mt-[20px]">
            <div className="w-[180px] text-[12px] font-[500] text-[#494949] leading-[14.52px] lg:leading-[24.2px] 2xl:leading-[34px]">{data.desc}</div>

            {
              data.hideButton ? '' : <button onClick={() => setIsOpen(true)} className="w-[165px] h-[40px] lg:h-[50px] 2xl:h-[75px] bg-[#333333] text-[14px] 2xl:text-[24px] font-[500] text-[#fff] rounded-[40px]">{data.buttonText}</button>
            }
          </div>
        }
      </div>
      <ModalWrapper
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <FormEmail check={true}/>
      </ModalWrapper>
    </>
  )
}

export default ServiceLeft