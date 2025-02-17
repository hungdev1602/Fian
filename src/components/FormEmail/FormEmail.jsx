/* eslint-disable no-unused-vars */
import { FaInstagram } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import form_email from "/images/form_email.png"
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
const FormEmail = ({ check = false }) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service ID, template ID, and public key
    const serviceId = 'service_hgkewry';
    const templateId = 'template_g5v3bdp';
    const publicKey = 'U3HhGXdphIX7wK_ut';

    // object that contains dynamic template params
    const templateParams = {
      from_name: name,
      phone: phone,
      userMail: mail,
    };

    // send email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        setName("");
        setPhone("");
        setMail("");
        toast.success("Письмо успешно отправлено");
      })
      .catch((error) => {
        toast.error('Email sending failed:', error);
      });
  }

  const text = `Превратим вашу
  недвижимость в актив`


  return (
    <>
      <div className={`${check ? "my-0" : "sm:my-[100px] xl:my-[120px]"} ${check ? "bg-[#F3F3F3]" : "bg-white"} rounded-[20px]`}>
        <div className="flex justify-between">
          {/* Left */}
          <div className="w-full lg:w-[460px] py-[20px] sm:py-[40px] pl-[20px] sm:pl-[40px] pr-[20px] sm:pr-[40px] lg:pr-0">
            <div className="text-[16px] sm:text-[20px] font-[400] font-avenirLight uppercase whitespace-pre-line leading-[18px]">{text}</div>
            <div className="text-[24px] sm:text-[32px] 2xl:text-[42px] font-[700] text-[#333] font-avenir uppercase mt-[20px] leading-[21px] sm:leading-[28.8px] 2xl:leading-[37.8px]">Контакты</div>

            {/* google */}
            <div className="flex items-center gap-[10px] mt-[10px] sm:mt-[20px]">
              <Link to={'https://t.me/rieltor_fadeeva'} target="_blank" className="w-[30px] sm:w-[40px] aspect-square flex items-center justify-center border border-[#000] rounded-[10px]">
                <RiTelegram2Line className="sm:text-[22px]"/>
              </Link>
              <Link to={'https://wa.me/79035442927'} target="_blank" className="w-[30px] sm:w-[40px] aspect-square flex items-center justify-center border border-[#000] rounded-[10px]">
                <FaWhatsapp className="sm:text-[22px]"/>
              </Link>
              <Link to={'https://www.instagram.com/rieltor_fadeeva/'} target="_blank" className="w-[30px] sm:w-[40px] aspect-square flex items-center justify-center border border-[#000] rounded-[10px]">
                <FaInstagram className="sm:text-[22px]"/>
              </Link>
            </div>

            <form className="w-full mt-[30px] sm:mt-[60px] 2xl:mt-[96px]" onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="w-full border-b border-[#808080] outline-none text-[18px] bg-transparent"
                placeholder="Имя" 
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input 
                type="text" 
                className="w-full border-b border-[#808080] outline-none text-[18px] mt-[20px] bg-transparent"
                placeholder="Номер телефона" 
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
              <input 
                type="email" 
                className="w-full border-b border-[#808080] outline-none text-[18px] mt-[20px] bg-transparent"
                placeholder="Email" 
                value={mail}
                onChange={e => setMail(e.target.value)}
                required
              />

              <button 
                className="w-full sm:w-[250px] h-[50px] sm:h-[60px] bg-[#333] rounded-[40px] text-[14px] sm:text-[18px] 2xl:text-[24px] text-[#fff] mt-[30px] sm:mt-[40px] wave-btn"
              >
                Отправить
              </button>
            </form>

            <div className="w-full sm:w-[440px] text-[6px] sm:text-[10px] font-[400] font-avenirThin leading-[9px] mt-[20px] sm:mt-[125px] 2xl:mt-[157px] text-[#B2B2B2] uppercase">Отправляя заявку, вы даете согласие на обработку своих персональных данных в соответствии с политикой конфиденциальности.</div>
          </div>

          {/* Right */}
          <div className="hidden lg:block w-[500px] xl:w-[540px] 2xl:w-[951px] h-[650px] 2xl:h-[778px]">
            <img 
              src={form_email} 
              alt="" 
              className="w-full h-full object-cover rounded-r-[20px]"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default FormEmail