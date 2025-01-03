import Title from "../../../../components/Title/Title"
import Item from "./components/Item/Item"

const Section4 = () => {
  const data = [
    {
      background: 'bg-bg1',
      title: `БЦ ЗАО`,
      width: `w-[601px]`,
      cards: ['Коммерческая', 'Покупка'],
      link: `/case1`
    },
    {
      background: 'bg-bg2',
      title: `БЦ СЗАО`,
      width: `w-[480px]`,
      cards: ['Коммерческая', 'Покупка'],
      link: `/case2`
    },
    {
      background: 'bg-bg3',
      title: `БЦ Баумонский`,
      width: `w-[480px]`,
      cards: ['Продажа ГАБ', 'Капитализация'],
      link: `/case3`
    },
  ]
  return (
    <>
      <div className="mt-[120px]">
        <Title title={'Примеры наших работ'} />

        <div className="flex items-center justify-between mt-[40px]">
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