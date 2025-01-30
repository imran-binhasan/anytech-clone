import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const AnimatedBanner = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring physics for mouse movement
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });
  
  const elements = [
    { top: '10%', left: '10%', width: 40, delay: 0 },
    { top: '5%', left: '40%', width: 60, delay: 0.1 },
    { top: '15%', right: '20%', width: 40, delay: 0.2 },
    { bottom: '10%', left: '15%', width: 50, delay: 0.15 },
    { bottom: '20%', right: '30%', width: 40, delay: 0.25 },
    { top: '50%', left: '5%', width: 30, delay: 0.3 },
    { top: '40%', right: '5%', width: 30, delay: 0.35 }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Convert mouse position to normalized values (-1 to 1)
      const normalized = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      };
      
      mouseX.set(normalized.x);
      mouseY.set(normalized.y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const DecorativeElement = ({ position, width, delay }) => {
    const x = useTransform(smoothX, [-1, 1], [20, -20]);
    const y = useTransform(smoothY, [-1, 1], [20, -20]);

    return (
      <motion.svg
        className="absolute"
        style={{
          ...position,
          x,
          y,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.23, 1, 0.32, 1]
        }}
        width="100"
        height="100"
      >
        <rect
          width={width}
          height="4"
          fill="rgba(255,255,255,0.1)"
        />
      </motion.svg>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <motion.div 
        className="relative w-full h-96 bg-gradient-to-r from-blue-600 to-blue-400 overflow-hidden cursor-default"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="relative z-10 max-w-3xl mx-auto px-10 py-10 text-white"
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
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-lg transition-colors duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Contact Us ›
          </motion.a>
        </motion.div>
        
        <div className="absolute inset-0">
          {elements.map((element, index) => (
            <DecorativeElement
              key={index}
              position={element}
              width={element.width}
              delay={element.delay}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedBanner;