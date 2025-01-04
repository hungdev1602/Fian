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
          link: "/"
        },
        {
          title: "Услуги",
          link: "/"
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
          link: "/"
        },
        {
          title: "Telegram",
          link: "/"
        },
        {
          title: "Youtube",
          link: "/"
        },
        {
          title: "Whatsapp",
          link: "/about"
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
          title: "+7 999 999 99 99"
        },
        {
          title: "Большая тишинская 8 к1 офис 307"
        }
      ]
    }
  ]
  return (
    <>
      <footer className="mb-[50px]">
        <div className="flex justify-between">
          {
            footerData.map((item, index) => (
              <FooterItem 
                key={index}
                title={item.title}
                subMenu={item.subMenu}
              />
            ))
          }
        </div>

        <div className="flex justify-between items-center mt-[45px]">
          <Link 
            to={'/'}
            className='text-[14px] font-[500] text-[#c8c8c8]'
          >
            Политика конфиденциальности
          </Link>

          <div className="text-[14px] font-[500] text-[#c8c8c8]">Fian - финансово - инвестиционное агентство недижимости</div>
          <div className="text-[14px] font-[500] text-[#c8c8c8]">Made by me on 20th 2024</div>
        </div>
      </footer>
    </>
  )
}

export default Footer