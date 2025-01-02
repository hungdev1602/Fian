import PartnerCarousel from "../../components/PartnerCarousel/PartnerCarousel"
import Section1 from "./Sections/Section1/Section1"

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto">
        <Section1 />
      </div>
      <PartnerCarousel />
      <PartnerCarousel backward={true} />
    </>
  )
}

export default HomePage