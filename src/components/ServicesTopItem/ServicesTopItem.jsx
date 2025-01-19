/* eslint-disable react/prop-types */
import Header1 from "../Header1/Header1"
import human_black from "/images/human_black.png"
import logo_rotate from "/images/logo_rotate.png"
import human_white from "/images/human_white.png"
const ServicesTopItem = (props) => {
  const {
    dataServiceItemTop
  } = props;
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between items-start gap-[15px] lg:gap-0 flex-wrap lg:flex-nowrap mb-[30px] xl:mb-[120px]">
          <Header1 />
          <div className={`hidden sm:block w-full lg:w-[470px] xl:w-[576px] 2xl:w-[870px] h-[400px] md:h-[515px] xl:h-[527px] 2xl:h-[640px] ${dataServiceItemTop.backgroundImg} bg-cover bg-center rounded-[20px] relative truncate`}>
            {/* contact */}
            <div className="absolute top-[20px] right-[20px] flex gap-[10px]">
              <div className="w-[150px] 2xl:w-[250px] h-[40px] 2xl:h-[50px] bg-[#ffffffd6] rounded-[40px] flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[#00000080] hover:text-[#ffffffE6]">Связаться</div>
              <div className="w-[40px] 2xl:w-[50px] aspect-square rounded-full bg-[#ffffffd6] p-[8px] transition-all duration-200 hover:bg-[#00000080] group">
                <img src={human_black} alt="" className="block group-hover:hidden"/>
                <img src={human_white} alt="" className="hidden group-hover:block" />
              </div>
            </div>
  
            {/* change state */}
            <div className="hidden xl:block absolute bottom-[10px] 2xl:bottom-[20px] left-[10px] 2xl:left-[20px] right-[10px] 2xl:right-[20px]">
              <div className="flex justify-between items-center mt-[20px]">
                <div className="flex items-center gap-[5px] 2xl:gap-[10px]">
                  {
                    dataServiceItemTop.cards.map((item, index) => (
                      <div 
                        key={index}
                        className="w-[135px] 2xl:w-[200px] h-[40px] 2xl:h-[50px] rounded-[40px] flex items-center justify-center text-sm 2xl:text-base bg-[#ffffffe6] pt-[5px] 2xl:pt-0"
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
      <div className="container mx-auto flex sm:hidden relative mb-[-23px]">
        <div className="w-[200px] h-[250px]">
          <img src={logo_rotate} alt="" />
        </div>
        <div className="w-[200px] h-[250px] mt-[8%]">
          <img src={dataServiceItemTop.imgRotate} alt="" />
        </div>
      </div>
      
      {
        dataServiceItemTop.cards.length > 0 &&
        <div className="flex gap-[10px] sm:hidden bg-[#797979] py-[10px] pl-[10px] pr-[10px] h-[50px] text-white">
          {
            dataServiceItemTop.cards.map((item, index) => (
              <div 
                key={index}
                className="px-[20px] h-[30px] flex items-center justify-center text-[13px] font-avenirThin rounded-[60px] bg-transparent border border-[#BDBDBD]"
              >
                {item}
              </div>
            ))
          }
        </div>
      }
      
      {/* Left content */}
      <div className="container mx-auto">
        <div className="w-full lg:w-[500px] 2xl:w-[630px] mt-[30px] sm:mt-0 lg:mt-[-456px] xl:mt-[-557px] 2xl:mt-[-685px]">
          <div className="w-[110%] sm:w-auto font-avenir text-[22px] sm:text-[24px] 2xl:text-[32px] font-[400] uppercase leading-[20.7px] sm:leading-[25.2px] 2xl:leading-[28.8px]">{dataServiceItemTop.title}</div>
  
          {/* Desc */}
          <div className="mt-[30px] lg:mt-[60px] 2xl:mt-[90px] flex items-center justify-normal gap-[20px] 2xl:gap-[25px]">
            <div className="text-center sm:text-left 2xl:text-center">
              <div className="text-[16px] sm:text-[20px] 2xl:text-[24px] font-[700] text-[#484848] leading-[19.36px] sm:leading-[24.2px] 2xl:leading-[29px] tracking-[-1px]">{dataServiceItemTop.desc[0].title}</div>
              <div className="text-[12px] sm:text-[16px] 2xl:text-[18px] font-[400] text-[#000000CC] leading-[14.7px] sm:leading-[19.6px] 2xl:leading-[21.78px] mt-[5px] 2xl:mt-[10px]">{dataServiceItemTop.desc[0].subtitle}</div>
            </div>
            <div className="h-[40px] border border-[#C9C9C9]"></div>
            <div className="text-center sm:text-left 2xl:text-center">
              <div className="text-[16px] sm:text-[20px] 2xl:text-[24px] font-[700] text-[#484848] leading-[19.36px] sm:leading-[24.2px] 2xl:leading-[29px] tracking-[-1px]">{dataServiceItemTop.desc[1].title}</div>
              <div className="text-[12px] sm:text-[16px] 2xl:text-[18px] font-[400] text-[#000000CC] leading-[14.7px] sm:leading-[19.6px] 2xl:leading-[21.78px] mt-[5px] 2xl:mt-[10px]">{dataServiceItemTop.desc[1].subtitle}</div>
            </div>
          </div>
  
          {/* Form */}
          <div className="mt-[30px] xl:mt-[60px] 2xl:mt-[90px]">
            <div className="text-[16px] sm:text-[20px] 2xl:text-[24px] font-[500] text-[#494949] leading-[19.36px] sm:leading-[24.2px] 2xl:leading-[29px] text-center sm:text-left">{dataServiceItemTop.formTitle}</div>
  
            <form className={`w-full xl:w-[474px] 2xl:w-[500px] p-[20px] rounded-[20px] flex flex-col gap-[20px] mt-[10px] sm:mt-[18px] ${dataServiceItemTop.formTextColor}  ${dataServiceItemTop.formColor}`}>
              <div className="text-[12px] sm:text-base 2xl:text-[18px] font-[400] text-center sm:text-left">[5 прибыльных объектов, которые дадут иксы в 2025]</div>
  
              <input type="text" className={`text-base 2xl:text-[18px] font-[500] bg-transparent outline-none pb-[5px] border-b border-[#999] leading-[19.36px] 2xl:leading-[21.7px] ${dataServiceItemTop.placeholderColor}`} placeholder='Номер телефона'/>
              <input type="email" className={`text-base 2xl:text-[18px] font-[500] bg-transparent outline-none pb-[5px] border-b border-[#999] leading-[19.36px] 2xl:leading-[21.7px] ${dataServiceItemTop.placeholderColor} mt-0 xl:mt-[-10px] 2xl:mt-0`} placeholder='Email'/>
  
              <button className={`w-full sm:w-[150px] 2xl:w-[200px] h-[50px] rounded-[40px] ${dataServiceItemTop.buttonColor} text-base 2xl:text-[20px] font-[400] ${dataServiceItemTop.buttonTextColor} mt-0 xl:mt-[-3px] 2xl:mt-0`}>Получить</button>
            </form>
          </div>
  
        </div>
      </div>
    </>
  )
}

export default ServicesTopItem