import Articles from "../../components/Articles/Articles"
import FormEmail from "../../components/FormEmail/FormEmail"
import ServiceRight from "../../components/ServiceRight/ServiceRight"
import ServicesTopItem from "../../components/ServicesTopItem/ServicesTopItem"
import investment_1 from "/images/investment_1.png"
import investment_rotate from "/images/investment_rotate.png"
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
    placeholderColor: "placeholder-[#DCCDBF]",
    imgRotate: investment_rotate,
    borderColor: "border-[#E6DBD1]"
  }
  const dataServiceRight = {
    title: window.innerWidth < 576 ? "Инвестируй с нами" : "покупка / Продажа коммерческой недвижимости",
    image: investment_1,
    info: [
      {
        title: "анализ задач",
        desc: `Понимание ваших ожиданий позволяет нам 
        создать индивидуальную стратегию.`,
        padding: "lg:pb-[30px]"
      },
      {
        title: window.innerWidth < 1620 ? "Создание стратегии" : "создание инвестиционной стратегии",
        desc: `Создаем индивидуальную инвестиционную 
        стратегию, основываясь на вашем профиле 
        риска и финансовых целях.`,
        padding: "lg:pb-[26px]"
      },      
      {
        title: window.innerWidth < 576 ? "Выбор ипотек" : "выбор рассрочек и ипотек",
        desc: `Наши брокеры подберут и оценят различные 
        варианты рассрочек и ипотек, адаптируя их 
        к вашим финансовым возможностям.`,
        padding: "lg:pb-[26px]"
      },      
      {
        title: "подбор объектов",
        desc: `Находим выгодные объекты для инвестиций, 
        тщательно анализируя их потенциал и 
        рыночную стоимость.`,
        padding: "lg:pb-[26px]"
      },
      {
        title: window.innerWidth < 1620 ? "Юр. и тех. проверка" : "юридическая и техническая проверка",
        desc: `Наши юристы гарантируют защиту ваших 
        интересов и минимизируют риски утраты 
        финансов.`,
        padding: "lg:pb-[26px]"
      },
      {
        title: "поддержка юриста",
        desc: `Наши юристы сопровождают на всех этапах 
        сделки, обеспечивая безопасность 
        юридических процессов.`,
        padding: "lg:pb-[26px]"
      },
      {
        title: window.innerWidth < 576 ? "Формирование условий" : window.innerWidth < 1620 ? "Создание выгодных условий" : "формирование выгодных условий",
        desc: `Создаем для вас максимально выгодные 
        условия сделки, учитывая конкурентные 
        цены и дополнительные опции.`,
        padding: "lg:pb-[26px]"
      },
      {
        title: "подбор арендаторов",
        desc: `Помогаем найти надежных арендаторов для 
        ваших объектов, учитывая их 
        платежеспособность и репутацию.`,
        padding: "lg:pb-[26px]"
      },
      {
        title: "консультация",
        desc: `Профессиональная консультация по всем 
        вопросам, связанными с вашими задачами и 
        поиском оптимального решения.`,
        padding: "lg:pb-[26px]"
      }
    ],
    desc: window.innerWidth > 576 ? `Минимизируем риски, обеспечиваем высокую 
    доходность, Превращаем недвижимость в актив.` : "Минимизируем риски, обеспечиваем высокую доходность.",
    buttonText: "Инвестировать",
    heightImg: "h-[439px] md:h-[808px] lg:h-[1169px] 2xl:h-[1295px]"
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

export default InvestmentPage