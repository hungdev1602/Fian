import { Link } from "react-router-dom"
import founder from "/images/founder.png"
import { RiTelegram2Line } from "react-icons/ri";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import ButtonMore from "../../../../components/ButtonMore/ButtonMore";
import MobileSection from "./MobileSection/MobileSection";
import { GoDotFill } from "react-icons/go";
import vc_ru from "/images/vc-ru.svg"
const Section1 = () => {
  const socialsData = [
    {
      icon: <RiTelegram2Line className="text-[16px] sm:text-[18px] 2xl:text-[24px]"/>,
      link: "https://t.me/rieltor_fadeeva",
    },
    {
      icon: <FaWhatsapp className="text-[16px] sm:text-[18px] 2xl:text-[24px]"/>,
      link: "https://wa.me/79035442927",
    },
    {
      icon: <FaInstagram className="text-[16px] sm:text-[18px] 2xl:text-[24px]"/>,
      link: "https://www.instagram.com/rieltor_fadeeva/",
    },
    {
      icon: <img src={vc_ru} className="w-[20px] sm:w-[22px] 2xl:w-[24px]"/>,
      link: "/",
    },
    {
      icon: <FiYoutube className="text-[16px] sm:text-[18px] 2xl:text-[24px]"/>,
      link: "https://www.youtube.com/@rieltor_fadeeva",
    }
  ]
  return (
    <>
      <div className="mt-[18px] sm:mt-[60px] sm:bg-[#fff] rounded-[20px]">
        <div className="flex justify-between">
          {/* Left */}
          <div className="w-full lg:w-auto py-0 sm:py-[20px] 2xl:py-[40px] pl-0 sm:pl-[20px] 2xl:pl-[40px]">
            
            {/* On mobile */}
            <MobileSection />

            <div className="text-[24px] sm:text-[28px] font-[400] font-avenir uppercase leading-[21px] sm:leading-[34px]">Наталья Фадеева</div>
            <div className="text-[18px] sm:text-[20px] 2xl:text-[24px] text-[#333333] font-[400] mt-[10px] leading-[22px] sm:leading-[24.5px] 2xl:leading-[29px]">
              {
                window.innerWidth < 576 
                ? 'Основатель FIAN' 
                : 'Основатель инвест – агенства по недвижимости FIAN'
              }
            </div>
            {/* Socials on mobile */}
            {
              window.innerWidth < 576
              ? 
                <div className="flex items-center gap-[10px] mt-[20px] mb-[20px]">
                {socialsData.map((item, index) => (
                  <Link 
                    key={index}
                    to={item.link}
                    className="w-[30px] 2xl:w-[45px] aspect-square bg-[#333333] text-[#fff] rounded-full flex items-center justify-center cursor-pointer"
                    target="_blank"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
              : null
            }
            <div className="text-[18px] sm:text-[20px] 2xl:text-[24px] font-[400] text-[#333] mt-[20px] xl:mt-[40px] leading-[22px] sm:leading-[24.5px] 2xl:leading-[29px]">В арсенале:</div>

            {/* box info */}
            <div className="flex items-center gap-[20px] 2xl:gap-[45px] mt-[20px] 2xl:mt-[45px]">
              {/* Box 1 */}
              <div className="text-center">
                <div className="text-[24px] sm:text-[28px] 2xl:text-[36px] font-[700] text-[#494949] leading-[29px] sm:leading-[33.88px] 2xl:leading-[43.56px]">17</div>
                <span className="text-[12px] sm:text-[16px] 2xl:text-[18px] font-[400] text-[#6b6b6b] leading-[0px] sm:leading-normal">квартир</span>
              </div>
              <div className="h-[30px] sm:h-[40px] w-[1px] bg-[#C9C9C9]"></div>
              {/* Box 2 */}
              <div className="text-center">
                <div className="text-[24px] sm:text-[28px] 2xl:text-[36px] font-[700] text-[#494949] leading-[29px] sm:leading-[33.88px] 2xl:leading-[43.56px]">6</div>
                <span className="text-[12px] sm:text-[16px] 2xl:text-[18px] font-[400] text-[#6b6b6b] leading-[0px] sm:leading-normal">офисов</span>
              </div>
              <div className="h-[30px] sm:h-[40px] w-[1px] bg-[#C9C9C9]"></div>
              {/* Box 3 */}
              <div className="text-center">
                <div className="text-[24px] sm:text-[28px] 2xl:text-[36px] font-[700] text-[#494949] leading-[29px] sm:leading-[33.88px] 2xl:leading-[43.56px]">2</div>
                <span className="text-[12px] sm:text-[16px] 2xl:text-[18px] font-[400] text-[#6b6b6b] leading-[0px] sm:leading-normal">дома</span>
              </div>
            </div>

            {/* подробнее */}
            <div className="flex items-center gap-[10px] mt-[18px] sm:mt-[40px]">
              <span className="font-avenir text-[20px] 2xl:text-[24px] leading-[24.5px] 2xl:leading-[29px] text-[#313131]">Подробнее</span>
              <div className="2xl:flex-1 w-full lg:w-[396px] 2xl:w-auto h-[1px] border-b border-[#B2B2B2]"></div>
            </div>

            <div className="flex flex-col gap-[20px] mt-[20px] mb-[20px] sm:mb-0">
              <div className="flex sm:block text-[14px] sm:text-[18px] 2xl:text-[20px] font-[400] text-[#000000E5] leading-[16px] sm:leading-[18px] 2xl:leading-[24px]">
                {window.innerWidth < 576 && <GoDotFill className="text-[10px] mt-[2px]"/>}
                Эксперт в области недвижимости с 35 летним опытом
              </div>
              <div className="flex items-center sm:block text-[14px] sm:text-[18px] 2xl:text-[20px] font-[400] text-[#000000E5] leading-[16px] sm:leading-[18px] 2xl:leading-[24px]">
                {window.innerWidth < 576 && <GoDotFill className="text-[10px]"/>}
                {
                  window.innerWidth < 576 
                  ? "Партнер национального центра реконструкций"
                  : "Партнер национального центра реконструкций и перепланировок" 
                }
              </div>
              <div className="flex items-center sm:block text-[14px] sm:text-[18px] 2xl:text-[20px] font-[400] text-[#000000E5] leading-[16px] sm:leading-[18px] 2xl:leading-[24px]">
                {window.innerWidth < 576 && <GoDotFill className="text-[10px]"/>}
                Член гильдии риелторов Москвы
              </div>
            </div>

            {/* Socials */}
            <div className="hidden sm:flex items-center gap-[10px] mt-[40px] mb-[20px]">
              {socialsData.map((item, index) => (
                <Link 
                  key={index}
                  to={item.link}
                  className="w-[30px] 2xl:w-[45px] aspect-square bg-[#333333] text-[#fff] rounded-full flex items-center justify-center cursor-pointer"
                  target="_blank"
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
          <div className="hidden lg:block w-[400px] 2xl:w-[643px]">
            <img src={founder} alt="" className="w-full h-full object-cover rounded-r-[20px]"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1