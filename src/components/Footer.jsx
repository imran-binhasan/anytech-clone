import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import svg1 from "../assets/backgrounds/WaveLinesDesktop1.svg";
import svg2 from "../assets/backgrounds/WaveLinesDesktop2.svg";
import svg3 from "../assets/backgrounds/WaveLinesDesktop3.svg";
import svg4 from "../assets/backgrounds/WaveLinesDesktop4.svg";
import { Link } from "react-router-dom";
import { FaLinkedin, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
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

  const DecorativeElement = ({ src, position, size, hoverDirection }) => {
    const xRange = hoverDirection === "up" ? [-20, 20] : [20, -20];
    const yRange = hoverDirection === "up" ? [-32, 32] : [32, -32];

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
        alt="Decorative SVG"
        className="absolute opacity-40"
        style={{
          ...position,
          width: size.width,
          height: size.height,
          x,
          y,
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      />
    );
  };

  return (
    <>
      <motion.div
        style={{ clipPath: "polygon(100% 50%, 0 0, 0 100%, 100% 100%)" }}
        className="relative  object-cover bg-no-repeat h-[500px] w-full overflow-hidden cursor-default bg-blue-800 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="relative z-10 h-60 max-w-5xl mt-40 mx-auto p-6  text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-[52px] mb-6 font-medium"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Legacy no longer
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Talk to us to find out how we can transform your organisation for
            the future
          </motion.p>
          <motion.a
            href="#"
            className="px-6 py-3 inline-block bg-orange-400 hover:bg-orange-600 text-white font-medium rounded-sm transition-colors duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Contact Us ›
          </motion.a>
        </motion.div>

        {/* Decorative SVG Elements */}
        <DecorativeElement
          src={svg1}
          position={{ top: 0, left: 0 }}
          size={{ width: "100%", height: 400 }}
          hoverDirection="up"
        />
        <DecorativeElement
          src={svg2}
          position={{ top: 0, left: 0 }}
          size={{ width: "100%", height: 400 }}
          hoverDirection="up"
        />
        <DecorativeElement
          src={svg3}
          position={{ top: 0, left: 0 }}
          size={{ width: "100%", height: 400 }}
          hoverDirection="up"
        />
        <DecorativeElement
          src={svg4}
          position={{ top: 0, left: 0 }}
          size={{ width: "100%", height: 400 }}
          hoverDirection="down"
        />
      </motion.div>
      <div className="bg-gray-800 divider  border-t border-blue-400">
        <div className="max-w-5xl mx-auto flex justify-between items-center p-10">
          <h4 className="text-white font-semibold text-4xl">ANYTECH</h4>
          <div className="md:hidden flex justify-between items-center text-blue-300  gap-4">
            <Link><FaLinkedin size={28}/></Link>
            <Link><FaPhone size={28}/></Link>
            <Link><IoMdMail  size={28}/></Link>
          </div>
          <div className="flex justify-between text-blue-300 items-center gap-3">
            <Link className="hidden md:block">Our Solutions</Link>
            <div className="border-r h-8 hidden md:block"></div>
            <nav className="hidden md:flex justify-between items-center text-blue-300  gap-2">
              <Link>AnyCasS</Link>
              <Link>AnyBasS</Link>
              <Link>AnyPasS</Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-950 border-t border-gray-600">
        <div className="max-w-5xl mx-auto flex flex-col gap-2 justify-between items-center text-blue-500 text-sm  px-10 py-3">
          <span>
            <span className="font-medium">
              &copy 2025 All rights reserved.{" "}
            </span>
            Any Technology Pte Ltd.
          </span>
          <Link>Privacy policy</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
