/* eslint-disable react/prop-types */

const Title = ({ title }) => {
  return (
    <div className="text-[24px] sm:text-[28px] 2xl:text-[32px] font-[700] font-avenir text-[#333] uppercase leading-[26.6px] sm:leading-normal">
      {title}
    </div>
  )
}

export default Title