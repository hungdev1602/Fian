import Title from "../../../../components/Title/Title"
import { GoArrowDownRight } from "react-icons/go";
import ExperienceItem from "./components/ExperienceItem/ExperienceItem";
import MobileSlider from "./components/MobileSlider/MobileSlider";

const Section2 = () => {
  const experienceData = [
    {
      title: "[1989 - 2000]",
      desc: ['Первая сделка - размен своей квартиры', 'Помощь в обменах и разменах, трудоустройство в агентство', 'За 6 месяцев работы - лучший агент компании', 'Самая большая сделка - 12 квартир в сделке', 'Уход из агентства и открытие своего собственного.']
    },
    {
      title: "[2000-2010]",
      desc: ['Покупка квартиры под офис с последующем выводим из ЖФ.', 'Строительство 2-х собственных офисов через реконструкцию', 'Открыла отдел через расселение коммунальных квартир', 'Создала пассивный доход из коммерческих помещений', 'Появилась мечта работать в Москве']
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
      <div className="mt-[40px] sm:mt-[100px] 2xl:mt-[120px]">
        <Title title={'Опыт работы'} />

        <div className="hidden sm:block mt-[42px] bg-[#fff] pt-[20px] 2xl:pt-[40px] pl-[20px] pr-[20px] 2xl:pr-[40px] pb-[20px] 2xl:pb-[23px] rounded-[20px]">
          <div className="flex justify-between items-start gap-[16px] 2xl:gap-[28px]">
            {/* Left */}
            <div className="flex items-center gap-[10px]">
              <div className="text-[24px] 2xl:text-[28px] font-[400] text-[#303030]">[Моя История]</div>
              <GoArrowDownRight className="text-[24px]"/>
            </div>

            {/* right */}
            <div className="flex-1 h-auto 2xl:h-[566px] border-l border-[#808080] pl-[20px] 2xl:pl-[40px]">
              {/* top */}
              <div className="flex justify-between items-center gap-[20px] lg:gap-0 flex-wrap lg:flex-nowrap pb-[20px] border-b border-[#808080]">
                {/* 1 item */}
                <ExperienceItem 
                  title={experienceData[0].title}
                  desc={experienceData[0].desc}
                />
                <div className="hidden lg:block h-[120px] 2xl:h-[170px] border-l border-[#808080]"></div>
                {/* 2 item */}
                <ExperienceItem 
                  title={experienceData[1].title}
                  desc={experienceData[1].desc}
                />
              </div>

              {/* bottom */}
              <div className="flex justify-between items-center gap-[20px] lg:gap-0 flex-wrap lg:flex-nowrap mt-[20px]">
                {/* 3 item */}
                <ExperienceItem 
                  title={experienceData[2].title}
                  desc={experienceData[2].desc}
                />
                <div className="hidden lg:block h-[120px] 2xl:h-[170px] border-l border-[#808080]"></div>
                {/* 4 item */}
                <ExperienceItem 
                  title={experienceData[3].title}
                  desc={experienceData[3].desc}
                />
              </div>
            </div>
          </div>
        </div>

        <MobileSlider />
      </div>
    </>
  )
}

export default Section2