
const ExperienceItem = ({title, desc = []}) => {
  return (
    <>
      <div className="">
        <div className="text-[20px] xl:text-[24px] 2xl:text-[28px] font-bold text-[#474747] leading-[29px] 2xl:leading-[34px]">{title}</div>
        <div className="flex flex-col gap-[5px] xl:gap-[10px] mt-[20px]">
          {
            desc.map((item, index) => (
              <div 
                key={index}
                className="text-[11px] xl:text-[13px] 2xl:text-[20px] font-[400] text-[#4d4d4d] leading-[22.4px] 2xl:leading-[32px]"
              >
                {item}
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default ExperienceItem