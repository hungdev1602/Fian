import Articles from "../../components/Articles/Articles"
import FormEmail from "../../components/FormEmail/FormEmail"
import ServiceRight from "../../components/ServiceRight/ServiceRight"
import ServicesTopItem from "../../components/ServicesTopItem/ServicesTopItem"
import reconstruction_1 from "/images/reconstruction_1.png"
import reconstruction_rotate from "/images/reconstruction_rotate.png"

const ReconstructionPage = () => {
  const dataServiceItemTop = {
    title: "перепланировка и реконструкция",
    desc: [
      {
        title: "От 3 до 6 месяцев",
        subtitle: "[Подбор коммерции]"
      },
      {
        title: "От 6 до 12 месяцев",
        subtitle: "[Продажа коммерции]"
      }
    ],
    formTitle: "Каталог с коммерческой недвижимостью",
    formColor: "bg-[#333333]",
    formTextColor: "text-[#FFFFFFCC]",
    buttonColor: "bg-[#D6D6D6]",
    buttonTextColor: "text-[#000]",
    backgroundImg: "bg-bgReconstruction",
    cards: [],
    imgRotate: reconstruction_rotate
  }
  const dataServiceRight = {
    title: "покупка / Продажа коммерческой недвижимости",
    image: reconstruction_1,
    info: [
      {
        title: "Оценка объекта",
        desc: `Анализируем ваш объект недвижимости, 
        учитывая его местоположение, состояние, 
        уникальные характеристики и рыночные 
        тенденции.`
      },
      {
        title: "юридическая и техническая проверка",
        desc: `Наши юристы гарантируют защиту ваших 
        интересов и минимизируют риски утраты 
        финансов.`
      },      
      {
        title: "выявление потенциала",
        desc: `Определяем возможности изменения 
        планировки объекта для повышения 
        стоимости, комфортности и инвестиционной 
        привлекательности.`
      },      
      {
        title: "повышение стоимости",
        desc: `Разрабатываем стратегию 
        функциональности объекта через 
        профессиональные инструменты, повышая 
        его востребованность.`
      },
      {
        title: "разработка проектной документации",
        desc: `Составим все необходимые документы и 
        схемы, соответствующие правовым 
        требованиям.`
      },
      {
        title: "получение разрешений",
        desc: `Подготовим необходимые документы и 
        получим все разрешения для реализации 
        проекта.`
      },
      {
        title: "документальное оформление",
        desc: `Соберем полный пакет документов, 
        гарантируем законность и прозрачность, 
        постановка на кадастровый учет.`
      }
    ],
    desc: `Оптимизируем вашу недвижимость и повысим 
    ее инвестиционную привлекательность.`,
    buttonText: "Модернизировать",
    heightImg: "h-[1113px]"
  }
  return (
    <>
      
      {/* Section 1 */}
      <ServicesTopItem 
        dataServiceItemTop={dataServiceItemTop}
      />
        <div className="container mx-auto">
        {/* Section 2 */}
        <ServiceRight 
          data={dataServiceRight}
        />

        {/* Section 3 */}
        <Articles />

        <FormEmail />
      </div>
    </>
  )
}

export default ReconstructionPage