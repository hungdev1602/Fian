import Header1 from "../../../../components/Header1/Header1"
import human_black from "/images/human_black.png"
import human_white from "/images/human_white.png"
import arrow_share from "/images/arrow_share.svg"
import ButtonMore from "../../../../components/ButtonMore/ButtonMore"
import { useEffect, useState } from "react"
import SliderSwipwe from "./components/SliderSwipwe"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "./style.css"
import { Link } from "react-router-dom"
const Section1 = () => {
  const [current, setCurrent] = useState(0)
  const [slideIn, setSlideIn] = useState(true);
  const [slideOut, setSlideOut] = useState(false);
  const data = [
    {
      title: `Мы предлагаем полный спектр услуг, доверьтесь 
        нашему опыту для выгодных инвестиций и 
        успешного управления объектами.`,
      background: "bg-bgCommercial",
      link: '/commercial'
    },
    {
      title: `Найдем для вас объекты с минимальными рисками 
        и доходностью от 15% годовых, где вы заработаете 
        от 30% на капитализации.`,
      background: "bg-bgResidential",
      link: '/residential'
    },
    {
      title: `Подберем безрисковую жилую недвижимость по 
        вашим критериям с возможностью получить 
        партнерские скидки.`,
      background: "bg-bgInvestment",
      link: '/investment'
    },
    {
      title: `Согласуем перепланировку по закону и повысим ее 
        инвестиционную привлекательность.
        ㅤ`,
      background: "bg-bgReconstruction",
      link: '/reconstruction'
    },
  ]
  const images = ["url('/images/bg-commercial.png')", 
    "url('/images/bg-residential.png')",
    "url('/images/bg-investment.png')",
    "url('/images/bg-reconstruction.png')"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideOut(true); // Kích hoạt hiệu ứng slide-out
      setTimeout(() => {
        setCurrent(prev => prev === data.length - 1 ? 0 : prev + 1)
        setSlideOut(false); // Đặt slideOut về false sau khi đã thay đổi hình ảnh
        setSlideIn(true); // Kích hoạt hiệu ứng slide-in
      }, 500); // Thời gian nhỏ để đảm bảo hiệu ứng được kích hoạt
    }, 6000)
    return () => clearInterval(interval)
  },)
  const handleClick = (number) => {
    setSlideOut(true);
    setCurrent(number);
    setTimeout(() => {
      setSlideOut(false);
      setSlideIn(true);
    }, 500);
  }
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between flex-wrap lg:flex-nowrap items-start gap-[15px] lg:gap-0">
          <Header1 />
          <div 
            className={`hidden sm:block w-full lg:w-[480px] xl:w-[576px] 2xl:w-[984px] h-[430px] xl:h-[527px] 2xl:h-[607px] bg-cover rounded-[20px] relative truncate`}
          >
            <div 
              className={`images ${slideOut ? 'slide-out' : ''} ${slideIn ? 'slide-in' : ''}`}
              style={{backgroundImage: images[current]}}
            />
            {/* contact */}
            <div className="absolute top-[10px] 2xl:top-[20px] right-[10px] 2xl:right-[20px] flex gap-[10px]">
              <div className="w-[150px] 2xl:w-[250px] h-[40px] 2xl:h-[50px] bg-[#ffffffd6] rounded-[40px] flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[#00000080] hover:text-[#ffffffE6]">Связаться</div>
              <div className="w-[40px] 2xl:w-[50px] aspect-square rounded-full bg-[#ffffffd6] p-[8px] cursor-pointer transition-all duration-200 hover:bg-[#00000080] group">
                <img src={human_black} alt="" className="block group-hover:hidden" />
                <img src={human_white} alt="" className="hidden group-hover:block" />
              </div>
            </div>
  
            {/* change state */}
            <div className="h-[80px] xl:h-[90px] 2xl:h-[144px] absolute bottom-0 left-0 right-0 bg-[#0000002b] py-[10px] 2xl:py-[20px] px-[10px]">
              <div className="text-[13px] xl:text-[16px] 2xl:text-[27px] font-[400] font-avenirThin text-[#fff] uppercase leading-[20px] 2xl:leading-[34px]">FIAN - финансово инвестиционное агентсво недвижимости</div>
              <div className="flex justify-between items-center mt-[10px] 2xl:mt-[20px]">
                <div className="flex items-center gap-[10px]">
                  {/* when change data, change bg, if active bg-[#00000087] else bg-[#ffffffdb] */}
                  <div 
                    onClick={() => handleClick(0)}
                    className={`w-[90px] xl:w-[120px] 2xl:w-[200px] h-[30px] xl:h-[40px] 2xl:h-[50px] rounded-[40px] text-[10px] xl:text-[12px] 2xl:text-[16px] flex items-center justify-center cursor-pointer ${current === 0 ? "bg-[#00000080] text-[#ffffffCC]" : "bg-[#ffffffdb]"} bg-[#00000087]`}
                  >
                    коммерция
                  </div>
                  <div 
                    onClick={() => handleClick(1)}
                    className={`w-[90px] xl:w-[120px] 2xl:w-[200px] h-[30px] xl:h-[40px] 2xl:h-[50px] rounded-[40px] text-[10px] xl:text-[12px] 2xl:text-[16px] flex items-center justify-center cursor-pointer ${current === 1 ? "bg-[#00000080] text-[#ffffffCC]" : "bg-[#ffffffdb]"} bg-[#00000087]`}
                  >
                    жилая
                  </div>
                  <div 
                    onClick={() => handleClick(2)}
                    className={`w-[90px] xl:w-[120px] 2xl:w-[200px] h-[30px] xl:h-[40px] 2xl:h-[50px] rounded-[40px] text-[10px] xl:text-[12px] 2xl:text-[16px] flex items-center justify-center cursor-pointer ${current === 2 ? "bg-[#00000080] text-[#ffffffCC]" : "bg-[#ffffffdb]"} bg-[#00000087]`}
                  >
                    инвестиции
                  </div>
                  <div 
                    onClick={() => handleClick(3)}
                    className={`w-[90px] xl:w-[120px] 2xl:w-[200px] h-[30px] xl:h-[40px] 2xl:h-[50px] rounded-[40px] text-[10px] xl:text-[12px] 2xl:text-[16px] flex items-center justify-center cursor-pointer ${current === 3 ? "bg-[#00000080] text-[#ffffffCC]" : "bg-[#ffffffdb]"} bg-[#00000087]`}
                  >
                    перепланировка
                  </div>
                </div>
                <Link to={data[current].link} className="w-[30px] xl:w-[40px] 2xl:w-[50px] aspect-square bg-[#fff] rounded-full flex items-center justify-center cursor-pointer">
                  <img src={arrow_share} alt="" className="w-[10px] 2xl:w-[15px] aspect-square object-cover"/>
                </Link>
              </div>
            </div>
          </div>
          <SliderSwipwe current={current}/>
        </div>
      </div>

      {/* Mobile menu change stata */}
      <div className="block sm:hidden bg-[#797979] py-[10px] pl-[20px] pr-[5px] h-[50px] mt-[3%] text-white">
        <Splide
          options={{
            arrows: false, // Hide navigation arrows
            pagination: false, // Hide pagination dots
            fixedWidth: '120px', // Fixed width for each slide
            gap: '10px', // Gap between slides
          }}
        >
          <SplideSlide>
            <div 
              className={`w-[120px] h-[30px] flex items-center justify-center text-[13px] font-avenirThin rounded-[60px] ${current === 0 ? "bg-[#333333e3] text-[#fff]" : "border border-[#fff] bg-transparent"} `}
              onClick={() => handleClick(0)}
            >
              коммерция
            </div>
          </SplideSlide>
          <SplideSlide>
            <div 
              className={`w-[120px] h-[30px] flex items-center justify-center text-[13px] font-avenirThin rounded-[60px] ${current === 1 ? "bg-[#333333e3] text-[#fff]" : "border border-[#fff] bg-transparent"} `}
              onClick={() => handleClick(1)}
            >
              жилая
            </div>
          </SplideSlide>
          <SplideSlide>
            <div 
              className={`w-[120px] h-[30px] flex items-center justify-center text-[13px] font-avenirThin rounded-[60px] ${current === 2 ? "bg-[#333333e3] text-[#fff]" : "border border-[#fff] bg-transparent"} `}
              onClick={() => handleClick(2)}
            >
              инвестиции
            </div>
          </SplideSlide>
          <SplideSlide>
            <div 
              className={`w-[120px] h-[30px] flex items-center justify-center text-[13px] font-avenirThin rounded-[60px] ${current === 3 ? "bg-[#333333e3] text-[#fff]" : "border border-[#fff] bg-transparent"} `}
              onClick={() => handleClick(3)}
            >
              перепланировка
            </div>
          </SplideSlide>
        </Splide>
      </div>

      {/* Left content */}
      <div className="container mx-auto">
        <div className="w-full lg:w-[480px] 2xl:w-[543px] mt-[30px] lg:mt-[-375px] xl:mt-[-460px] 2xl:mt-[-519px] truncate">
          <div className="font-avenirLight text-lg sm:text-[24px] xl:text-[28px] 2xl:text-[32px] font-[100] uppercase leading-[20px] xl:leading-[25.2px] 2xl:leading-[28.8px]">Ваш путь к</div>
          <div className="font-avenir text-lg sm:text-[24px] xl:text-[28px] 2xl:text-[32px] font-[700] uppercase leading-[20px] xl:leading-[25.2px] 2xl:leading-[28.8px] text-[#333] mt-0 sm:mt-[10px]">идеальной недвижимости</div>
          <div className="font-avenirLight text-lg sm:text-[24px] xl:text-[28px] 2xl:text-[32px] font-[100] uppercase leading-[20px] xl:leading-[25.2px] 2xl:leading-[28.8px] mt-0 sm:mt-[10px]">начинается здесь</div>
  
          {/* box info */}
          <div className="flex items-center justify-between sm:justify-normal sm:gap-[20px] 2xl:gap-[22px] mt-[30px] xl:mt-[40px] 2xl:mt-[45px]">
            {/* Box 1 */}
            <div className="text-center">
              <div className="text-[22px] sm:text-[28px] 2xl:text-[36px] font-[700] text-[#494949] leading-[33.88px] 2xl:leading-[43.56px]">35 лет</div>
              <span className="text-[12px] sm:text-[16px] 2xl:text-[18px] font-[400] text-[#6b6b6b]">на рынке</span>
            </div>
            <div className="h-[40px] w-[1px] bg-[#C9C9C9]"></div>
            {/* Box 2 */}
            <div className="text-center">
              <div className="text-[22px] sm:text-[28px] 2xl:text-[36px] font-[700] text-[#494949] leading-[33.88px] 2xl:leading-[43.56px]">100</div>
              <span className="text-[12px] sm:text-[16px] 2xl:text-[18px] font-[400] text-[#6b6b6b]">выгодных инвестиций</span>
            </div>
            <div className="h-[40px] w-[1px] bg-[#C9C9C9]"></div>
            {/* Box 3 */}
            <div className="text-center">
              <div className="text-[22px] sm:text-[28px] 2xl:text-[36px] font-[700] text-[#494949] leading-[33.88px] 2xl:leading-[43.56px]">1000</div>
              <span className="text-[12px] sm:text-[16px] 2xl:text-[18px] font-[400] text-[#6b6b6b]">успешных сделок</span>
            </div>
          </div>
  
          {/* What we do */}
          <div className="mt-[20px] xl:mt-[60px] mb-[20px] sm:mb-[30px] xl:mb-[40px]">
            <div className="flex items-center gap-[10px]">
              <span className="font-avenir text-[20px] 2xl:text-[24px] text-[#313131]">Что мы делаем</span>
              <div className="flex-1 h-[1px] border-b border-[#31313162]"></div>
            </div>
  
            {/* When change data, change text */}
            <div 
              className={`reg-text ${slideOut ? 'slide-out' : ''} ${slideIn ? 'slide-in' : ''} relative text-[14px] xl:text-[18px] 2xl:text-[20px] text-[#494949] font-[400] whitespace-pre-line leading-[16px] sm:leading-[18px] 2xl:leading-[20px] mt-[10px] sm:mt-[20px] 2xl:mt-[40px] transition-all duration-[5000ms] ease-in-out`}
            >
              {data[current].title}
            </div>
          </div>
  
          <ButtonMore 
            text="Подробнее"
            link={data[current].link}
          />
        </div>
      </div>
    </>
  )
}

export default Section1