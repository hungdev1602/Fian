import logo_rotate from "/images/logo_rotate.png"
import founder_rotate from "/images/founder_rotate.png"
const MobileSection = () => {
  return (
    <>
      <div className="flex sm:hidden relative mb-[-20px]">
        <div className="w-[200px] h-[250px]">
          <img src={logo_rotate} alt="" />
        </div>
        <div className="w-[200px] h-[250px] mt-[8%]">
          <img src={founder_rotate} alt="" />
        </div>
      </div>
    </>
  )
}

export default MobileSection