/* eslint-disable react/prop-types */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import partner9 from '/images/partner_9.png';
import partner10 from '/images/partner_10.png';
import partner11 from '/images/partner_11.png';
import partner12 from '/images/partner_12.png';
import partner13 from '/images/partner_13.png';
import partner14 from '/images/partner_14.png';
import partner15 from '/images/partner_15.png';
// npm install @splidejs/react-splide
// npm install @splidejs/splide-extension-auto-scroll

// Define the style for the images in the carousel
const imageStyle = {
  width: window.innerWidth < 576 ? '150px' : '200px',
  height: window.innerWidth < 576 ? "30px" :'40px',
  borderRadius: '20px',
};

function PartnerCarousel2() {
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
            direction: 'rtl',
          }}
          extensions={{ AutoScroll }} // Use the AutoScroll extension
        >
          <SplideSlide>
            <img src={partner9} alt="Poster Brooklyn" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={partner10} alt="Poster Macao" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={partner11} alt="Poster Navada" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={partner12} alt="Poster Brooklyn" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={partner13} alt="Poster Macao" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={partner14} alt="Poster Navada" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={partner15} alt="Poster Navada" style={imageStyle} />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default PartnerCarousel2;