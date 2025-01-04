import Header1 from "../Header1/Header1"
import human_black from "/images/human_black.png"
const ServicesTopItem = () => {
  return (
    <>
      <div className="flex justify-between items-start mb-[120px]">
        <Header1 />
        <div className="w-[870px] h-[640px] bg-bgCommercial bg-cover rounded-[20px] relative truncate">
          {/* contact */}
          <div className="absolute top-[20px] right-[20px] flex gap-[10px]">
            <div className="w-[250px] h-[50px] bg-[#ffffffd6] rounded-[40px] flex items-center justify-center cursor-pointer">Связаться</div>
            <div className="w-[50px] h-[50px] rounded-full bg-[#ffffffd6] p-[8px]">
              <img src={human_black} alt="" />
            </div>
          </div>

          {/* change state */}
          <div className="absolute bottom-[20px] left-[20px] right-[20px]">
            <div className="flex justify-between items-center mt-[20px]">
              <div className="flex items-center gap-[10px]">
                <div className="w-[200px] h-[50px] rounded-[40px] flex items-center justify-center bg-[#ffffffe6]">покупка</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left content */}
      <div className="w-[600px] mt-[-685px]">
        <div className="font-avenir text-[32px] font-[400] uppercase leading-[28.8px]">Коммерческая недвижимость</div>

        {/* Desc */}
        <div className="mt-[90px] flex items-center gap-[25px]">
          <div className="text-center">
            <div className="text-[24px] font-[700] text-[#484848] leading-[29px]">От 1 дня до 2 месяцев</div>
            <div className="text-[18px] font-[400] text-[#000000CC] leading-[21.78px] mt-[10px]">[Подбор коммерции]</div>
          </div>
          <div className="h-[40px] border border-[#C9C9C9]"></div>
          <div className="text-center">
            <div className="text-[24px] font-[700] text-[#484848] leading-[29px]">От 1 дня до 6 месяцев</div>
            <div className="text-[18px] font-[400] text-[#000000CC] leading-[21.78px] mt-[10px]">[Продажа коммерции]</div>
          </div>
        </div>

        {/* Form */}
        <div className="mt-[90px]">
          <div className="text-[24px] font-[500] text-[#494949] leading-[29px]">Каталог с коммерческой недвижимостью</div>

          <form className="w-[500px] p-[20px] rounded-[20px] flex flex-col gap-[20px] mt-[20px] bg-[#333] text-[#FFFFFFCC]">
            <div className="text-[18px] font-[400]">[5 прибыльных объектов, которые дадут иксы в 2025]</div>

            <input type="text" className="text-[18px] font-[500] bg-transparent outline-none pb-[5px] border-b border-[#999]" placeholder='Номер телефона'/>
            <input type="email" className="text-[18px] font-[500] bg-transparent outline-none pb-[5px] border-b border-[#999]" placeholder='Email'/>

            <button className="w-[200px] h-[50px] rounded-[40px] bg-[#D6D6D6] text-[20px] font-[400] text-[#000]">Получить</button>
          </form>
        </div>

      </div>
    </>
  )
}

export default ServicesTopItem