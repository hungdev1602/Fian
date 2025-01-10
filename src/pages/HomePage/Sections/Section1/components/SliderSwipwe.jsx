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
const SliderSwipwe = () => {
  return (
    <>
      <div className="block sm:hidden w-full relative">
        <div className="absolute w-[150px] h-[200px]">
          <img src={logo_rotate} alt="" className='w-full h-full object-cover'/>
        </div>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          loop={true} //important for autoplay
          speed={2000} //important for autoplay
          autoplay={{ //important for autoplay
            // enabled: true,
            delay: 5000,
            disableOnInteraction: false
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">' + 'коммерция' + "</span>";
            }
          }}
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
    </>
  )
}

export default SliderSwipwe