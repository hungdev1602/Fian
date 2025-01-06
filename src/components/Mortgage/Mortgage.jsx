import Title from "../Title/Title"
import mortgage_1 from "/images/mortgage_1.png"
import mortgage_2 from "/images/mortgage_2.png"
import mortgage_3 from "/images/mortgage_3.png"
import mortgage_4 from "/images/mortgage_4.png"
import mortgage_5 from "/images/mortgage_5.png"
const Mortgage = () => {
  const text1 = `После подачи заявки ответ может быть 
  предоставлен в течение 2-х часов`
  const text2 = `Из множества банковских предложений мы 
  определим самое подходящее для вас`
  const text3 = `Мы адаптируемся к решению вашего запроса, 
  учитывая все рыночные возможности`
  const text4 = `Найдем оптимальное предложение, даже 
  если есть серьезные причины для отказа`
  const text5 = `С нами вы можете рассчитывать на максимум. 
  Одобрим любую необходимую вам сумму`
  return (
    <>
      <div className="mt-[120px]">
        <Title title="Ипотека" />

        <div className="grid grid-cols-3 gap-x-[20px] gap-y-[40px] mt-[40px]">
          {/* 1 item */}
          <div className="flex items-center justify-between pt-[40px] border-t border-[#aaa] text-[#333]">
            <div className="h-[125px] border-r border-[#aaa]"></div>
            <div className="">
              <img src={mortgage_1} alt="" className="w-[32px] aspect-square object-cover" />
  
              <div className="text-[32px] font-[400] mt-[20px] leading-[39px]">Быстрое одобрение ипотеки</div>
  
              <div className="text-[18px] font-[400] mt-[20px] leading-[22px] whitespace-pre-line">{text1}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 2 item */}
          <div className="flex items-center justify-between pt-[40px] border-t border-[#aaa] text-[#333]">
            <div className="h-[125px]"></div>
            <div className="">
              <img src={mortgage_2} alt="" className="w-[32px] aspect-square object-cover" />
  
              <div className="text-[32px] font-[400] mt-[20px] leading-[39px]">Подбор выгодных условий</div>
  
              <div className="text-[18px] font-[400] mt-[20px] leading-[22px] whitespace-pre-line">{text2}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 3 item */}
          <div className="flex items-center justify-between pt-[40px] border-t border-[#aaa] text-[#333]">
            <div className="h-[125px]"></div>
            <div className="">
              <img src={mortgage_3} alt="" className="w-[32px] aspect-square object-cover" />
  
              <div className="text-[32px] font-[400] mt-[20px] leading-[39px]">Индивидуальный подход</div>
  
              <div className="text-[18px] font-[400] mt-[20px] leading-[22px] whitespace-pre-line">{text3}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 4 item */}
          <div className="flex items-center justify-between py-[40px] border-y border-[#aaa] text-[#333]">
            <div className="h-[125px] border-r border-[#aaa]"></div>
            <div className="">
              <img src={mortgage_4} alt="" className="w-[32px] aspect-square object-cover" />
  
              <div className="text-[32px] font-[400] mt-[20px] leading-[39px]">Согласуем сложных клиентов</div>
  
              <div className="text-[18px] font-[400] mt-[20px] leading-[22px] whitespace-pre-line">{text4}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 5 item */}
          <div className="flex items-center justify-between py-[40px] border-y border-[#aaa] text-[#333]">
            <div className="h-[125px]"></div>
            <div className="">
              <img src={mortgage_5} alt="" className="w-[32px] aspect-square object-cover" />
  
              <div className="text-[32px] font-[400] mt-[20px] leading-[39px]">Крупная сумма</div>
  
              <div className="text-[18px] font-[400] mt-[20px] leading-[22px] whitespace-pre-line">{text5}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 6 item */}
          <div className="flex items-center justify-between py-[40px] border-y border-[#aaa] text-[#333] cursor-pointer">
            <div className="h-[125px]"></div>
            <div className="flex items-center justify-center">
              <div className="text-[32px] font-[400] leading-[39px]">Получить ипотеку</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mortgage