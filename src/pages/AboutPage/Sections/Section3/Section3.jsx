/* eslint-disable no-unused-vars */
import Title from "../../../../components/Title/Title"
import SliderAward from "./SliderAward/SliderAward"
import award1 from "/images/award_1.png"
import award2 from "/images/award_2.png"
import award3 from "/images/award_3.png"
import award4 from "/images/award_4.png"
import award5 from "/images/award_5.png"
import award6 from "/images/award_6.png"
import { useState } from 'react';

const Section3 = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [zoom, setZoom] = useState(1)

  const handleClick = (image) => {
    setSelectedImage(image)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setSelectedImage(null)
    setZoom(1)
  }

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoom(prevZoom => prevZoom + 0.1);
  }

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoom(prevZoom => Math.max(1, prevZoom - 0.1));
  }

  return (
    <>
      <div className="container mx-auto mt-[40px] sm:mt-[100px] 2xl:mt-[120px]">
        <Title title="Награды" />

        <div className="bg-[#FFFFFFCC] py-[21px] px-[20px] md:px-[70px] hidden sm:flex items-center justify-between gap-[3px] md:gap-[10px] 2xl:gap-0 rounded-[20px] mt-[40px]" id='images'>
          <div className="w-[100px] lg:w-[140px] 2xl:w-[205px] h-[120px] lg:h-[160px] 2xl:h-[228px] truncate border border-[#AAA09A] rounded-[20px] cursor-pointer" onClick={() => handleClick(award1)}>
            <img src={award1} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-[100px] lg:w-[140px] 2xl:w-[205px] h-[120px] lg:h-[160px] 2xl:h-[228px] truncate border border-[#AAA09A] rounded-[20px] cursor-pointer" onClick={() => handleClick(award2)}>
            <img src={award2} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-[100px] lg:w-[118px] 2xl:w-[205px] h-[120px] lg:h-[160px] 2xl:h-[228px] truncate border border-[#AAA09A] rounded-[20px] cursor-pointer" onClick={() => handleClick(award3)}>
            <img src={award3} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-[100px] lg:w-[118px] 2xl:w-[205px] h-[120px] lg:h-[160px] 2xl:h-[228px] truncate border border-[#AAA09A] rounded-[20px] cursor-pointer" onClick={() => handleClick(award4)}>
            <img src={award4} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-[100px] lg:w-[118px] 2xl:w-[205px] h-[120px] lg:h-[160px] 2xl:h-[228px] truncate border border-[#AAA09A] rounded-[20px] cursor-pointer" onClick={() => handleClick(award5)}>
            <img src={award5} alt="" className="w-full h-full object-cover"/>
          </div>
          <div className="w-[100px] lg:w-[160px] 2xl:w-[205px] h-[120px] lg:h-[118px] 2xl:h-[228px] truncate border border-[#AAA09A] rounded-[20px] cursor-pointer" onClick={() => handleClick(award6)}>
            <img src={award6} alt="" className="w-full h-full object-cover"/>
          </div>
        </div>

        <div className="block sm:hidden bg-white p-5 rounded-[20px] mt-[20px]">
          <SliderAward />
        </div>
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#00000080] flex items-center justify-center" onClick={handleClose}>
            <div className="relative" onClick={e => e.stopPropagation()}>
              <img src={selectedImage} alt="" className="max-w-full max-h-full" style={{ transform: `scale(${zoom})` }}/>
              {/* <button className="absolute bottom-[-10px] right-0 m-2 bg-white p-1 rounded" onClick={handleZoomIn}>+</button>
              <button className="absolute bottom-8 right-0 m-2 bg-white p-1 rounded" onClick={handleZoomOut}>-</button> */}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Section3

