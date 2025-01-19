import CaseTopItem from "../../components/CaseTopItem/CaseTopItem"
import FormEmail from "../../components/FormEmail/FormEmail"
import GalleryCarousel from "../../components/GalleryCarousel/GalleryCarousel"
import Process from "../../components/Process/Process"
import ServiceLeft from "../../components/ServiceLeft/ServiceLeft"
import ServiceRight from "../../components/ServiceRight/ServiceRight"
import case2_1 from "/images/case-2_1.png"
import case2_2 from "/images/case-2_2.png"
import slider_1 from "/images/case2_slider-1.png"
import slider_2 from "/images/case2_slider-2.png"
import slider_3 from "/images/case2_slider-3.png"
import slider_4 from "/images/case2_slider-4.png"
import slider_5 from "/images/case2_slider-5.png"
import slider_6 from "/images/case2_slider-6.png"
import slider_7 from "/images/case2_slider-7.png"
import case_2_rotate from "/images/case_2_rotate.png"
const Case2Page = () => {
  const dataServiceItemTop = {
    title: "Покупка офиса в бц cзао",
    desc: [
      {
        title: "12 780 000",
        subtitle: "[Бюджет]"
      },
      {
        title: "80.2 кв.м.",
        subtitle: "[Площадь офиса]"
      }
    ],
    request: `Ликвидный объект с быстрым сроком 
    сдачи и ипотечным плечом.`,
    solution: `Покупка помещения за 12 780 000 с 
    прибылью 157 000 рублей.`,
    backgroundImg: "bg-bg4",
    cards: ["коммерция", "покупка"],
    imgRotate: case_2_rotate
  }
  const dataServiceRight = {
    title: "Условия и цифры",
    image: case2_1,
    info: [
      {
        title: "6 000 000 рублей",
        desc: `Наличные деньги у клиента на руках, на 
        покупку помещения.`,
        padding: "lg:pb-[30px]"
      },
      {
        title: "6 780 000 рублей",
        desc: `Кредитные средства, ставка 10,4%.`,
        padding: "lg:pb-[30px]"
      },
      {
        title: "78 000 рублей",
        desc: `Ежемесячный платеж банку.`,
        padding: "lg:pb-[30px]"
      },
      {
        title: "157 000 рублей",
        desc: `Стоимость ежемесячной аренды офиса, 
        пассивный доход клиента.`,
        padding: "lg:pb-[30px]"
      }
    ],
    desc: ``,
    buttonText: "Модернизировать",
    heightImg: "h-[190px] md:h-[213px] lg:h-[443px] 2xl:h-[424px]",
    hideButton: true
  }
  const processData = {
    price: "12.780.000 руб. ",
    bc: "БЦ SMOLA",
    lastTitle: "согласование  ДКП и сделки"
  }
  const dataServiceLeft = {
      title: "Результат",
      image: case2_2,
      info: [
        {
          title: "Инвестиция, которая дала 2x",
          desc: `Сегодня рыночная цена помещения 
          22 000 000 рублей.`,
          padding: "pb-[30px]"
        },
        {
          title: "Пассивный доход",
          desc: `Пассивный доход с учетом кредитного 
          плеча 79 000 рублей.`,
          padding: "pb-[30px]"
        }
      ],
      buttonText: "Консультация",
      heightImg: "h-[160px] sm:h-[175px] lg:h-[291px] 2xl:h-[307px]",
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

export default Case2Page