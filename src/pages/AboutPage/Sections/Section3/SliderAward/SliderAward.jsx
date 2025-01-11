import award1 from "/images/award_1.png"
import award2 from "/images/award_2.png"
import award3 from "/images/award_3.png"
import award4 from "/images/award_4.png"
import award5 from "/images/award_5.png"
import award6 from "/images/award_6.png"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useState } from 'react';

const SliderAward = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleClick = (image) => {
    setSelectedImage(image)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setSelectedImage(null)
  }

  return (
    <>
      <Splide
        options={{
          arrows: false, // Hide navigation arrows
          pagination: false, // Hide pagination dots
          fixedWidth: '110px', // Fixed width for each slide
          gap: '0px', // Gap between slides
        }}
      >
        <SplideSlide>
          <div className="w-[100px] h-[110px] rounded-[20px] border border-[#AAA09A] p-[2px] truncate" onClick={() => handleClick(award1)}>
            <img src={award1} alt="" className="w-full h-full object-cover"/>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-[100px] h-[110px] rounded-[20px] border border-[#AAA09A] p-[2px] truncate" onClick={() => handleClick(award2)}>
            <img src={award2} alt="" className="w-full h-full object-cover"/>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-[100px] h-[110px] rounded-[20px] border border-[#AAA09A] p-[2px] truncate" onClick={() => handleClick(award3)}>
            <img src={award3} alt="" className="w-full h-full object-cover"/>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-[100px] h-[110px] rounded-[20px] border border-[#AAA09A] p-[2px] truncate" onClick={() => handleClick(award4)}>
            <img src={award4} alt="" className="w-full h-full object-cover"/>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-[100px] h-[110px] rounded-[20px] border border-[#AAA09A] p-[2px] truncate" onClick={() => handleClick(award5)}>
            <img src={award5} alt="" className="w-full h-full object-cover"/>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="w-[100px] h-[110px] rounded-[20px] border border-[#AAA09A] p-[2px] truncate" onClick={() => handleClick(award6)}>
            <img src={award6} alt="" className="w-full h-full object-cover"/>
          </div>
        </SplideSlide>

      </Splide>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[999]" onClick={handleClose}>
          <div className="max-w-[80%] h-[50vh] bg-white rounded-[20px] p-[20px]">
            <img src={selectedImage} alt="" className="w-full h-full object-contain"/>
          </div>
        </div>
      )}
    </>
  )
}

export default SliderAward
