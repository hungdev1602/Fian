import { useState } from "react"
import Articles from "../../components/Articles/Articles"
import FormEmail from "../../components/FormEmail/FormEmail"
import Mortgage from "../../components/Mortgage/Mortgage"
import ServiceLeft from "../../components/ServiceLeft/ServiceLeft"
import ServiceRight from "../../components/ServiceRight/ServiceRight"
import ServicesTopItem from "../../components/ServicesTopItem/ServicesTopItem"
import residential_1 from "/images/residential_1.png"
import residential_2 from "/images/residential_2.png"
import residential_3 from "/images/residential_3.png"
import residential_rotate from "/images/residential_rotate.png"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const ResidentialPage = () => {
  const dataServiceItemTop = {
    title: "жилая недвижимость",
    desc: [
      {
        title: "От 1 дня до 2х месяцев",
        subtitle: "[Подбор квартиры]"
      },
      {
        title: "От 1 дня до 6 месяцев",
        subtitle: "[Продажа квартиры]"
      }
    ],
    formTitle: "Каталог с жилой недвижимостью",
    formColor: "bg-[#FFFFFF]",
    formTextColor: "text-[#333333CC]",
    buttonColor: "bg-[#333]",
    buttonTextColor: "text-[#fff]",
    backgroundImg: "bg-bgResidential",
    cards: ["новостройки", "вторичка"],
    imgRotate: residential_rotate
  }
  const dataServiceRight = {
      title: window.innerWidth < 576 ? "Продажа жилой недвижимости" : "покупка / Продажа коммерческой недвижимости",
      image: residential_1,
      info: [
        {
          title: "Оценка объекта",
          desc: `Мы проведем детальный анализ вашей
           недвижимости, чтобы определить её 
           реальную рыночную стоимость, что 
           поможет сократить срок продажи.`,
           padding: "lg:pb-[17px]"
        },
        {
          title: window.innerWidth < 576 ? "Подготовка" : "Рекомендации по подготовке",
          desc: `Применяем эффективные инструменты, 
          которые помогают выделить ваш объект 
          среди конкурентов.`,
          padding: "lg:pb-[26px]"
        },      
        {
          title:  window.innerWidth < 576 ? "Проф. съемка" : "Проф. съемка объекта",
          desc: `Первое впечатление — решающее! 
          Мы организуем профессиональную фото и 
          видео съемку объекта для увеличения 
          спроса.`,
          padding: "lg:pb-[26px]"
        },      
        {
          title: window.innerWidth < 576 ? "Продвижение" : "Рекламное продвижение",
          desc: `Использование современных инструментов 
          маркетинга и площадок для максимального 
          охвата вашей целевой аудитории.`,
          padding: "lg:pb-[26px]"
        },
        {
          title: window.innerWidth < 576 ? "переговоры" : "Переговоры с покупателем",
          desc: `Навыки ведения переговоров помогут 
          защитить ваши финансовые интересы и 
          исключат юридические риски.`,
          padding: "lg:pb-[26px]"
        },
        {
          title: window.innerWidth < 576 ? "организация" : "Организация сделки",
          desc: `Организуем все этапы сделки, от 
          заключения авансового соглашения до 
          подписания акта приема - передачи, 
          включая схемы расчетов.`,
          padding: "lg:pb-[17px]"
        },
        {
          title: window.innerWidth < 576 ? "передача" : "Передача объекта",
          desc: `В финале мы обеспечим гладкую передачу 
          объекта новому владельцу, учитывая все 
          детали сделки.`,
          padding: "lg:pb-[26px]"
        },
      ],
      desc: `Продажа вашей квартиры быстро и на 
      максимально выгодных условиях.`,
      buttonText: "Продать",
      heightImg: "h-[339px] md:h-[667px] lg:h-[870px] 2xl:h-[1113px]"
  }
  const dataServiceLeft = {
      title: "Покупка квартиры на вторичном рынке",
      image: residential_2,
      info: [
        {
          title: "Анализ задач",
          desc: `Понимание ваших ожиданий позволяет нам 
          создать индивидуальную стратегию.`,
          padding: "pb-[30px]"
        },
        {
          title: window.innerWidth < 576 ? "помощь брокера" : "помощь ипотечного брокера",
          desc: `Ипотечные брокеры помогут вам выбрать 
          оптимальный вариант финансирования.`,
          padding: "pb-[30px]"
        },      
        {
          title:  window.innerWidth < 576 ? "подбор" : "подбор безрисковых объектов",
          desc: `Предлагаем к просмотру только 
          проверенные объекты, безрисковые 
          объекты.`,
          padding: "pb-[26px]"
        },      
        {
          title: window.innerWidth < 576 ? "рекомендации" : "рекомендации при покупке",
          desc: `Полезные рекомендации относительно цены 
          объекта, проверка законного технического 
          состояния и исключения юридических 
          рисков.`,
          padding: "pb-[26px]"
        },
        {
          title: window.innerWidth < 1620 ? "Юр. и тех. чистота" : "юридическая и техническая чистота",
          desc: `Процедура проверки безопасности сделки и 
          оценка всех имеющихся рисков.`,
          padding: "pb-[30px]"
        },
        {
          title: window.innerWidth < 576 ? "переговоры" : "Переговоры с продавцом",
          desc: `Компетенция, эмоциональный контакт и 
          клиентоориентированность залог успешной 
          цены покупки.`,
          padding: "pb-[26px]"
        },
        {
          title: "оформление сделки",
          desc: `Соберем все необходимые документы и 
          проведем сделку в соответствии с 
          законодательством, контроль операций 
          взаиморассчетов.`,
          padding: "pb-[17px]"
        }
      ],
      desc: window.innerWidth > 576 ? `Гарантия безопасности и комфорта, никаких забот, 
      только выгода. Найдем именно ваше жилье.` : "Гарантия безопасности и комфорта, никаких забот, только выгода. ",
      buttonText: "Купить",
      heightImg: "h-[339px] md:h-[667px] lg:h-[874px] 2xl:h-[1023px]"
  }
  const dataServiceRight1 = {
    title: "Квартиры в новостройке",
    image: residential_3,
    info: [
      {
        title: "анализ задач",
        desc: `Понимание ваших ожиданий позволяет нам 
        создать индивидуальную стратегию.`,
        padding: "lg:pb-[30px]"
      },
      {
        title: "определение параметров",
        desc: `Определим точные параметры для поиска: 
        площадь, локация, жк. С нами вы получите 
        четкий портрет вашей будущей 
        недвижимости.`,
        padding: "lg:pb-[17px]"
      },      
      {
        title: "Подбор лучших предложений",
        desc: `Выявим для вас самые актуальные и 
        выгодные предложения на рынке.`,
        padding: "lg:pb-[30px]"
      },      
      {
        title: "проверка застройщика",
        desc: `Позаботимся о вашей безопасности, 
        проведя тщательную проверку застройщика.`,
        padding: "lg:pb-[30px]"
      },
      {
        title: "предоставление скидок и бонусов",
        desc: `Предоставим вам эксклюзивные скидки и 
        бонусы за счет партнерского 
        сотрудничества.`,
        padding: "lg:pb-[26px]"
      },
      {
        title: "помощь ипотечного брокера",
        desc: `Наш ипотечный брокер проведет вас через 
        все этапы получения ипотеки, чтобы процесс 
        был легким и понятным.`,
        padding: "lg:pb-[26px]"
      },
      {
        title: "оформление сделки",
        desc: `Наш юрист позаботимся о всех нюансах 
        связанных с покупкой, чтобы вы могли 
        наслаждаться приобритением без лишних 
        хлопот.`,
        padding: "lg:pb-[17px]"
      },
    ],
    desc: `Продажа вашей квартиры быстро и на 
    максимально выгодных условиях.`,
    buttonText: "Купить",
    heightImg: "h-[339px] md:h-[592px] lg:h-[850px] 2xl:h-[1023px]",
    placeholderColor: "placeholder-[#C1C1C1]"
  }

  const articleData = [
    {
      question: "Жилая недвижимость",
      answer: "Рынок жилой недвижимости — это объекты, предназначенные для проживания людей.ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ",
      link: "https://vc.ru/u/4351525-fadeeva-natalya/1790978-zhilaya-nedvizhimost"
    },
    {
      question: "Вторичный рынок Москвы",
      answer: "Вторичный рынок недвижимости простым языком — это объекты, которые уже находятся в собственности у владельцев.",
      link: "https://vc.ru/u/4351525-fadeeva-natalya/1790506-vtorichnyi-rynok-nedvizhimosti-v-moskve"
    },
    {
      question: "Тренды и перспективы",
      answer: "Москва — это не только столица России, но и город, который привлекает людей со всех уголков страны.ㅤㅤㅤㅤㅤㅤㅤㅤ",
      link: "https://vc.ru/u/4351525-fadeeva-natalya/1793410-zhilaya-nedvizhimost-moskvy-trendy-vozmozhnosti-i-perspektivy"
    }
  ]
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  console.log(phone, mail)
  const submitForm = (e) => {
    e.preventDefault();
    console.log("OK residential")
    // Đường dẫn đến file PDF trong thư mục public
    const fileUrl = '/file/commercial.pdf'; // File PDF nằm trong thư mục public

    // Tạo một thẻ <a> ẩn để tải xuống file
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Путеводитель по выбору надежного агента.pdf'; // Tên file khi tải xuống
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
        <Mortgage />

        {/* Section 4 */}
        <ServiceLeft 
          data={dataServiceLeft}
        />

        {/* Section 5 */}
        <Articles articleArray={articleData} />

        {/* Section 6 */}
        <ServiceRight 
          data={dataServiceRight1}
        />
        <FormEmail />
      </div>
    </>
  )
}

export default ResidentialPage