/* eslint-disable react/prop-types */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import partner1 from '/images/partner_1.png';
import partner2 from '/images/partner_2.png';
import partner3 from '/images/partner_3.png';
import partner4 from '/images/partner_4.png';
import partner5 from '/images/partner_5.png';
import partner6 from '/images/partner_6.png';
import partner7 from '/images/partner_7.png';
import partner8 from '/images/partner_8.png';
// npm install @splidejs/react-splide
// npm install @splidejs/splide-extension-auto-scroll

// Define the style for the images in the carousel
const imageStyle = {
  width: window.innerWidth < 576 ? '150px' : '200px',
  height: window.innerWidth < 576 ? "30px" :'40px',
  borderRadius: '20px',
};

function PartnerCarousel({ backward }) {
  return (
    <div className="w-full relative">
      <div className="">
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
            fixedWidth:  window.innerWidth < 576 ? '150px' : '200px', // Fixed width for each slide
            gap: window.innerWidth < 576 ? '10px' : '20px', // Gap between slides
            direction: backward ? 'rtl' : 'ltr',
          }}
          extensions={{ AutoScroll }} // Use the AutoScroll extension
        >
          <SplideSlide>
            <img src={partner1} alt="Poster Brooklyn" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={partner2} alt="Poster Macao" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={partner3} alt="Poster Navada" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={partner4} alt="Poster Brooklyn" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={partner5} alt="Poster Macao" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={partner6} alt="Poster Navada" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={partner7} alt="Poster Navada" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={partner8} alt="Poster Navada" style={imageStyle} />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default PartnerCarousel;