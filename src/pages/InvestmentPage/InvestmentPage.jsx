import Articles from "../../components/Articles/Articles"
import FormEmail from "../../components/FormEmail/FormEmail"
import ServiceRight from "../../components/ServiceRight/ServiceRight"
import ServicesTopItem from "../../components/ServicesTopItem/ServicesTopItem"
import investment_1 from "/images/investment_1.png"
const InvestmentPage = () => {
  const dataServiceItemTop = {
    title: "Инвестиции в недвижимость",
    desc: [
      {
        title: "От 30%",
        subtitle: "[Заработок на капитализации]"
      },
      {
        title: "От 15%",
        subtitle: "[Годовых, при инвестициях]"
      }
    ],
    formTitle: "Каталог с коммерческой недвижимостью",
    formColor: "bg-[#C9B09B]",
    formTextColor: "text-[#FFFFFFCC]",
    buttonColor: "bg-[#FFFFFF]",
    buttonTextColor: "text-[#000]",
    backgroundImg: "bg-bgInvestment",
    cards: [],
    placeholderColor: "placeholder-[#DCCDBF]"
  }
  const dataServiceRight = {
    title: "покупка / Продажа коммерческой недвижимости",
    image: investment_1,
    info: [
      {
        title: "анализ задач",
        desc: `Понимание ваших ожиданий позволяет нам 
        создать индивидуальную стратегию.`
      },
      {
        title: "создание инвестиционной стратегии",
        desc: `Создаем индивидуальную инвестиционную 
        стратегию, основываясь на вашем профиле 
        риска и финансовых целях.`
      },      
      {
        title: "выбор рассрочек и ипотек",
        desc: `Наши брокеры подберут и оценят различные 
        варианты рассрочек и ипотек, адаптируя их 
        к вашим финансовым возможностям.`
      },      
      {
        title: "подбор объектов",
        desc: `Находим выгодные объекты для инвестиций, 
        тщательно анализируя их потенциал и 
        рыночную стоимость.`
      },
      {
        title: "юридическая и техническая проверка",
        desc: `Наши юристы гарантируют защиту ваших 
        интересов и минимизируют риски утраты 
        финансов.`
      },
      {
        title: "поддержка юриста",
        desc: `Наши юристы сопровождают на всех этапах 
        сделки, обеспечивая безопасность 
        юридических процессов.`
      },
      {
        title: "формирование выгодных условий",
        desc: `Создаем для вас максимально выгодные 
        условия сделки, учитывая конкурентные 
        цены и дополнительные опции.`
      },
      {
        title: "подбор арендаторов",
        desc: `Помогаем найти надежных арендаторов для 
        ваших объектов, учитывая их 
        платежеспособность и репутацию.`
      },
      {
        title: "консультация",
        desc: `Профессиональная консультация по всем 
        вопросам, связанными с вашими задачами и 
        поиском оптимального решения.`
      }
    ],
    desc: `Минимизируем риски, обеспечиваем высокую 
    доходность, Превращаем недвижимость в актив.`,
    buttonText: "Инвестировать",
    heightImg: "h-[1295px]"
  }
  return (
    <>
      <div className="container mx-auto">
        {/* Section 1 */}
        <ServicesTopItem 
          dataServiceItemTop={dataServiceItemTop}
        />
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

export default InvestmentPage