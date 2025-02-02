import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import img from "../assets/finance.avif";

import svg1 from "../assets/backgrounds/WaveLinesDesktop1.svg";
import icon1 from "../assets/backgrounds/icon1.svg";
import icon2 from "../assets/backgrounds/icon22.svg";
import icon3 from "../assets/backgrounds/icon33.svg";
import svg2 from "../assets/backgrounds/WaveLinesDesktop4.svg";

const About = () => {
    const { scrollYProgress } = useScroll();
    const [yValue, setYValue] = useState(0);

    useEffect(() => {
        const updateY = () => {
            setYValue(window.scrollY * 0.05); // Adjust movement speed based on scroll
        };

        window.addEventListener("scroll", updateY);
        return () => window.removeEventListener("scroll", updateY);
    }, []);

    return (
        <section className="flex my-10 max-w-7xl mx-auto gap-10 flex-col lg:flex-row items-center justify-between px-6">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h4 className="text-blue-600 uppercase lg:text-lg tracking-wider font-semibold tracking-wide">
                    Powering the Future of Finance
                </h4>
                <h2 className="text-3xl lg:text-6xl font-medium text-gray-900 mt-2">
                    Uncovering new ways to delight customers
                </h2>
                <p className="mt-4 text-gray-700 text-lg font-medium">
                    AnyTech is revolutionizing financial technology by introducing
                    innovative and real-time transaction account processing capabilities,
                    specifically designed for retail financial services.
                </p>
                <p className="mt-4 text-gray-800">
                    Our modern approach surpasses traditional banking and card processing
                    systems, empowering you with the most advanced technology for lasting
                    success.
                </p>
            </div>

            {/* Image Section */}
            <div className="relative mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
                <img
                    src={img}
                    alt="Finance Technology"
                    className="w-full max-w-lg rounded-lg shadow-lg"
                />
                
                {/* SVG Waves */}
                <div className="absolute inset-0 w-full h-full">
                    <motion.img
                        src={svg1}
                        alt="wave"
                        className="absolute -bottom-10 left-10 w-full opacity-100 z-0"
                        animate={{ y: yValue * 0.2 }} // Apply movement with delay
                        transition={{ type: "spring", stiffness: 100, damping: 30 }}
                    />
                    <motion.img
                        src={svg2}
                        alt="wave"
                        className="absolute -top-25 left-0 w-full opacity-60 z-0"
                        animate={{ y: yValue * 0.3 }} // Apply movement with delay
                        transition={{ type: "spring", stiffness: 100, damping: 30 }}
                    />
                </div>

                {/* Floating Icons */}
                <motion.img
                    src={icon1} 
                    alt="Banking Icon" 
                    className="w-20 h-20 absolute top-40 -left-10 rounded-full"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                />
                <motion.img
                    src={icon3} 
                    alt="Banking Icon" 
                    className="w-20 h-20 absolute top-60 left-16 rounded-full"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                />
                <motion.img
                    src={icon2} 
                    alt="Banking Icon" 
                    className="w-25 h-25 absolute top-34 -right-10 rounded-full"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                />
            </div>
        </section>
    );
};

export default About;
