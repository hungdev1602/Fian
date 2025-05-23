import { useState } from "react"
import Articles from "../../components/Articles/Articles"
import FormEmail from "../../components/FormEmail/FormEmail"
import ServiceLeft from "../../components/ServiceLeft/ServiceLeft"
import ServiceRight from "../../components/ServiceRight/ServiceRight"
import ServicesTopItem from "../../components/ServicesTopItem/ServicesTopItem"
import commercial_1 from "/images/commercial_1.png"
import commercial_2 from "/images/commercial_2.png"
import commercial_rotate from "/images/commercial_rotate.png"
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const CommercialPage = () => {
  const dataServiceItemTop = {
    title: "Коммерческая недвижимость",
    desc: [
      {
        title: "От 1 дня до 2 месяцев",
        subtitle: "[Подбор коммерции]"
      },
      {
        title: "От 1 дня до 6 месяцев",
        subtitle: "[Продажа коммерции]"
      }
    ],
    formTitle: "Каталог с коммерческой недвижимостью",
    formColor: "bg-[#333333]",
    formTextColor: "text-[#FFFFFFCC]",
    buttonColor: "bg-[#D6D6D6]",
    buttonTextColor: "text-[#000]",
    backgroundImg: "bg-bgCommercial",
    cards: ["покупка", "продажа", "упаковка", "габ"],
    imgRotate: commercial_rotate,
    placeholderColor: "placeholder-[#707070]"
  }

  const dataServiceRight = {
    title: window.innerWidth < 576 ? "Покупка/продажа коммерции" :"покупка / Продажа коммерческой недвижимости",
    image: commercial_1,
    info: [
      {
        title: "Оценка объекта",
        desc: `Мы проведем детальный анализ вашей 
        недвижимости, чтобы определить её 
        реальную рыночную стоимость.`,
        padding: "lg:pb-[26px]"
      },
      {
        title: window.innerWidth < 576 ? "Проф. съемка" : "Проф. съемка объекта",
        desc: `Мы создадим привлекательные визуальные 
        материалы.`,
        padding: "lg:pb-[30px]"
      },      
      {
        title: window.innerWidth < 576 ? "Продвижение" : "Рекламное продвижение",
        desc: `Использование современных инструментов 
        маркетинга для максимального охвата 
        вашей целевой аудитории`,
        padding: "lg:pb-[26px]"
      },      
      {
        title: window.innerWidth < 576 ? "Переговоры" : "Переговоры с покупателем",
        desc: `Возьмем на себя все вопросы общения с 
        потенциальными покупателями.`,
        padding: "lg:pb-[30px]"
      },
      {
        title: window.innerWidth < 576 ? "документация" : window.innerWidth < 1620 ? "Проверка и подготовка" : "Проверка и подготовка документов",
        desc: `Наши эксперты проверят все документы и 
        подготовят их для дальнейшего 
        оформления.`,
        padding: "lg:pb-[26px]"
      },
      {
        title: window.innerWidth < 576 ? "организация" :"Организация сделки",
        desc: `Поможем вам организовать все этапы 
        сделки, от заключения договора до 
        передачи объекта.`,
        padding: "lg:pb-[26px]"
      },
      {
        title: window.innerWidth < 576 ? "передача" :"Передача объекта",
        desc: `В финале мы обеспечим гладкую передачу 
        объекта новому владельцу, позаботившись о 
        всех деталях.`,
        padding: "lg:pb-[26px]"
      },
    ],
    desc: `Продажа / покупка вашей недвижимости 
    на максимально выгодных условиях`,
    buttonText: "Продать",
    heightImg: "h-[339px] md:h-[572px] lg:h-[820px] 2xl:h-auto"
  }
  const dataServiceLeft = {
    title: "Арендный бизнес",
    image: commercial_2,
    info: [
      {
        title: "Поиск и подбор",
        desc: `Внимательно изучаем ваши потребности и 
        пожелания, чтобы найти идеальный объект 
        для аренды.`,
        padding: "pb-[26px]"
      },
      {
        title: window.innerWidth < 576 ? "полная проверка" : "Полная проверка сделки",
        desc: `Проводим тщательную проверку каждого 
        объекта, чтобы удостовериться в его 
        юридической чистоте и отсутствии 
        обременений.`,
        padding: "pb-[17px]"
      },      
      {
        title: "полный анализ",
        desc: `Оцениваем каждый объект с различных 
        сторон: от состояния здания до 
        инфраструктуры района`,
        padding: "pb-[26px]"
      },      
      {
        title: window.innerWidth < 1620 ? "Оценка окупаемости" : "оценка окупаемости и доходности",
        desc: `Рассматриваем аренду как инвестицию, мы 
        анализируем потенциальную доходность и 
        сроки окупаемости.`,
        padding: "pb-[26px]"
      },
      {
        title: window.innerWidth < 576 ? "согласование" : "согласование условий",
        desc: `Поможем вам согласовать все условия 
        аренды, включая срок, цену и 
        дополнительные услуги, чтобы обе стороны 
        остались довольны результатом.`,
        padding: "pb-[17px]"
      },
      {
        title: "Подбор лучших цен",
        desc: `Работаем с различными арендными 
        предложениями на рынке, чтобы обеспечить 
        вам максимальную выгоду.`,
        padding: "pb-[26px]"
      },
      {
        title: "оформление сделки",
        desc: `Берём на себя все формальности, связанные 
        с оформлением аренды, чтобы вы могли 
        сосредоточиться на своих делах.`,
        padding: "pb-[26px]"
      },
      {
        title: window.innerWidth < 1620 ? "Передача в управление" : "передача объекта в управление",
        desc: `Организуем передачу объекта, 
        позаботившись о всех деталях. Вы получите 
        все ключи и доступы, а мы будем рядом, 
        чтобы ответить на любые ваши вопросы.`,
        padding: "pb-[17px]"
      }
    ],
    desc: `Покупка готового арендного бизнеса, 
    который сразу приносит доход.`,
    buttonText: "Купить",
    heightImg: "h-[389px] md:h-[851px] lg:h-[1001px] 2xl:h-[1251px]"
  }

  const articleData = [
    {
      question: "Куда стоит инвестировать в 2025?",
      answer: "Мой ответ конечно коммерческая. Во все времена она зарекомендовала себя на порядок выше жилой. В конце статьи приведу примеры",
      link: "https://vc.ru/u/4351525-fadeeva-natalya/1776990-kakaya-nedvizhimost-dohodnaya-i-kuda-stoit-investirovat-pochemu-kommercheskaya-nedvizhimost"
    },
    {
      question: "Как вырастить недвижимость",
      answer: "Многие инвесторы заблуждаются, думая, что любая недвижимость является гарантией пассивного дохода.",
      link: "https://vc.ru/u/4351525-fadeeva-natalya/1792995-kak-nedvizhimost-vyrastit-v-aktiv"
    },
    {
      question: "Почему коммерция самая доходная",
      answer: "Высокий потенциал роста арендной платы, особенно в перспективных отношениях или при росте бизнеса. ㅤㅤㅤㅤㅤㅤㅤ",
      link: "https://vc.ru/u/4351525-fadeeva-natalya/1793322-pochemu-kommercheskaya-nedvizhimost-schitaetsya-samoi-dohodnoi-na-rynke"
    }
  ]

  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  console.log(phone, mail)
  const submitForm = (e) => {
    e.preventDefault();
    console.log("OK commercial")
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
        <Articles articleArray={articleData} />

        {/* Section 4 */}
        <ServiceLeft 
          data={dataServiceLeft}
        />
        <FormEmail />
      </div>
    </>
  )
}

export default CommercialPage