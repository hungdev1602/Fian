import FormEmail from "../../components/FormEmail/FormEmail"
import PartnerCarousel from "../../components/PartnerCarousel/PartnerCarousel"
import PartnerCarousel2 from "../../components/PartnerCarousel/PartnerCarousel2"
import Section1 from "./Sections/Section1/Section1"
import Section3 from "./Sections/Section3/Section3"
import Section4 from "./Sections/Section4/Section4"

const HomePage = () => {
  return (
    <>
      <Section1 />  

      <div className="mt-[30px] sm:mt-[100px] 2xl:mt-[120px]">
        <PartnerCarousel />
      </div>
      <div className="mt-[10px] sm:mt-[30px]">
        <PartnerCarousel2 />
      </div>
      <div className="container mx-auto">
        <Section3 />
        <Section4 />
        <FormEmail />
      </div>
    </>
  )
}

export default HomePage