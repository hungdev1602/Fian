import { Link } from "react-router-dom"
import founder from "/images/founder.png"
import { RiTelegram2Line } from "react-icons/ri";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import ButtonMore from "../../../../components/ButtonMore/ButtonMore";

const Section1 = () => {
  const socialsData = [
    {
      icon: <RiTelegram2Line className="text-[24px]"/>,
      link: "/",
    },
    {
      icon: <FaWhatsapp className="text-[24px]"/>,
      link: "/",
    },
    {
      icon: <FaInstagram className="text-[24px]"/>,
      link: "/",
    },
    {
      icon: <FaXTwitter className="text-[24px]"/>,
      link: "/",
    },
    {
      icon: <FiYoutube className="text-[24px]"/>,
      link: "/",
    }
  ]
  return (
    <>
      <div className="mt-[60px] bg-[#fff] rounded-[20px]">
        <div className="flex justify-between">
          {/* Left */}
          <div className="py-[40px] pl-[40px]">
            <div className="text-[28px] font-[400] font-avenir uppercase leading-[34px]">Наталья Фадеева</div>
            <div className="text-[24px] font-[400] mt-[20px] leading-[29px]">Основатель инвест – агенства по недвижимости FIAN</div>
            <div className="text-[24px] font-[400] text-[#333] mt-[40px] leading-[29px]">В арсенале:</div>

            {/* box info */}
            <div className="flex items-center gap-[45px] mt-[45px]">
              {/* Box 1 */}
              <div className="text-center">
                <div className="text-[36px] font-[700] text-[#494949] leading-[43.56px]">17</div>
                <span className="text-[18px] font-[400] text-[#6b6b6b]">квартир</span>
              </div>
              <div className="h-[40px] w-[1px] bg-[#C9C9C9]"></div>
              {/* Box 2 */}
              <div className="text-center">
                <div className="text-[36px] font-[700] text-[#494949] leading-[43.56px]">6</div>
                <span className="text-[18px] font-[400] text-[#6b6b6b]">офисов</span>
              </div>
              <div className="h-[40px] w-[1px] bg-[#C9C9C9]"></div>
              {/* Box 3 */}
              <div className="text-center">
                <div className="text-[36px] font-[700] text-[#494949] leading-[43.56px]">2</div>
                <span className="text-[18px] font-[400] text-[#6b6b6b]">дома</span>
              </div>
            </div>

            {/* подробнее */}
            <div className="flex items-center gap-[10px] mt-[40px]">
              <span className="font-avenir text-[24px] leading-[29px]">Подробнее</span>
              <div className="flex-1 h-[1px] bg-[#000]"></div>
            </div>

            <div className="flex flex-col gap-[20px] mt-[20px]">
              <div className="text-[20px] font-[400] text-[#000000E5] leading-[24px]">Эксперт в области недвижимости с 35 летним опытом</div>
              <div className="text-[20px] font-[400] text-[#000000E5] leading-[24px]">Партнер национального центра реконструкций и перепланировок</div>
              <div className="text-[20px] font-[400] text-[#000000E5] leading-[24px]">Член гильдии риелторов Москвы</div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-[10px] mt-[40px] mb-[20px]">
              {socialsData.map((item, index) => (
                <Link 
                  key={index}
                  to={item.link}
                  className="w-[45px] h-[45px] bg-[#333333] text-[#fff] rounded-full flex items-center justify-center cursor-pointer"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
            <ButtonMore 
              text="Подробнее"
              link={'/'}
            />
          </div>


          {/* Right */}
          <div className="w-[643px]">
            <img src={founder} alt="" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1