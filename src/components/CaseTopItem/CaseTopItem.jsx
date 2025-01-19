/* eslint-disable react/prop-types */
import ButtonMore from "../ButtonMore/ButtonMore";
import Header1 from "../Header1/Header1"
import human_black from "/images/human_black.png"
import logo_rotate from "/images/logo_rotate.png"

const CaseTopItem = (props) => {
  const {
    dataServiceItemTop
  } = props;
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between items-start gap-[15px] md:gap-0 flex-wrap md:flex-nowrap mb-[30px] md:mb-[120px]">
          <Header1 />
          <div className={`hidden sm:block w-full md:w-[360px] lg:w-[576px] 2xl:w-[870px] h-[500px] lg:h-[527px] 2xl:h-[649px] ${dataServiceItemTop.backgroundImg} bg-cover rounded-[20px] relative truncate`}>
            {/* contact */}
            <div className="absolute top-[20px] right-[20px] flex gap-[10px]">
              <div className="w-[150px] 2xl:w-[250px] h-[40px] 2xl:h-[50px] bg-[#ffffffd6] rounded-[40px] flex items-center justify-center cursor-pointer">Связаться</div>
              <div className="w-[40px] 2xl:w-[50px] aspect-square rounded-full bg-[#ffffffd6] p-[8px]">
                <img src={human_black} alt="" />
              </div>
            </div>
  
            {/* change state */}
            <div className="absolute bottom-[10px] 2xl:bottom-[20px] left-[10px] 2xl:left-[20px] right-[10px] 2xl:right-[20px]">
              <div className="flex justify-between items-center mt-[20px]">
                <div className="flex items-center gap-[10px]">
                  {
                    dataServiceItemTop.cards.map((item, index) => (
                      <div 
                        key={index}
                        className="w-[135px] 2xl:w-[200px] h-[40px] 2xl:h-[50px] text-sm 2xl:text-base rounded-[40px] flex items-center justify-center bg-[#ffffffe6]"
                      >
                        {item}
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile section rotate img */}
      <div className="container mx-auto flex sm:hidden relative mb-[-15px]">
        <div className="w-[200px] h-[250px]">
          <img src={logo_rotate} alt="" />
        </div>
        <div className="w-[200px] h-[250px] mt-[8%]">
          <img src={dataServiceItemTop.imgRotate} alt="" />
        </div>
      </div>
      {
        dataServiceItemTop.cards.length > 0 &&
        <div className="flex gap-[5px] sm:hidden bg-[#797979] py-[10px] pl-[10px] pr-[10px] h-[50px] text-white">
          {
            dataServiceItemTop.cards.map((item, index) => (
              <div 
                key={index}
                className="px-[20px] h-[30px] flex items-center justify-center text-[13px] font-avenirThin rounded-[60px] bg-transparent border border-white"
              >
                {item}
              </div>
            ))
          }
        </div>
      }

      {/* Left content */}
      <div className="container mx-auto">
        <div className="w-full md:w-[630px] mt-[30px] sm:mt-0 md:mt-[-550px] lg:mt-[-555px] 2xl:mt-[-685px]">
          <div className="font-avenir text-[23px] sm:text-[28px] 2xl:text-[32px] font-[400] uppercase leading-[20.7px] sm:leading-[25.2px] 2xl:leading-[28.8px]">{dataServiceItemTop.title}</div>
  
          {/* Desc */}
          <div className="mt-[30px] lg:mt-[55px] 2xl:mt-[90px] flex items-center gap-[20px] 2xl:gap-[25px]">
            <div className="text-center sm:text-left 2xl:text-center">
              <div className="text-[16px] sm:text-[20px] 2xl:text-[24px] font-[700] text-[#484848] leading-[19.36px] sm:leading-[24.2px] 2xl:leading-[29px]">{dataServiceItemTop.desc[0].title}</div>
              <div className="text-[12px] sm:text-[16px] 2xl:text-[18px] font-[400] text-[#313131] leading-[14.7px] sm:leading-[19.6px] 2xl:leading-[21.78px] mt-[10px]">{dataServiceItemTop.desc[0].subtitle}</div>
            </div>
            <div className="h-[30px] sm:h-[40px] border border-[#C9C9C9]"></div>
            <div className="text-center sm:text-left 2xl:text-center">
              <div className="text-[16px] sm:text-[20px] 2xl:text-[24px] font-[700] text-[#484848] leading-[19.36px] sm:leading-[24.2px] 2xl:leading-[29px]">{dataServiceItemTop.desc[1].title}</div>
              <div className="text-[12px] sm:text-[16px] 2xl:text-[18px] font-[400] text-[#313131] leading-[14.7px] sm:leading-[19.6px] 2xl:leading-[21.78px] mt-[10px]">{dataServiceItemTop.desc[1].subtitle}</div>
            </div>
          </div>
  
          <div className="mt-[30px] 2xl:mt-[40px]">
            <div className="text-[18px] sm:text-[20px] 2xl:text-[24px] font-[400] font-avenir leading-[22px] sm:leading-[24.5px] 2xl:leading-[29.4px]">[Запрос]</div>
            <div className="text-[16px] sm:text-[18px] 2xl:text-[20px] font-[400] text-[#000000E5] leading-[18px] 2xl:leading-[24px] whitespace-pre-line mt-[10px] sm:mt-[20px]">{dataServiceItemTop.request}</div>
          </div>
          <div className="mt-[20px] sm:mt-[30px] 2xl:mt-[40px] mb-[20px] sm:mb-[30px] 2xl:mb-[40px]">
            <div className="text-[18px] sm:text-[20px] 2xl:text-[24px] font-[400] font-avenir leading-[22px] sm:leading-[24.5px] 2xl:leading-[29.4px]">[Решение]</div>
            <div className="text-[16px] sm:text-[18px] 2xl:text-[20px] font-[400] text-[#000000E5] leading-[18px] 2xl:leading-[24px] whitespace-pre-line mt-[10px] sm:mt-[20px]">{dataServiceItemTop.solution}</div>
          </div>
  
          <ButtonMore text={'Подробнее'} link={'/'} />
  
        </div>
      </div>
    </>
  )
}

export default CaseTopItem