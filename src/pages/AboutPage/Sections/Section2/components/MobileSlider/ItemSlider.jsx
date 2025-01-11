/* eslint-disable react/prop-types */
import React from 'react'
import { GoArrowDownRight } from 'react-icons/go'

const ItemSlider = ({ desc = [] }) => {
  return (
    <>
      <div className="p-[20px] bg-white rounded-[20px]">
        <div className="flex items-center gap-[5px]">
          <div className="text-[20px] font-[400] text-[#000000E5] leading-[24px]">[Моя История]</div>
          <GoArrowDownRight className="text-[18px]"/>
        </div>
        <div className="text-[16px] font-bold text-[#000000E5] leading-[19px] mt-[20px]">[1989 - 2000]</div>
        <div className="flex flex-col gap-[10px] mt-[20px]">
          <div 
            className="text-[13px] font-[400] text-[#4d4d4d] leading-[12.6px]"
          >
            {desc[0]}
          </div>
          
        </div>
      </div>
    </>
  )
}

export default ItemSlider