import ServiceItem from "../../../../components/ServiceItem/ServiceItem"
import Title from "../../../../components/Title/Title"

const Section3 = () => {
  const data = [
    {
      title: `Коммерческая 
      недвижимость`,
      desc: `Покупка, продажа, упаковка, готовые 
      арендные бизнесы для инвесторов`,
      link: `/commercial`,
      secondary: `Покупка, продажа, упаковка, 
      габ для инвесторов`
    },
    {
      title: `Жилая 
      недвижимость`,
      desc: `Услуги по покупке и продажи жилой 
      недвижимости`,
      link: `residential`,
      secondary: `Услуги по покупке и продажи 
      жилой недвижимости`
    },
    {
      title: `Инвестиции в 
      недвижимость`,
      desc: `Минимизируем риски и 
      обеспечиваем высокую доходность`,
      link: `/investment`,
      secondary: `Минимизируем риски и 
      обеспечиваем доходность`
    },
    {
      title: `Перепланировка и 
      реконструкции`,
      desc: `Оптимизируем вашу недвижимость 
      и повысим ее привлекательность`,
      link: `/reconstruction`,
      secondary: `оптимизируем вашу 
      недвижимость`
    },
  ]
  return (
    <>
      <div className="mt-[40px] sm:mt-[120px]">
        <Title title={'Услуги'} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] sm:gap-[20px] mt-[20px] sm:mt-[40px]">
          {data.map((item, index) => (
            <ServiceItem 
              title={item.title}
              desc={item.desc}
              link={item.link}
              secondary={item.secondary}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Section3