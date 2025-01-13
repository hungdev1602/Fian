import CaseTopItem from "../../components/CaseTopItem/CaseTopItem"
import FormEmail from "../../components/FormEmail/FormEmail"
import GalleryCarousel from "../../components/GalleryCarousel/GalleryCarousel"
import Process from "../../components/Process/Process"
import ServiceLeft from "../../components/ServiceLeft/ServiceLeft"
import ServiceRight from "../../components/ServiceRight/ServiceRight"
import case1_1 from "/images/case-1_1.png"
import case1_2 from "/images/case-1_2.png"
import slider_1 from "/images/case1_slider-1.png"
import slider_2 from "/images/case1_slider-2.png"
import slider_3 from "/images/case1_slider-3.png"
import slider_4 from "/images/case1_slider-4.png"
import slider_5 from "/images/case1_slider-5.png"
import slider_6 from "/images/case1_slider-6.png"
import slider_7 from "/images/case1_slider-7.png"
import case_1_rotate from "/images/case_1_rotate.png"
const Case1Page = () => {
  const dataServiceItemTop = {
    title: "Покупка офиса в бц зао",
    desc: [
      {
        title: "100 000 000",
        subtitle: "[Бюджет]"
      },
      {
        title: "1 неделя",
        subtitle: "[Продажа коммерции]"
      }
    ],
    request: `Помещение от 250 кв.м., с арендной до 
    1 200 000 рублей в месяц.`,
    solution: `Покупка помещения по всем запросам 
    с выгодой в 35 000 000 рублей.`,
    backgroundImg: "bg-bg1",
    cards: ["коммерция", "покупка"],
    imgRotate: case_1_rotate
  }
  const dataServiceRight = {
      title: "Условия и цифры",
      image: case1_1,
      info: [
        {
          title: "1 - 1,2 миллиона рублей",
          desc: `Запрос клиента по аренде помещения для 
          офиса со всеми условиями.`
        },
        {
          title: "Условия",
          desc: `от 250 кв.м., удобный трафик, санузел, 
          кухня, 2 парковочных места.`
        }
      ],
      desc: `Проведен подробный анализ рынка в столице по запрошенным 
      критериям, однако подходящих вариантов не нашлось. В результате 
      клиент принял решение приобрести помещение.`,
      buttonText: "Модернизировать",
      heightImg: "h-[187px] sm:h-[143px] md:h-[163px] lg:h-[270px] 2xl:h-[334px]",
      hideButton: true
  }
  const processData = {
    price: "100.000.000 руб.",
    bc: "БЦ Барклай плаза",
    lastTitle: "согласование  ДКП и проведение сделки"
  }
  const dataServiceLeft = {
      title: "Арендный бизнес",
      image: case1_2,
      info: [
        {
          title: window.innerWidth < 576 ? "Выгода 35 млн. рублей" : "Выгода 35 миллионов рублей",
          desc: `Соседнее помещение с худшими 
          характеристиками с площадью 230 кв.м. 
          стоило на 35 000 000 рублей дороже.`
        },
        {
          title: window.innerWidth < 576 ? "Сделка за 1 неделю" : "оформленная сделка за 1 неделю",
          desc: `Скорость и профессионализм 
          обеспечивают наилучший результат.`
        }
      ],
      buttonText: "Консультация",
      heightImg: "h-[160px] sm:h-[233px] lg:h-[274px] 2xl:h-[329px]",
      check: true
  }
  const sliderData = [slider_1, slider_2, slider_3, slider_4, slider_5, slider_6, slider_7]
  return (
    <>
      
      {/* Section 1 */}
      <CaseTopItem 
        dataServiceItemTop={dataServiceItemTop}
      />
      <div className="container mx-auto">
        {/* Section 2 */}
        <ServiceRight 
          data={dataServiceRight}
        />

        {/* Section 3 */}
        <Process 
          data={processData}
        />

        {/* Section 4 */}
        <ServiceLeft 
          data={dataServiceLeft}
        />

      </div>
      {/* Section 5 */}
      <GalleryCarousel 
        data={sliderData}
      />
      <div className="container mx-auto">
        <FormEmail />
      </div>
    </>
  )
}

export default Case1Page