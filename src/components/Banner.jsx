import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import svg1 from "../assets/backgrounds/WaveLinesDesktop1.svg";
import svg3 from "../assets/backgrounds/WaveLinesDesktop3.svg";
import svg4 from "../assets/backgrounds/WaveLinesDesktop4.svg";

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

  const DecorativeElement = ({ src, position, size, hoverDirection }) => {
    const xRange = hoverDirection === "up" ? [-5, 5] : [5, -5];
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
    <motion.div
      className="relative banner object-cover bg-no-repeat h-[80vh] w-full overflow-hidden cursor-default"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative z-10 h-[80vh] max-w-5xl mx-auto px-10 py-10 text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-5xl mb-6 font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Legacy no longer
        </motion.h1>
        <motion.p
          className="text-2xl mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Talk to us to find out how we can transform your organisation for the future
        </motion.p>
        <motion.a
          href="#"
          className="px-6 py-3 inline-block bg-orange-500 hover:bg-orange-600 text-white rounded-md text-lg transition-colors duration-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          Contact Us ›
        </motion.a>
      </motion.div>

      {/* Decorative SVG Elements */}
      <DecorativeElement src={svg1} position={{ top: 0, left: 0 }} size={{ width: "100%", height: 600 }} hoverDirection="up" />
      <DecorativeElement src={svg3} position={{ top: 0, left: 0 }} size={{ width: "100%", height: 600 }} hoverDirection="up" />
      <DecorativeElement src={svg4} position={{ top: 0, left: 0 }} size={{ width: "100%", height: 600 }} hoverDirection="down" />
    </motion.div>
  );
};

export default Banner;
