/* eslint-disable react/prop-types */
import Title from "../Title/Title"

const Process = ({ data }) => {
  return (
    <>
      <div className="mt-[40px] sm:mt-[100px] 2xl:mt-[120px]">
        <Title title={'Процесс'} />

        <div className="flex flex-col gap-[20px] mt-[10px]">
          {/* 1 item */}
          <div className="flex items-center gap-0 sm:gap-[36%] lg:gap-[2%] 2xl:gap-[8%] border-b border-[#aaa]">
            <div className="text-[12px] lg:text-[20px] 2xl:text-[24px] font-[400] text-[#808080] leading-[14px] lg:leading-[24.2px] 2xl:leading-[29px] uppercase tracking-[-1px] 2xl:tracking-normal mt-[12px] sm:mt-[32px]">Определили бюджет {window.innerWidth < 576 ? "" : data.price}</div>
            <div className="flex flex-col justify-center items-center gap-[3px] lg:gap-[10px] ml-[38px] sm:ml-0">
              <div className="text-[8px] sm:text-[14px] lg:text-[18px] font-[400] leading-[9.68px] sm:leading-[18px] lg:leading-[21.78px]">{data.price}</div>
              <div className="w-[40px] lg:w-[100px] h-[20px] lg:h-[40px] bg-[#333] rounded-[7px] lg:rounded-[10px]"></div>
            </div>
          </div>
          {/* 2 item */}
          <div className="flex items-center gap-0 sm:gap-[51%] lg:gap-[26%] 2xl:gap-[29.8%] border-b border-[#aaa]">
            <div className="text-[12px] lg:text-[20px] 2xl:text-[24px] font-[400] text-[#808080] leading-[14px] lg:leading-[24.2px] 2xl:leading-[29px] uppercase mt-[12px] sm:mt-[32px]">Нашли помещение</div>
            <div className="flex flex-col justify-center items-center gap-[3px] lg:gap-[10px] ml-[72px] sm:ml-0">
              <div className="text-[8px] sm:text-[14px] lg:text-[18px] font-[400] leading-[9.68px] sm:leading-[18px] lg:leading-[21.78px]">{data.bc}</div>
              <div className="w-[40px] lg:w-[120px] 2xl:w-[180px] h-[20px] lg:h-[40px] bg-[#333] rounded-[7px] lg:rounded-[10px]"></div>
            </div>
          </div>
          {/* 3 item */}
          <div className="flex items-center gap-0 sm:gap-[43%] lg:gap-[22%] 2xl:gap-[27%] border-b border-[#aaa]">
            <div className="text-[12px] lg:text-[20px] 2xl:text-[24px] font-[400] text-[#808080] leading-[14px] lg:leading-[24.2px] 2xl:leading-[29px] uppercase mt-[12px] sm:mt-[32px]">технический анализ и заключение</div>
            <div className="flex flex-col justify-center items-center gap-[3px] lg:gap-[10px]">
              <div className="text-[8px] sm:text-[14px] lg:text-[18px] font-[400] leading-[9.68px] sm:leading-[18px] lg:leading-[21.78px]">Полная проверка</div>
              <div className="w-[40px] lg:w-[150px] 2xl:w-[220px] h-[20px] lg:h-[40px] bg-[#333] rounded-[7px] lg:rounded-[10px]"></div>
            </div>
          </div>
          {/* 4 item */}
          <div className="flex items-center gap-0 sm:gap-[37%] lg:gap-[23%] 2xl:gap-[30%] border-b border-[#aaa]">
            <div className="text-[12px] lg:text-[20px] 2xl:text-[24px] font-[400] text-[#808080] leading-[14px] lg:leading-[24.2px] 2xl:leading-[29px] uppercase mt-[12px] sm:mt-[32px]">{window.innerWidth < 576 ? "Юр. проверка продавца  и помещения" : "юридическая проверка продавца и помещения"}</div>
            <div className="flex flex-col justify-center items-center gap-[3px] lg:gap-[10px] ml-[20px] sm:ml-0">
              <div className="text-[8px] sm:text-[14px] lg:text-[18px] font-[400] leading-[9.68px] sm:leading-[18px] lg:leading-[21.78px]">Полная проверка</div>
              <div className="w-[40px] lg:w-[150px] 2xl:w-[300px] h-[20px] lg:h-[40px] bg-[#333] rounded-[7px] lg:rounded-[10px]"></div>
            </div>
          </div>
          {/* 5 item */}
          <div className="flex items-center justify-between border-b border-[#aaa]">
            <div className="text-[12px] lg:text-[20px] 2xl:text-[24px] font-[400] text-[#808080] leading-[14px] lg:leading-[24.2px] 2xl:leading-[29px] uppercase mt-[12px] sm:mt-[32px]">{data.lastTitle}</div>
            <div className="flex flex-col justify-center items-center gap-[3px] lg:gap-[10px]">
              <div className="text-[8px] sm:text-[14px] lg:text-[18px] font-[400] leading-[9.68px] sm:leading-[18px] lg:leading-[21.78px]">Быстрый договор</div>
              <div className="w-[56px] lg:w-[144px] 2xl:w-[182px] h-[20px] lg:h-[40px] bg-[#333] rounded-[7px] lg:rounded-[10px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Process