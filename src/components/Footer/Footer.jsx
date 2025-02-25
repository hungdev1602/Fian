import { Link } from 'react-router-dom'
import FooterItem from './FooterItem/FooterItem'

const Footer = () => {
  const footerData = [
    {
      title: "Навигация",
      subMenu: [
        {
          title: "Главная",
          link: "/"
        },
        {
          title: "Кейсы",
          link: "#cases"
        },
        {
          title: "Услуги",
          link: "#services"
        },
        {
          title: "Об основателе",
          link: "/about"
        },
      ]
    },
    {
      title: "Подписки",
      subMenu: [
        {
          title: "Instagram",
          link: "https://www.instagram.com/rieltor_fadeeva/"
        },
        {
          title: "Telegram",
          link: "https://t.me/rieltor_fadeeva"
        },
        {
          title: "Youtube",
          link: "https://www.youtube.com/@rieltor_fadeeva"
        },
        {
          title: "Whatsapp",
          link: "https://wa.me/79035442927"
        },
      ]
    },
    {
      title: "услуги",
      subMenu: [
        {
          title: "Коммерческая",
          link: "/commercial"
        },
        {
          title: "Жилая",
          link: "/residential"
        },
        {
          title: "Инвестиции",
          link: "/investment"
        },
        {
          title: "Перепланировка",
          link: "/reconstruction"
        },
      ]
    },
    {
      title: "Контакты",
      subMenu: [
        {
          title: "+7 903 544 29 27"
        },
        {
          title: "fianrealestate@yandex.ru"
        },
        {
          title: "Большая Тишинская 8 к1 офис 307",
          link: `https://yandex.ru/maps/213/moscow/house/bolshoy_tishinskiy_pereulok_8s1/Z04YcwBoSUACQFtvfXt3eXVkbA==/?ll=37.578509%2C55.768827&z=18.5`
        }
      ]
    }
  ]
  return (
    <>
      <footer className="mb-[50px] relative" id='footer'>
        <div className="flex justify-normal sm:justify-between flex-wrap md:flex-nowrap gap-[20px] md:gap-0">
          {
            footerData.map((item, index) => (
              <FooterItem 
                key={index}
                title={item.title}
                subMenu={item.subMenu}
                check={index === footerData.length - 1 ? true : false}
                target={index === 1 ? "_blank" : "_self"}
              />
            ))
          }
        </div>

        <div className="hidden sm:flex justify-between items-center mt-[45px]">
          <Link 
            to={'/'}
            className='text-[8px] sm:text-[14px] font-[500] text-[#c8c8c8] uppercase'
          >
            Политика конфиденциальности
          </Link>

          <div className="text-[8px] sm:text-[14px] font-[500] text-[#c8c8c8] uppercase">Fian - финансово - инвестиционное агентство недвижимости</div>
          {/* <div className="text-[14px] font-[500] text-[#c8c8c8] uppercase">Made by me on 20th 2024</div> */}
        </div>

        {/* mobile */}
        <div className="block sm:hidden w-[157px] absolute bottom-0 right-0 flex flex-col gap-[10px] pl-6">
          <div className="text-[6px] sm:text-[14px] font-[500] text-[#c8c8c8] uppercase">Fian - финансово - инвестиционное агентство недвижимости</div>
          <Link 
            to={'/'}
            className='text-[6px] sm:text-[14px] font-[500] text-[#c8c8c8] uppercase'
          >
            Политика конфиденциальности
          </Link>

          
          {/* <div className="text-[14px] font-[500] text-[#c8c8c8] uppercase">Made by me on 20th 2024</div> */}
        </div>
      </footer>
    </>
  )
}

export default Footer