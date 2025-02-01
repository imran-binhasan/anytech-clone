import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import svg1 from "../assets/backgrounds/WaveLinesDesktop1.svg";
import svg2 from "../assets/backgrounds/WaveLinesDesktop2.svg";
import svg3 from "../assets/backgrounds/WaveLinesDesktop3.svg";
import svg4 from "../assets/backgrounds/WaveLinesDesktop4.svg";

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
    <motion.div style={{ clipPath: "polygon(100% 65%, 0 0, 0 100%, 100% 100%)" }} 
      className="relative  object-cover bg-no-repeat h-80 w-full overflow-hidden cursor-default bg-blue-800 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >

      {/* Decorative SVG Elements */}
      <DecorativeElement src={svg1} position={{ top: 0, left: 0 }} size={{ width: "100%", height: 400 }} hoverDirection="up" />
      <DecorativeElement src={svg2} position={{ top: 0, left: 0 }} size={{ width: "100%", height: 400 }} hoverDirection="up" />
      <DecorativeElement src={svg3} position={{ top: 0, left: 0 }} size={{ width: "100%", height: 400 }} hoverDirection="up" />
      <DecorativeElement src={svg4} position={{ top: 0, left: 0 }} size={{ width: "100%", height: 400 }} hoverDirection="down" />
    </motion.div>
  );
};

export default Footer;
