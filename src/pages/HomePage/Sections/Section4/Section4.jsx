import Title from "../../../../components/Title/Title"
import Item from "./components/Item/Item"

const Section4 = () => {
  const data = [
    {
      background: 'bg-bg1',
      title: `БЦ ЗАО`,
      width: `w-full lg:w-[380px] xl:w-[400px] 2xl:w-[601px]`,
      cards: ['Коммерческая', 'Покупка'],
      link: `/case1`
    },
    {
      background: 'bg-bg2',
      title: `БЦ СЗАО`,
      width: `w-full lg:w-[300px] xl:w-[330px] 2xl:w-[480px]`,
      cards: ['Коммерческая', 'Покупка'],
      link: `/case2`
    },
    {
      background: 'bg-bg3',
      title: `БЦ Баумонский`,
      width: `w-full lg:w-[300px] xl:w-[330px] 2xl:w-[480px]`,
      cards: [window.innerWidth < 1600 ? 'ГАБ' : 'Продажа ГАБ', 'Капитализация'],
      link: `/case3`,
      secondary: `ГАБ`
    },
  ]
  return (
    <>
      <div className="mt-[40px] sm:mt-[100px] 2xl:mt-[120px]">
        <Title title={'Примеры наших работ'} />

        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-[20px] lg:gap-0 mt-[20px] sm:mt-[40px]">
          {data.map((item, index) => (
            <Item 
              key={index} 
              {...item} 
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Section4