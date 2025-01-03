import { FaGoogle } from "react-icons/fa";
import form_email from "/images/form_email.png"
const FormEmail = () => {
  const text = `Превратим вашу
  недвижимость в актив`
  return (
    <>
      <div className="my-[120px] bg-[#fff] rounded-[20px]">
        <div className="flex justify-between">
          {/* Left */}
          <div className="w-[460px] py-[40px] pl-[40px]">
            <div className="text-[20px] font-[400] font-avenir uppercase whitespace-pre-line">{text}</div>
            <div className="text-[42px] font-[700] text-[#333] font-avenir uppercase mt-[20px]">Контакты</div>

            {/* google */}
            <div className="flex items-center gap-[10px] mt-[20px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#000] rounded-[10px]">
                <FaGoogle />
              </div>
              <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#000] rounded-[10px]">
                <FaGoogle />
              </div>
              <div className="w-[40px] h-[40px] flex items-center justify-center border border-[#000] rounded-[10px]">
                <FaGoogle />
              </div>
            </div>

            <form className="w-full mt-[96px]">
              <input 
                type="text" 
                className="w-full border-b border-[#333] outline-none text-[18px]"
                placeholder="Имя" 
                required
              />
              <input 
                type="text" 
                className="w-full border-b border-[#333] outline-none text-[18px] mt-[20px]"
                placeholder="Номер телефона" 
                required
              />
              <input 
                type="email" 
                className="w-full border-b border-[#333] outline-none text-[18px] mt-[20px]"
                placeholder="Email" 
                required
              />

              <button 
                className="w-[250px] h-[60px] bg-[#333] rounded-[40px] text-[24px] text-[#fff] mt-[40px]"
              >
                Отправить
              </button>
            </form>

            <div className="w-[382px] text-[10px] font-[400] font-avenirThin leading-[9px] mt-[157px]">Отправляя заявку, вы даете согласие на обработку своих персональных данных в соответствии с политикой конфиденциальности.</div>
          </div>

          {/* Right */}
          <div className="w-[951px] h-[778px]">
            <img 
              src={form_email} 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FormEmail