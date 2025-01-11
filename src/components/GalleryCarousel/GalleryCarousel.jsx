/* eslint-disable react/prop-types */
import Title from "../Title/Title"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
// npm install @splidejs/react-splide
// npm install @splidejs/splide-extension-auto-scroll
const GalleryCarousel = ({ data }) => {
  const imageStyle = {
    width: innerWidth < 576 ? '150px' : '300px',
    height: innerWidth < 576 ? '200px' : '450px',
  };
  return (
    <>
      <div className="mt-[40px] sm:mt-[100px] 2xl:mt-[120px]">
        <div className="container mx-auto"><Title title="Галерея проекта" /></div>

        <div className="mt-[40px]">
          <Splide
            options={{
              type: "loop", // Loop back to the beginning when reaching the end
              autoScroll: {
                pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
                pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
                rewind: true, // Rewind to start when the end is reached
                speed: 0.5 // Scrolling speed
              },
              arrows: false, // Hide navigation arrows
              pagination: false, // Hide pagination dots
              fixedWidth: innerWidth < 576 ? '150px' : '300px', // Fixed width for each slide
              gap: '10px', // Gap between slides
            }}
            extensions={{ AutoScroll }} // Use the AutoScroll extension
          >
            <SplideSlide>
              <img src={data[0]} alt="Poster Brooklyn" style={imageStyle} />
            </SplideSlide>
            <SplideSlide>
              <img src={data[1]} alt="Poster Brooklyn" style={imageStyle} />
            </SplideSlide>
            <SplideSlide>
              <img src={data[2]} alt="Poster Brooklyn" style={imageStyle} />
            </SplideSlide>
            <SplideSlide>
              <img src={data[3]} alt="Poster Brooklyn" style={imageStyle} />
            </SplideSlide>
            <SplideSlide>
              <img src={data[4]} alt="Poster Brooklyn" style={imageStyle} />
            </SplideSlide>
            <SplideSlide>
              <img src={data[5]} alt="Poster Brooklyn" style={imageStyle} />
            </SplideSlide>
            <SplideSlide>
              <img src={data[6]} alt="Poster Brooklyn" style={imageStyle} />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </>
  )
}

export default GalleryCarousel
