import CaseTopItem from "../../components/CaseTopItem/CaseTopItem"
import FormEmail from "../../components/FormEmail/FormEmail"
import GalleryCarousel from "../../components/GalleryCarousel/GalleryCarousel"
import Process from "../../components/Process/Process"
import ServiceLeft from "../../components/ServiceLeft/ServiceLeft"
import ServiceRight from "../../components/ServiceRight/ServiceRight"
import case3_1 from "/images/case-3_1.png"
import case3_2 from "/images/case-3_2.png"
import slider_1 from "/images/case3_slider-1.png"
import slider_2 from "/images/case3_slider-2.png"
import slider_3 from "/images/case3_slider-3.png"
import slider_4 from "/images/case3_slider-4.png"
import slider_5 from "/images/case3_slider-5.png"
import slider_6 from "/images/case3_slider-6.png"
import slider_7 from "/images/case3_slider-7.png"
import case_3_rotate from "/images/case_3_rotate.png"

const Case3Page = () => {
  const dataServiceItemTop = {
    title: "БЦ «Баумонский»",
    desc: [
      {
        title: "19 000 000",
        subtitle: "[Бюджет]"
      },
      {
        title: "120 кв.м.",
        subtitle: "[Площадь офиса]"
      }
    ],
    request: `Ликвидный объект под инвестиции с 
    большой окупаемостью.`,
    solution: `Покупка помещения, стоимостью 
    19 000 000 рублей с разделением на два.`,
    backgroundImg: "bg-bg5",
    cards: ["продажа ГАБ", "капитализация"],
    imgRotate: case_3_rotate
  }
  const dataServiceRight = {
    title: "цифры",
    image: case3_1,
    info: [
      {
        title: "500 000 рублей",
        desc: `Стоимость проектной документации.`
      },
      {
        title: "100 000 рублей",
        desc: `Стоимость раскадастривания.`
      },
      {
        title: "1 300 000 рублей",
        desc: `Стоимость ремонта помещения.`
      },
      {
        title: "19 000 000 рублей",
        desc: `Наличные деньги у клиента на руках, на покупку 
        помещения.`
      }
    ],
    desc: ``,
    buttonText: "Модернизировать",
    heightImg: "h-[189px] sm:h-[201px] lg:h-[400px] 2xl:h-[446px]",
    hideButton: true
  }
  const processData = {
    price: "19.000.000 руб.",
    bc: "БЦ БАУМОНСКИЙ",
    lastTitle: "согласование  ДКП"
  }
  const dataServiceLeft = {
      title: "Результат",
      image: case3_2,
      info: [
        {
          title: "Инвестиция, которая дала 2x",
          desc: `Теперь рыночная цена этого помещения 
          35 000 000 рублей.`
        },
        {
          title: "Пассивный доход",
          desc: `Пассивный доход с 2х помещений 330 000 
          рублей.`
        }
      ],
      buttonText: "Консультация",
      heightImg: "h-[160px] sm:h-[175px] lg:h-[267px] 2xl:h-[307px]",
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

export default Case3Page