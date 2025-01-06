/* eslint-disable react/prop-types */
import Title from "../Title/Title"

const Process = ({ data }) => {
  return (
    <>
      <div className="mt-[120px]">
        <Title title={'Процесс'} />

        <div className="flex flex-col gap-[20px] mt-[10px]">
          {/* 1 item */}
          <div className="flex items-center gap-[8%] border-b border-[#aaa]">
            <div className="text-[24px] font-[500] text-[#7e7e7e] leading-[29px] uppercase">Определили бюджет {data.price}</div>
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <div className="text-[18px] font-[500] leading-[21.78px]">{data.price}</div>
              <div className="w-[100px] h-[40px] bg-[#333] rounded-[10px]"></div>
            </div>
          </div>
          {/* 2 item */}
          <div className="flex items-center gap-[29.8%] border-b border-[#aaa]">
            <div className="text-[24px] font-[500] text-[#7e7e7e] leading-[29px] uppercase">Нашли помещение</div>
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <div className="text-[18px] font-[500] leading-[21.78px]">{data.bc}</div>
              <div className="w-[180px] h-[40px] bg-[#333] rounded-[10px]"></div>
            </div>
          </div>
          {/* 3 item */}
          <div className="flex items-center gap-[27%] border-b border-[#aaa]">
            <div className="text-[24px] font-[500] text-[#7e7e7e] leading-[29px] uppercase">технический анализ и заключение</div>
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <div className="text-[18px] font-[500] leading-[21.78px]">Полная проверка</div>
              <div className="w-[220px] h-[40px] bg-[#333] rounded-[10px]"></div>
            </div>
          </div>
          {/* 4 item */}
          <div className="flex items-center gap-[30%] border-b border-[#aaa]">
            <div className="text-[24px] font-[500] text-[#7e7e7e] leading-[29px] uppercase">юридическая проверка продавца и помещения</div>
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <div className="text-[18px] font-[500] leading-[21.78px]">Полная проверка</div>
              <div className="w-[300px] h-[40px] bg-[#333] rounded-[10px]"></div>
            </div>
          </div>
          {/* 5 item */}
          <div className="flex items-center justify-between border-b border-[#aaa]">
            <div className="text-[24px] font-[500] text-[#7e7e7e] leading-[29px] uppercase">{data.lastTitle}</div>
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <div className="text-[18px] font-[500] leading-[21.78px]">Быстрый договор</div>
              <div className="w-[182px] h-[40px] bg-[#333] rounded-[10px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Process