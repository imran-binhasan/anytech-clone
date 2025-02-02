import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import SectionTitle from "../components/SectionTitle";
import CountUp from "react-countup";
import { useRef } from "react";
import { useInView } from "framer-motion";


const images = [
  "https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&fm=webp",
  "https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320&fm=webp"
];


const Brands = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
   <>
   <div>
    <SectionTitle title={"TRUSTED BY THE BEST"}/>
    <div ref={ref} className="flex flex-col md:flex-row justify-end items-center space-y-5 md:space-y-0 mx-auto px-5 md:px-0 my-8">
      <div className="flex md:flex-col w-full justify-between items-center">
        <span className="text-6xl lg:text-8xl text-blue-600 font-semibold">
        {">"}{isInView && <CountUp end={20} duration={2} />}
        </span>
        <span className="font-semibold lg:font-normal text-gray-800 lg:text-lg">
          Years of Experience
        </span>
      </div>
      <div className="md:hidden border-b text-blue-200  mb-3 w-full"></div>
      <div className="flex md:flex-col w-full justify-between items-center">
        <span className="text-6xl lg:text-8xl text-blue-600 font-semibold">
          {isInView && <CountUp end={40} duration={2} />}+
        </span>
        <span className="font-semibold lg:font-normal text-gray-800 lg:text-lg">
          Financial Institutions
        </span>
      </div>
      <div className="md:hidden border-b text-blue-200  mb-3 w-full"></div>
      <div className="flex md:flex-col w-full justify-between items-center lg:gap-2">
        <span className="text-6xl lg:text-8xl text-blue-600 font-semibold">
        {">"}{isInView && <CountUp end={200} duration={2} suffix="m" />}
        </span>
        <span className="font-semibold lg:font-normal text-gray-800 lg:text-lg">
          Customers Each
        </span>
      </div>
      <div className="md:hidden border-b text-blue-200  mb-3 w-full"></div>
    </div>
   </div>
    <div className="max-w-7xl mx-auto my-8">
      {/* Grid for Large and Medium Screens */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-6 p-4 justify-center items-center">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Bank Logo ${index}`} className="w-50 h-auto  mx-auto" />
        ))}
      </div>

      {/* Swiper for Small Screens */}
      <div className="md:hidden max-w-7xl overflow-hidden ">
        <Swiper
          slidesPerView={3}
          spaceBetween={30} // Adjust space between slides
          freeMode={true}
          centeredSlides={true} // Center the current slide
          loop={true}
          modules={[FreeMode]}
          className="mySwiper flex justify-center items-center"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="w-auto my-auto h-auto mx-auto flex justify-center items-center">
              <img
                src={img}
                alt={`Bank Logo ${index}`}
                className="w-full h-auto object-cover mx-auto" // Add a fixed height to images
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
   </>
  );
};

export default Brands;
