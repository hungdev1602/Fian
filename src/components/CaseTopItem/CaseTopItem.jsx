/* eslint-disable react/prop-types */
import ButtonMore from "../ButtonMore/ButtonMore";
import Header1 from "../Header1/Header1"
import human_black from "/images/human_black.png"
const CaseTopItem = (props) => {
  const {
    dataServiceItemTop
  } = props;
  return (
    <>
      <div className="flex justify-between items-start mb-[120px]">
        <Header1 />
        <div className={`w-[870px] h-[649px] ${dataServiceItemTop.backgroundImg} bg-cover rounded-[20px] relative truncate`}>
          {/* contact */}
          <div className="absolute top-[20px] right-[20px] flex gap-[10px]">
            <div className="w-[250px] h-[50px] bg-[#ffffffd6] rounded-[40px] flex items-center justify-center cursor-pointer">Связаться</div>
            <div className="w-[50px] h-[50px] rounded-full bg-[#ffffffd6] p-[8px]">
              <img src={human_black} alt="" />
            </div>
          </div>

          {/* change state */}
          <div className="absolute bottom-[20px] left-[20px] right-[20px]">
            <div className="flex justify-between items-center mt-[20px]">
              <div className="flex items-center gap-[10px]">
                {
                  dataServiceItemTop.cards.map((item, index) => (
                    <div 
                      key={index}
                      className="w-[200px] h-[50px] rounded-[40px] flex items-center justify-center bg-[#ffffffe6]"
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

      {/* Left content */}
      <div className="w-[630px] mt-[-685px]">
        <div className="font-avenir text-[32px] font-[400] uppercase leading-[28.8px]">{dataServiceItemTop.title}</div>

        {/* Desc */}
        <div className="mt-[90px] flex items-center gap-[25px]">
          <div className="text-center">
            <div className="text-[24px] font-[700] text-[#484848] leading-[29px]">{dataServiceItemTop.desc[0].title}</div>
            <div className="text-[18px] font-[400] text-[#000000CC] leading-[21.78px] mt-[10px]">{dataServiceItemTop.desc[0].subtitle}</div>
          </div>
          <div className="h-[40px] border border-[#C9C9C9]"></div>
          <div className="text-center">
            <div className="text-[24px] font-[700] text-[#484848] leading-[29px]">{dataServiceItemTop.desc[1].title}</div>
            <div className="text-[18px] font-[400] text-[#000000CC] leading-[21.78px] mt-[10px]">{dataServiceItemTop.desc[1].subtitle}</div>
          </div>
        </div>

        <div className="mt-[40px]">
          <div className="text-[24px] font-[400] font-avenir leading-[29.4px]">[Запрос]</div>
          <div className="text-[20px] font-[400] text-[#000000E5] leading-[24px] whitespace-pre-line mt-[20px]">{dataServiceItemTop.request}</div>
        </div>
        <div className="mt-[40px] mb-[40px]">
          <div className="text-[24px] font-[400] font-avenir leading-[29.4px]">[Решение]</div>
          <div className="text-[20px] font-[400] text-[#000000E5] leading-[24px] whitespace-pre-line mt-[20px]">{dataServiceItemTop.solution}</div>
        </div>

        <ButtonMore text={'Подробнее'} link={'/'} />

      </div>
    </>
  )
}

export default CaseTopItem