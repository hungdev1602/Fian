/* eslint-disable react/prop-types */
import Title from "../Title/Title"
import MobileAccordion from "./MobileAccordion/MobileAccordion"
const ServiceRight = ({ data }) => {
  return (
    <>
      <div className="mt-[40px] sm:mt-[100px] 2xl:mt-[120px]">
        <Title title={data.title} />

        <div className="flex justify-between items-start mt-[20px] md:mt-[40px]">
          {/* Left */}
          <div className={`w-[150px] md:w-[250px] lg:w-[300px] 2xl:w-[500px] ${data.heightImg} rounded-[20px] truncate`}>
            <img src={data.image} alt="" className="w-full h-full object-cover"/>
          </div>

          {/* Right */}
          <div className="flex-1 hidden md:flex flex-col gap-[10px] lg:gap-[30px] ml-[20px] lg:ml-[35px] 2xl:ml-[50px]">
            {
              data.info.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-between pb-[10px] ${item.padding} 2xl:pb-[25px] border-b border-[#aaa]`}
                >
                  {/* Left */}
                  <div className="flex items-center gap-[15px] 2xl:gap-[20px]">
                    <div className="w-[30px] lg:w-[50px] aspect-square text-[12px] lg:text-[20px] font-bold flex items-center justify-center rounded-full border border-[#aaa]">{index + 1}</div>
                    <div className="text-[12px] lg:text-[20px] 2xl:text-[24px] font-[400] font-avenir uppercase leading-[18px] 2xl:leading-[21px]">{item.title}</div>
                  </div>

                  {/* Right */}
                  <div className="w-[230px] lg:w-[330px] 2xl:w-[430px] text-[12px] lg:text-[15px] 2xl:text-[20px] text-[#6D6D6D] leading-[19.36px] 2xl:leading-[24px] whitespace-normal 2xl:whitespace-pre-line">{item.desc}</div>
                </div>
              ))
            }


            <div className="flex items-center justify-between mt-0 lg:mt-[-20px] 2xl:mt-0">
              <div className="text-[12px] lg:text-[20px] 2xl:text-[28px] font-[400] text-[#494949] whitespace-pre-line leading-[14.52px] lg:leading-[24.2px] 2xl:leading-[34px]">{data.desc}</div>

              {
                data.hideButton ? '' : <button className="w-[200px] 2xl:w-[350px] h-[40px] lg:h-[50px] 2xl:h-[75px] bg-[#333333] text-[14px] 2xl:text-[24px] font-[500] text-[#fff] rounded-[40px]">{data.buttonText}</button>
              }
            </div>
          </div>
          
          {/* Mobile Right */}
          <div className="flex flex-col gap-[10px] md:hidden flex-1 ml-[10px]">
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
              data.hideButton &&
              <>
                <div className="flex items-center justify-between mt-0 lg:mt-[-20px] 2xl:mt-0">
                  <div className="text-[12px] lg:text-[20px] 2xl:text-[28px] font-[400] text-[#333] whitespace-pre-line leading-[14.52px] lg:leading-[24.2px] 2xl:leading-[34px] tracking-tighter sm:tracking-normal">{data.desc}</div>

                  {
                    data.hideButton ? '' : <button className="w-[200px] 2xl:w-[350px] h-[40px] lg:h-[50px] 2xl:h-[75px] bg-[#333333] text-[14px] 2xl:text-[24px] font-[500] text-[#fff] rounded-[40px]">{data.buttonText}</button>
                  }
                </div>
              </>
            }
          </div>
          
        </div>
        {
          !data.hideButton && 
          <div className="flex md:hidden items-center justify-between mt-[20px]">
            <div className="w-[180px] text-[12px] font-[500] text-[#333] leading-[14.52px] lg:leading-[24.2px] 2xl:leading-[34px]">{data.desc}</div>

            {
              data.hideButton ? '' : <button className="w-[165px] h-[40px] lg:h-[50px] 2xl:h-[75px] bg-[#333333] text-[14px] 2xl:text-[24px] font-[500] text-[#fff] rounded-[40px]">{data.buttonText}</button>
            }
          </div>
        }
        
      </div>
    </>
  )
}

export default ServiceRight