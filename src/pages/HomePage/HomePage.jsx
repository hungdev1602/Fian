import FormEmail from "../../components/FormEmail/FormEmail"
import PartnerCarousel from "../../components/PartnerCarousel/PartnerCarousel"
import Section1 from "./Sections/Section1/Section1"
import Section3 from "./Sections/Section3/Section3"
import Section4 from "./Sections/Section4/Section4"

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto">
        <Section1 />
      </div>
      <PartnerCarousel />
      <PartnerCarousel backward={true} />
      <div className="container mx-auto">
        <Section3 />
        <Section4 />
        <FormEmail />
      </div>
    </>
  )
}

export default HomePage