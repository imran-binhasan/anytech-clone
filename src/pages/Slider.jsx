import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const slides = [
  {
    title: "Customer focused",
    subtitle: "Purpose-built financial services",
    description1:
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
    description2:"Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=960&auto=format",
  },
  {
    title: "Agile and adaptable",
    subtitle: "Agile and adaptable for growth",
    description1:
      "Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.",
       description2:"Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=960&auto=format",
  },
  {
    title: "Compliance ready",
    subtitle: "Manage compliance with ease",
    description1:
      "Navigate through the evolving regulatory landscape with confidence by streamlining compliance management—through real-time risk monitoring solutions powered by AI and machine learning.",
       description2:"Transform your compliance strategy with flexible and diversified policy rules, powered by cutting-edge technology that is designed for seamless integration with core banking and card payment systems.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=960&auto=format",
  },
  {
    title: "Secure and safe",
    subtitle: "Highly secure and safe",
    description1:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.",
       description2:"Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure.",
    image:
      "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=960&auto=format",
  },
];

const Slider = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index

  return (
    <section className="w-full py-10 bg-white text-center">
      <SectionTitle title='Technology built for you'/>
      <h2 className="text-4xl font-semibold text-center text-blue-900 mb-10">
        The future of finance
      </h2>

      {/* Buttons */}
      <div className="hidden md:flex max-w-7xl mx-auto justify-between gap-4 mt-6 px-6">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`px-8 py-[10px] text-blue-600 rounded-4xl text-lg font-medium transition-all ${
              activeIndex === index
                ? "bg-blue-200  border-blue-600"
                : "bg-white  hover:bg-blue-100"
            }`}
            onClick={() => swiper && swiper.slideTo(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="my-10 max-w-7xl mx-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="text-center">
            <div className="flex justify-between shadow-lg rounded-xl border-gray-100 border items-center max-w-7xl mx-auto  p-6">
              <div className="flex-1 text-center lg:text-left sm:h-[450px] mx-auto space-y-5">
                <h4 className="text-blue-600 uppercase lg:text-lg font-semibold tracking-wide">
                 {slide.title}
                </h4>
                <h2 className="text-3xl lg:text-5xl text-gray-800 my-5">
                {slide.subtitle}
                </h2>
                <div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-lg sm:hidden mb-4 w-[450px] h-[300px]  object-cover ml-auto"
                />
                </div>
                <p className="mt-4 text-gray-700 text-lg font-medium">
                {slide?.description1}
                </p>
                <p className="mt-4 text-gray-800">
                  {slide?.description2}
                </p>
              </div>
              <div className="hidden sm:block flex-1 h-[450px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-lg mb-4 w-[450px] h-[450px]  object-cover ml-auto"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
