import FormEmail from "../../components/FormEmail/FormEmail"
import Header2 from "../../components/Header2/Header2"
import Section1 from "./Sections/Section1/Section1"
import Section2 from "./Sections/Section2/Section2"
import Section3 from "./Sections/Section3/Section3"

const AboutPage = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header2 />
        <Section1 />
        <Section2 />
      </div>
      <Section3 />
      <div className="container mx-auto">
        <FormEmail />
      </div>
    </>
  )
}

export default AboutPage