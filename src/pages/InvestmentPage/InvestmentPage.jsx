import { useState } from "react"
import Articles from "../../components/Articles/Articles"
import FormEmail from "../../components/FormEmail/FormEmail"
import ServiceRight from "../../components/ServiceRight/ServiceRight"
import ServicesTopItem from "../../components/ServicesTopItem/ServicesTopItem"
import investment_1 from "/images/investment_1.png"
import investment_rotate from "/images/investment_rotate.png"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
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
    formTitle: "Профессиональный агент по недвижимости",
    formColor: "bg-[#FFFFFF]",
    formTextColor: "text-[#333333CC]",
    formText: "[7 ресурсов для проведения идеальной сделки]",
    buttonColor: "bg-[#333333]",
    buttonTextColor: "text-[#fff]",
    backgroundImg: "bg-bgInvestment",
    cards: [],
    placeholderColor: "placeholder-[#B3B3B3]",
    imgRotate: investment_rotate,
    borderColor: "border-[#B3B3B3]"
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
    heightImg: "h-[439px] md:h-[808px] lg:h-[1079px] 2xl:h-[1295px]"
  }
  const articleData = [
    {
      question: "что такое инвестиции?",
      answer: "Инвестиция - это вложение средств в нашем случае денег с целью получить прибыль или выгоды в будущем.ㅤㅤㅤㅤㅤ",
      link: "https://vc.ru/u/4351525-fadeeva-natalya/1773156-investiciya-eto-chto"
    },
    {
      question: "Инвестиции в недвижимость",
      answer: "Недвижимость — один из самых надежных и понятных активов для большинства людей на планете.ㅤㅤㅤㅤㅤ",
      link: "https://vc.ru/u/4351525-fadeeva-natalya/1772449"
    },
    {
      question: "Новостройки москвы",
      answer: "Этот вопрос сегодня на повестке дня на Столичном рынке недвижимости. Москва — это город, который никогда не спит...",
      link: "https://vc.ru/u/4351525-fadeeva-natalya/1799174-zhk-novostroiki-v-moskve-dlya-zhizni-ili-zarabotka"
    }
  ]
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  console.log(phone, mail)
  const submitForm = (e) => {
    e.preventDefault();
    console.log("OK investment")
    // Đường dẫn đến file PDF trong thư mục public
    const fileUrl = '/file/invest_page.pdf'; // File PDF nằm trong thư mục public

    // Tạo một thẻ <a> ẩn để tải xuống file
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'ПРОФЕССИОНАЛЬНЫЙ агент по недвижимости.pdf'; // Tên file khi tải xuống
    document.body.appendChild(a);
    a.click();

    // Dọn dẹp sau khi tải xuống
    document.body.removeChild(a);

    // EmailJS service ID, template ID, and public key
    const serviceId = 'service_hgkewry';
    const templateId = 'template_g5v3bdp';
    const publicKey = 'U3HhGXdphIX7wK_ut';

    // object that contains dynamic template params
    const templateParams = {
      from_name: "",
      phone: phone,
      userMail: mail,
    };

    // send email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setPhone("");
        setMail("");
        toast.success("Письмо успешно отправлено");
      })
      .catch((error) => {
        toast.error('Email sending failed:', error);
      });
  }
  return (
    <>
      
      {/* Section 1 */}
      <ServicesTopItem 
        dataServiceItemTop={dataServiceItemTop}
        submitForm={submitForm}
        phone={phone}
        setPhone={setPhone}
        mail={mail}
        setMail={setMail}
      />
      <div className="container mx-auto">
        {/* Section 2 */}
        <ServiceRight 
          data={dataServiceRight}
        />

        {/* Section 3 */}
        <Articles articleArray={articleData} />

        <FormEmail />
      </div>
    </>
  )
}

export default InvestmentPage