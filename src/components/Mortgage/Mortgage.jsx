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
      <div className="mt-[40px] sm:mt-[100px] 2xl:mt-[120px]">
        <Title title="Ипотека" />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-[10px] lg:gap-x-[20px] gap-y-[10px] lg:gap-y-[40px] mt-[20px] sm:mt-[40px]">
          {/* 1 item */}
          <div className="hidden lg:flex items-center justify-between pt-[10px] lg:pt-[20px] 2xl:pt-[40px] border-t border-[#aaa] text-[#333]">
            <div className="h-[125px] border-r border-[#aaa]"></div>
            <div className="">
              <img src={mortgage_1} alt="" className="w-[24px] 2xl:w-[32px] aspect-square object-cover ml-[2%] lg:ml-[5%] 2xl:ml-0" />
  
              <div className="text-[22px] 2xl:text-[32px] font-[400] mt-[20px] leading-[26.62px] 2xl:leading-[39px] pl-[2%] lg:pl-[5%] 2xl:pl-0">Быстрое одобрение ипотеки</div>
  
              <div className="w-[90%] lg:w-[100%] 2xl:w-auto text-[14px] 2xl:text-[18px] font-[400] mt-[20px] leading-[22px] whitespace-normal 2xl:whitespace-pre-line pl-[2%] lg:pl-[5%] 2xl:pl-0">{text1}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 2 item */}
          <div className="hidden lg:flex items-center justify-between pt-[10px] lg:pt-[20px] 2xl:pt-[40px] border-t border-[#aaa] text-[#333]">
            <div className="h-[125px]"></div>
            <div className="">
              <img src={mortgage_2} alt="" className="w-[24px] 2xl:w-[32px] aspect-square object-cover" />
  
              <div className="text-[22px] 2xl:text-[32px] font-[400] mt-[20px] leading-[26.62px] 2xl:leading-[39px]">Подбор выгодных условий</div>
  
              <div className="w-[100%] 2xl:w-auto text-[14px] 2xl:text-[18px] font-[400] mt-[20px] leading-[22px] whitespace-normal 2xl:whitespace-pre-line">{text2}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 3 item */}
          <div className="hidden lg:flex items-center justify-between gap-[10px] lg:gap-0 pt-[20px] 2xl:pt-[40px] border-b lg:border-b-0 border-t border-[#aaa] text-[#333]">
            <div className="h-[125px] lg:border-r-0 border-r border-[#aaa]"></div>
            <div className="">
              <img src={mortgage_3} alt="" className="w-[24px] 2xl:w-[32px] aspect-square object-cover" />
  
              <div className="text-[22px] 2xl:text-[32px] font-[400] mt-[20px] leading-[26.62px] 2xl:leading-[39px]">Индивидуальный подход</div>
  
              <div className="w-[100%] 2xl:w-auto text-[14px] 2xl:text-[18px] font-[400] mt-[20px] leading-[22px] whitespace-normal 2xl:whitespace-pre-line">{text3}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 4 item */}
          <div className="hidden lg:flex items-center justify-between py-0 lg:py-[20px] 2xl:py-[40px] border-y border-[#aaa] text-[#333]">
            <div className="h-[125px] border-r border-[#aaa]"></div>
            <div className="">
              <img src={mortgage_4} alt="" className="w-[24px] 2xl:w-[32px] aspect-square object-cover ml-[5%] 2xl:ml-0" />
  
              <div className="text-[22px] 2xl:text-[32px] font-[400] mt-[20px] leading-[26.62px] 2xl:leading-[39px] pl-[5%] 2xl:pl-0">Согласуем сложных клиентов</div>
  
              <div className="w-[100%] 2xl:w-auto text-[14px] 2xl:text-[18px] font-[400] mt-[20px] leading-[22px] whitespace-normal 2xl:whitespace-pre-line pl-[5%] 2xl:pl-0">{text4}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 5 item */}
          <div className="hidden lg:flex items-center justify-between py-[20px] 2xl:py-[40px] border-y border-[#aaa] text-[#333]">
            <div className="h-[125px]"></div>
            <div className="">
              <img src={mortgage_5} alt="" className="w-[24px] 2xl:w-[32px] aspect-square object-cover" />
  
              <div className="text-[22px] 2xl:text-[32px] font-[400] mt-[20px] leading-[26.62px] 2xl:leading-[39px]">Крупная сумма</div>
  
              <div className="w-[100%] 2xl:w-auto text-[14px] 2xl:text-[18px] font-[400] mt-[20px] leading-[22px] whitespace-normal 2xl:whitespace-pre-line">{text5}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 6 item */}
          <div className="hidden lg:flex items-center justify-between py-[40px] border-y border-[#aaa] text-[#333] cursor-pointer">
            <div className="h-[125px]"></div>
            <div className="flex items-center justify-center">
              <div className="text-[22px] 2xl:text-[32px] font-[400] leading-[26.62px] 2xl:leading-[39px]">Получить ипотеку</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>


          {/* Mobile */}
          {/* 1 item */}
          <div className="flex lg:hidden items-center justify-between py-[10px] border-y border-[#aaa] text-[#333]">
            <div className="h-[123px] border-r border-[#aaa]"></div>
            <div className="">
              <img src={mortgage_1} alt="" className="w-[24px] aspect-square object-cover ml-[4%]" />
  
              <div className="text-[14px] sm:text-[22px] font-[600] sm:font-[400] mt-[20px] leading-[16.9px] sm:leading-[26.62px] 2xl:leading-[39px] pl-[4%]">Быстрое одобрение ипотеки</div>
  
              <div className="w-[90%] text-[10px] sm:text-[14px] font-[400] mt-[10px] sm:mt-[20px] leading-[14.5px] sm:leading-[22px] pl-[4%]">{text1}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 2 item */}
          <div className="flex lg:hidden items-center justify-between py-[10px] border-y border-[#aaa] text-[#333]">
            <div className="h-[123px] border-r border-[#aaa]"></div>
            <div className="">
              <img src={mortgage_2} alt="" className="w-[24px] aspect-square object-cover ml-[4%]" />
  
              <div className="text-[14px] sm:text-[22px] font-[600] sm:font-[400] mt-[20px] leading-[16.9px] sm:leading-[26.62px] 2xl:leading-[39px] pl-[4%]">Подбор выгодных условий</div>
  
              <div className="w-[90%] text-[10px] sm:text-[14px] font-[400] mt-[10px] sm:mt-[20px] leading-[14.5px] sm:leading-[22px] pl-[4%]">{text2}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 3 item */}
          <div className="flex lg:hidden items-center justify-between py-[10px] border-y border-[#aaa] text-[#333]">
            <div className="h-[123px] border-r border-[#aaa]"></div>
            <div className="">
              <img src={mortgage_3} alt="" className="w-[24px] aspect-square object-cover ml-[4%]" />
  
              <div className="text-[14px] sm:text-[22px] font-[600] sm:font-[400] mt-[20px] leading-[16.9px] sm:leading-[26.62px] 2xl:leading-[39px] pl-[4%]">Индивидуальный подход</div>
  
              <div className="w-[90%] text-[10px] sm:text-[14px] font-[400] mt-[10px] sm:mt-[20px] leading-[14.5px] sm:leading-[22px] pl-[4%]">{text3}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 4 item */}
          <div className="flex lg:hidden items-center justify-between py-[10px] border-y border-[#aaa] text-[#333]">
            <div className="h-[123px] border-r border-[#aaa]"></div>
            <div className="">
              <img src={mortgage_4} alt="" className="w-[24px] aspect-square object-cover ml-[4%]" />
  
              <div className="text-[14px] sm:text-[22px] font-[600] sm:font-[400] mt-[20px] leading-[16.9px] sm:leading-[26.62px] 2xl:leading-[39px] pl-[4%]">Согласуем после отказов</div>
  
              <div className="w-[90%] text-[10px] sm:text-[14px] font-[400] mt-[10px] sm:mt-[20px] leading-[14.5px] sm:leading-[22px] pl-[4%]">{text4}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 5 item */}
          <div className="flex lg:hidden items-center justify-between py-[10px] border-y border-[#aaa] text-[#333]">
            <div className="h-[123px] border-r border-[#aaa]"></div>
            <div className="">
              <img src={mortgage_5} alt="" className="w-[24px] aspect-square object-cover ml-[4%]" />
  
              <div className="text-[14px] sm:text-[22px] font-[600] sm:font-[400] mt-[20px] leading-[16.9px] sm:leading-[26.62px] 2xl:leading-[39px] pl-[4%]">Крупная сумма</div>
  
              <div className="w-[90%] text-[10px] sm:text-[14px] font-[400] mt-[10px] sm:mt-[20px] leading-[14.5px] sm:leading-[22px] pl-[4%]">{text5}</div>
            </div>
            <div className="h-[125px] border-r border-[#aaa]"></div>
          </div>
          {/* 6 item */}
          <div className="flex lg:hidden items-center justify-between py-[10px] border-y border-[#aaa] text-[#333] cursor-pointer">
          <div className="h-[123px] border-r border-[#aaa]"></div>
            <div className="flex items-center justify-center">
              <div className="text-[14px] sm:text-[22px] 2xl:text-[32px] font-[400] leading-[16.9px] sm:leading-[26.62px] 2xl:leading-[39px]">Получить ипотеку</div>
            </div>
            <div className="h-[123px] border-r border-[#aaa]"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mortgage