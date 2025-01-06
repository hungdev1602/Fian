/* eslint-disable react/prop-types */
import Title from "../Title/Title"
const ServiceLeft = ({ data }) => {
  return (
    <>
      <div className="mt-[120px]">
        <Title title={data.title} />

        <div className="flex justify-between items-start mt-[40px]">
          {/* Left */}
          <div className="flex-1 flex flex-col gap-[40px] mr-[50px]">
            {
              data.info.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between pb-[25px] border-b border-[#aaa]"
                >
                  {/* Left */}
                  <div className="flex items-center gap-[20px]">
                    <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full border border-[#aaa]">{index + 1}</div>
                    <div className="text-[24px] font-[400] font-avenir uppercase leading-[21px]">{item.title}</div>
                  </div>

                  {/* Right */}
                  <div className="w-[430px] text-[20px] text-[#333] leading-[24px] whitespace-pre-line">{item.desc}</div>
                </div>
              ))
            }


            <div className="flex items-center justify-between">
              {
                data.desc ? <div className="text-[28px] font-[500] text-[#333] whitespace-pre-line leading-[34px]">{data.desc}</div> : null
              }
              

              <button className="w-[350px] h-[75px] bg-[#333333] text-[24px] font-[500] text-[#fff] rounded-[40px]">{data.buttonText}</button>
            </div>
          </div>

          {/* Right */}
          {/* === */}
          <div className={`w-[500px] ${data.heightImg} rounded-[20px] truncate`}>
            <img src={data.image} alt="" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceLeft