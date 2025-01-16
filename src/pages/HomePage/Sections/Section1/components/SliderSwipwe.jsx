// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import './styles.css';
// import required modules
import { EffectCards, Pagination } from 'swiper/modules';
import logo_rotate from '/images/logo_rotate.png'
import img1 from "/images/bg-commercial.png"
import img2 from "/images/bg-investment.png"
import img3 from "/images/bg-reconstruction.png"
import img4 from "/images/bg-residential.png"
import { useEffect, useRef } from 'react';
const SliderSwipwe = ({ current }) => {
  const swiperRef = useRef(null)
  useEffect(() => {
    swiperRef.current.swiper.slideTo(current);
  }, [current])
  return (
    <>
      <div className="block sm:hidden w-full relative mb-[30px]">
        <div className="absolute w-[150px] h-[200px]">
          <img src={logo_rotate} alt="" className='w-full h-full object-cover'/>
        </div>
        <div className='rotate'>
          <Swiper
            ref={swiperRef}
            effect={'cards'}
            grabCursor={true}
            speed={2000} //important for autoplay
            modules={[EffectCards, Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="" className='w-full h-full object-cover'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" className='w-full h-full object-cover'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" className='w-full h-full object-cover'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" className='w-full h-full object-cover'/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default SliderSwipwe