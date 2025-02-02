import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import svg1 from "../assets/backgrounds/WaveLinesDesktop1.svg";
import svg4 from "../assets/backgrounds/WaveLinesDesktop4.svg";
import svg2 from "../assets/backgrounds/WaveLinesDesktop2.svg";
import svg3 from "../assets/backgrounds/WaveLinesDesktop3.svg";
import heroImage from "../../public/banner-image.png";
import mobileSVG1 from "../assets/backgrounds/WaveLinesMobile1.svg";
import mobileSVG2 from "../assets/backgrounds/WaveLinesMobile2.svg";

const Banner = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const normalized = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
      mouseX.set(normalized.x);
      mouseY.set(normalized.y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const AnimatedSVG = ({ src, position, hoverDirection, extraClass = "" }) => {
    const xRange = hoverDirection === "up" ? [-10, 10] : [10, -10];
    const yRange = hoverDirection === "up" ? [-8, 8] : [8, -8];

    const x = useSpring(useTransform(smoothX, [-1, 1], xRange), {
      damping: 30,
      stiffness: 80,
    });
    const y = useSpring(useTransform(smoothY, [-1, 1], yRange), {
      damping: 30,
      stiffness: 80,
    });

    return (
      <motion.img
        src={src}
        alt="Decorative Wave"
        className={`absolute opacity-40 w-full h-auto ${extraClass}`}
        style={{ ...position, x, y }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      />
    );
  };

  return (
    <>
    <div
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
      className="relative  text-white overflow-hidden bg-blue-800 px-6 md:pr-0 md:pl-12 pt-10"
    >
      {/* Hero Section */}
      <div className="relative grid grid-cols-12 md:ml-25 container mx-auto">
        {/* Left Content */}
        <div className="col-span-12 md:col-span-4 text-left z-10 flex flex-col gap-6 justify-center h-[600px] md:h-full">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            Embrace the <br /> <span className="">future of finance</span>
          </h2>
          <p className="text-base md:text-lg">
            Reimagine financial services with AnyTech’s open platform, distributed <br />
            banking solution that powers transformation.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-sm text-lg md:w-max w-full">
            Reach Out to Us {'>'}
          </button>
        </div>

        {/* Right Image */}
        <div className="relative md:block hidden col-span-8">
          <div className="relative overflow-hidden scale-[1.2]">
            <img
              src={heroImage}
              alt="Professional woman with phone"
              className="relative object-cover rounded-lg shadow-lg md:-ml-24 transform"
              style={{ clipPath: "polygon(68% 0, 100% 0, 100% 49%, 72% 100%, 21% 100%)" }}
            />
          </div>
        </div>
      </div>

      {/* Mobile SVG */}
      <AnimatedSVG src={mobileSVG1} position={{ bottom: 0, left: 0 }} hoverDirection="up" extraClass="md:hidden" />
      <AnimatedSVG src={mobileSVG2} position={{ bottom: 0, left: 0 }} hoverDirection="up" extraClass="md:hidden" />

      {/* Desktop SVGs (Shown from md and up) */}
      <div className="hidden md:block">
        <AnimatedSVG src={svg1} position={{ bottom: -10, left: 0 }} hoverDirection="up" />
        <AnimatedSVG src={svg2} position={{ bottom: 50, left: 0 }} hoverDirection="down" />
        <AnimatedSVG src={svg3} position={{ top: 0, right: 0 }} hoverDirection="up" />
        <AnimatedSVG src={svg4} position={{ bottom: 0, right: 0 }} hoverDirection="down" />
      </div>
      
    </div>
      <div className="md:hidden -mt-23 w-full">
      <img
        src={heroImage}
        alt="Professional woman with phone"
        className=" w-full h-80  object-cover 4 scale-[1] transform"
        style={{ clipPath: "polygon(0 28%, 100% 0%, 100% 73%, 0 90%)"}}
        
      />
    </div>
    </>
  );
};

export default Banner;
