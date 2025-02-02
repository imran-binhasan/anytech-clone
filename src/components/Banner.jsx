import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import svg1 from "../assets/backgrounds/WaveLinesDesktop1.svg";
import svg4 from "../assets/backgrounds/WaveLinesDesktop4.svg";
import svg2 from "../assets/backgrounds/WaveLinesDesktop2.svg";
import svg3 from "../assets/backgrounds/WaveLinesDesktop3.svg";
import heroImage from "../../public/banner-image.png";
import Navbar from "./Navbar";

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

  const AnimatedSVG = ({ src, position, hoverDirection }) => {
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
        className="absolute opacity-40"
        style={{ ...position, width: "100%", x, y }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      />
    );
  };

  return (
    <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }} className="relative text-white overflow-hidden bg-blue-800 pl-10">


      {/* Hero Section */}
      <div className="relative grid grid-cols-12 container mx-auto">
        {/* Left Content */}
        <div className="col-span-4 text-center md:text-left z-10 flex flex-col gap-6 justify-center h-full">
  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
    Embrace the <br /> <span className="">future of finance</span>
  </h2>
  <p className="text-base md:text-lg">
    Reimagine financial services with AnyTech’s open platform, distributed <br />
    banking solution that powers transformation.
  </p>
  <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-lg w-max">
    Reach Out to Us
  </button>
</div>


        {/* Right Image */}
        <div className="relative col-span-8">
          <div className="relative overflow-hidden">
            <img
              src={heroImage}
              alt="Professional woman with phone"
              className="relative object-cover rounded-lg shadow-lg scale-[1.4] -ml-24 transform"
              style={{ clipPath: "polygon(68% 0, 100% 0, 100% 49%, 72% 100%, 21% 100%)" }}
            />
          </div>
        </div>
      </div>

      {/* SVG Waves with Hover Effects */}
      <AnimatedSVG src={svg1} position={{ bottom: -10, left: 0 }} hoverDirection="up" />
      <AnimatedSVG src={svg2} position={{ bottom: 50, left: 0 }} hoverDirection="down" />
      <AnimatedSVG src={svg3} position={{ top: 0, right: 0 }} hoverDirection="up" />
      <AnimatedSVG src={svg4} position={{ bottom: 0, right: 0 }} hoverDirection="down" />
    </div>
  );
};

export default Banner;
