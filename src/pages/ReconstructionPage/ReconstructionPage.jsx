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
    title: window.innerWidth < 576 ? "Модернизируй свой бизнес" : "покупка / Продажа коммерческой недвижимости",
    image: reconstruction_1,
    info: [
      {
        title: "Оценка объекта",
        desc: `Анализируем ваш объект недвижимости, 
        учитывая его местоположение, состояние, 
        уникальные характеристики и рыночные 
        тенденции.`,
        padding: "lg:pb-[17px]"
      },
      {
        title: window.innerWidth < 1620 ? "Юр. и тех. проверка" : "юридическая и техническая проверка",
        desc: `Наши юристы гарантируют защиту ваших 
        интересов и минимизируют риски утраты 
        финансов.`,
        padding: "lg:pb-[26px]"
      },      
      {
        title: "выявление потенциала",
        desc: `Определяем возможности изменения 
        планировки объекта для повышения 
        стоимости, комфортности и инвестиционной 
        привлекательности.`,
        padding: "lg:pb-[17px]"
      },      
      {
        title: "повышение стоимости",
        desc: `Разрабатываем стратегию 
        функциональности объекта через 
        профессиональные инструменты, повышая 
        его востребованность.`,
        padding: "lg:pb-[17px]"
      },
      {
        title: window.innerWidth < 576 ? "документация" : window.innerWidth < 1620 ? "Разработка документации" : "разработка проектной документации",
        desc: `Составим все необходимые документы и 
        схемы, соответствующие правовым 
        требованиям.`,
        padding: "lg:pb-[26px]"
      },
      {
        title: "получение разрешений",
        desc: `Подготовим необходимые документы и 
        получим все разрешения для реализации 
        проекта.`,
        padding: "lg:pb-[26px]"
      },
      {
        title: window.innerWidth < 576 ? "Док. оформление" : "документальное оформление",
        desc: `Соберем полный пакет документов, 
        гарантируем законность и прозрачность, 
        постановка на кадастровый учет.`,
        padding: "lg:pb-[26px]"
      }
    ],
    desc: window.innerWidth > 576 ? `Оптимизируем вашу недвижимость и повысим 
    ее инвестиционную привлекательность.` : "Оптимизируем вашу недвижимость и повысим ее инвестиционную привлекательность.",
    buttonText: "Модернизировать",
    heightImg: "h-[339px] md:h-[650px] lg:h-[935px] 2xl:h-[1113px]"
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