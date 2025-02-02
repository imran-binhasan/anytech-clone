
import SectionTitle from "../components/SectionTitle";
import line1 from "../assets/icons/easy-banking/Line1.svg";
import line2 from "../assets/icons/easy-banking/Line2.svg";
import line3 from "../assets/icons/easy-banking/Line3.svg";
import line4 from "../assets/icons/easy-banking/Line4.svg";
import bridge from "../assets/icons/easy-banking/Bridge.svg";
import { FaShareAlt, FaLightbulb, FaMicrochip } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Fade } from "react-awesome-reveal";

const Philosopy = () => {
  const features = [
    {
      icon: <FaShareAlt size={42} className="p-3 rounded-full bg-[#e3f3ff]" />,
      title: "Full-suite solutions",
      description:
        "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    },
    {
      icon: <FaLightbulb size={42} className="p-3 rounded-full bg-[#a8efef]" />,
      title: "Simplify the complex",
      description:
        "Simplify complex processes and optimize your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    },
    {
      icon: <FaMicrochip size={42} className="p-3 rounded-full bg-[#f4c9a4]" />,
      title: "Cutting edge tech",
      description:
        "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    },
  ];
  return (
    <section className="relative py-16 px-6 bg-white">
      <SectionTitle title="Our Philosopy" />
      <h2 className="text-4xl font-semibold text-center text-blue-900 mb-10">
        Human-centred innovation
      </h2>

      <div className="relative max-w-7xl mx-auto  rounded-3xl flex flex-col lg:flex-row items-center gap-14">
        {/* Left Section */}
        <div className="bg-gradient-to-r from-[#e3f3ff] to-[#fafafa] lg:h-[400px] w-11/12 sm:w-4/5 mx-auto h-[220px]  rounded-3xl px-12 lg:w-[36%]">
          <div className=" h-full my-auto  mx-auto flex justify-center items-center flex-col">
            <div className="bg-white py-5 rounded-xl shadow-xl w-80 lg:w-64 text-center">
              <p className="text-blue-600  text-sm font-semibold">CORE TECH</p>
              <h3 className="text-xl justify-around lg:flex-col lg:flex flex-col font-medium text-[#1c5295]">
                <span>Artificial</span>  <span>Intelligence</span>
              </h3>
            </div>
            <p className="text-gray-600 text-[8px] lg:text-[10px] absolute lg:left-22 lg:bottom-24 bottom-123 w-80 lg:w-56">
              Using AI/ML to upgrade legacy processes, reduce cost, and improve
              efficiency.
            </p>
          </div>
        </div>

        <div className="flex items-center flex-col lg:flex-row gap-20 bg-gradient-to-r from-[#fafafa] h-[400px] rounded-3xl w-11/12 sm:w-4/5 mx-auto lg:w-[64%] px-12 to-[#e3f3ff] ">
          <div>
            <div className="bg-white py-5 relative rounded-xl shadow-xl z-20 w-52 text-center">
              <p className="text-orange-600  text-sm font-semibold ">
                MECHANISM
              </p>
              <h3 className="text-xl font-medium text-[#1c5295]">Blockchain</h3>
            </div>
            <p className="text-gray-600 text-[8px] lg:text-[10px] absolute lg:bottom-28 bottom-68 text-center ml-4 w-40 ">
              Enhanced security by eliminating intermediaries.
            </p>
          </div>

          <div className="flex lg:flex-col gap-20">
            <div className="bg-white py-5 rounded-xl shadow-xl w-34 sm:w-52 text-center">
              <p className="text-teal-600  text-sm font-semibold ">
                INFRASTRUCTURE
              </p>
              <h3 className="text-xl font-medium text-[#1c5295]">Cloud</h3>
            </div>{" "}
            <p className="text-gray-600 lg:text-[10px] text-[8px] absolute  top-[80%] right-[62%]  lg:right-6 lg:top-20 w-26 md:w-40 lg:w-32">
              Scale resources easily on-demand.
            </p>
           <div className="flex items-center">
           <div className="bg-white py-5 rounded-xl shadow-xl  w-34 sm:w-52 text-center">
              <p className="text-yellow-600  text-sm font-semibold ">
                RESOURCE
              </p>
              <h3 className="text-xl font-medium text-[#1c5295]">Data</h3>
            </div>
            <p className="text-gray-600 lg:text-[10px] text-[8px] absolute lg:right-6 lg:top-64 right-[16%] top-135 text-center  w-26 md:w-40 lg:w-32">
              Valuable, actionable insights from massive data sources.
            </p>
           </div>
          </div>
        </div>
        <img
          className="absolute lg:top-43 top-53 lg:left-116 w-[14px] z-10 lg:rotate-90"
          src={line1}
          alt=""
        />
        <img
          className="absolute lg:bottom-26  lg:rotate-270 bottom-59 lg:right-116 right-[50%] sm:right-[59%] lg:w-24 w-20  "
          src={line2}
          alt=""
        />
        <img
          className="absolute lg:top-26 top-87 lg:rotate-270  lg:right-116 right-[30%] lg:w-24  w-20   "
          src={line3}
          alt=""
        />
        <img
          className="absolute lg:top-48 bottom-44 w-16 lg:right-[15%]  xl:right-76 lg:rotate-270"
          src={line4}
          alt=""
        />
        <img
          className="absolute top-55 lg:top-45 lg:left-[22.5%] xl:left-77 lg:rotate-270"
          src={bridge}
          alt=""
        />
      </div>
      <div className="max-w-7xl my-10 mx-auto">
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-20">
        {features.map((feature, index) => (
          <Fade key={index} delay={index * 200} triggerOnce>
            <div
              className="bg-[#fafafa] shadow-xs flex flex-col p-6 rounded-xl space-y-4"
            >
              {feature.icon}
              <h4 className="text-lg sm:text-xl font-medium">{feature.title}</h4>
              <p className="text-sm leading-6">{feature.description}</p>
            </div>
          </Fade>
        ))}
      </div>

      {/* Swiper for Mobile */}
      <div className="block sm:hidden">
        <Swiper spaceBetween={20} slidesPerView={1.5}>
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <Fade delay={index * 200} triggerOnce>
                <div className="bg-[#fafafa] shadow-xs flex flex-col p-6 rounded-xl space-y-4">
                  {feature.icon}
                  <h4 className="text-lg sm:text-xl font-medium">{feature.title}</h4>
                  <p className="text-sm leading-6">{feature.description}</p>
                </div>
              </Fade>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </section>
  );
};

export default Philosopy;
