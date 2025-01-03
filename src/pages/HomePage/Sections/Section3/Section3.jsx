import ServiceItem from "../../../../components/ServiceItem/ServiceItem"
import Title from "../../../../components/Title/Title"

const Section3 = () => {
  const data = [
    {
      title: `Коммерческая 
      недвижимость`,
      desc: `Покупка, продажа, упаковка, готовые 
      арендные бизнесы для инвесторов`,
      link: `/commercial`
    },
    {
      title: `Жилая 
      недвижимость`,
      desc: `Услуги по покупке и продажи жилой 
      недвижимости`,
      link: `residential`
    },
    {
      title: `Инвестиции в 
      недвижимость`,
      desc: `Минимизируем риски и 
      обеспечиваем высокую доходность`,
      link: `/investment`
    },
    {
      title: `Перепланировка и 
      реконструкции`,
      desc: `Оптимизируем вашу недвижимость 
      и повысим ее инвестиционную 
      привлекательность`,
      link: `/reconstruction`
    },
  ]
  return (
    <>
      <div className="mt-[120px]">
        <Title title={'Услуги'} />
        <div className="grid grid-cols-4 gap-[20px] mt-[40px]">
          {data.map((item, index) => (
            <ServiceItem 
              title={item.title}
              desc={item.desc}
              link={item.link}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Section3