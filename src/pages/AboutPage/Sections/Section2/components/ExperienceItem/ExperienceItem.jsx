
const ExperienceItem = ({title, desc = []}) => {
  return (
    <>
      <div className="">
        <div className="text-[28px] font-bold text-[#000000E5] leading-[34px]">{title}</div>
        <div className="flex flex-col gap-[10px] mt-[20px]">
          {
            desc.map((item, index) => (
              <div 
                key={index}
                className="text-[20px] font-[400] text-[#4d4d4d] leading-[32px]"
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