import ItemSlider from "./ItemSlider"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { GoArrowDownRight } from "react-icons/go";
import "./style.css"
const MobileSlider = () => {
  const data = [
    {
      title: "[1989 - 2000]",
      desc: ['Первая сделка - размен своей квартиры', 'Помощь в обменах и разменах, трудоустройство в агентство', 'За 6 месяцев работы - лучший агент компании', 'Самая большая сделка - 12 квартир в сделке', 'Уход из агентства и открытие своего собственного.']
    },
    {
      title: "[2000-2010]",
      desc: ['Покупка квартиры под офис.', 'Строительство 2-х собственных офисов через реконструкцию', 'Открыла отдел ПО расселению коммунальных квартир', 'Создала пассивный доход из коммерческих помещений', 'Появилась мечта работать в Москве']
    },
    {
      title: "[2010-2020]",
      desc: ['Переезд и устройство в АН риелтором', 'Назначена руководителем отдела', 'Через год жизни в Москве куплена своя первая квартира', '2014 год – генеральный директор АН', '2018 год уход с руководящей должности для саморазвития']
    },
    {
      title: "[2020-2024]",
      desc: ['РГУ Косыгина оформление перепланировок и реконструкций', 'Как частный брокер занимала лидирующие позиции', 'Приобретение и наращивание капитала в своем арсенале', 'Приглашения на ТВ, подкасты, написание книги', 'Основание FIAN - финансово - инвестиционного агентства']
    }
  ]
  return (
    <>
      <div className="block sm:hidden mt-[20px]">
        <Splide>
          <SplideSlide>
            <div className="h-[277px] p-[20px] bg-white rounded-[20px]">
              <div className="flex items-center gap-[5px]">
                <div className="text-[20px] font-[400] text-[#000000E5] leading-[24px]">[Моя История]</div>
                <GoArrowDownRight className="text-[18px]"/>
              </div>
              <div className="text-[16px] font-bold text-[#000000E5] leading-[19px] mt-[20px]">[1989 - 2000]</div>
              <div className="flex flex-col gap-[20px] mt-[20px]">
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[0].desc[0]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[0].desc[1]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[0].desc[2]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[0].desc[3]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[0].desc[4]}
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="h-[277px] p-[20px] bg-white rounded-[20px]">
              <div className="flex items-center gap-[5px]">
                <div className="text-[20px] font-[400] text-[#000000E5] leading-[24px]">[Моя История]</div>
                <GoArrowDownRight className="text-[18px]"/>
              </div>
              <div className="text-[16px] font-bold text-[#000000E5] leading-[19px] mt-[20px]">[2000-2010]</div>
              <div className="flex flex-col gap-[13px] mt-[20px]">
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[1].desc[0]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[1].desc[1]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[1].desc[2]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[1].desc[3]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[1].desc[4]}
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="h-[277px] p-[20px] bg-white rounded-[20px]">
              <div className="flex items-center gap-[5px]">
                <div className="text-[20px] font-[400] text-[#000000E5] leading-[24px]">[Моя История]</div>
                <GoArrowDownRight className="text-[18px]"/>
              </div>
              <div className="text-[16px] font-bold text-[#000000E5] leading-[19px] mt-[20px]">[2010-2020]</div>
              <div className="flex flex-col gap-[18px] mt-[20px]">
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[2].desc[0]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[2].desc[1]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[2].desc[2]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[2].desc[3]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[2].desc[4]}
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="h-[277px] p-[20px] bg-white rounded-[20px]">
              <div className="flex items-center gap-[5px]">
                <div className="text-[20px] font-[400] text-[#000000E5] leading-[24px]">[Моя История]</div>
                <GoArrowDownRight className="text-[18px]"/>
              </div>
              <div className="text-[16px] font-bold text-[#000000E5] leading-[19px] mt-[20px]">[2020-2024]</div>
              <div className="flex flex-col gap-[10px] mt-[20px]">
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[3].desc[0]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[3].desc[1]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[3].desc[2]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[3].desc[3]}
                </div>
                <div 
                  className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
                >
                  {data[3].desc[4]}
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </>
  )
}

export default MobileSlider
