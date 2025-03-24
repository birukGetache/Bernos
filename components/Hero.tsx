import { FaLocationArrow, FaShieldAlt, FaRobot, FaCloud, FaCode, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";

import dynamic from "next/dynamic";

const TextGenerateEffect = dynamic(
  () => import("./ui/TextGenerateEffect")
    .then((mod) => mod.TextGenerateEffect),
  { 
    ssr: false,
    loading: () => <div className="w-full h-12 bg-transparent" />
  }
);


const Hero = () => {
  // Animation variants for bouncing icons
  const bounceVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="pb-20 pt-36 overflow-hidden">
      {/* Background Spotlights */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Animated Grid Background */}
      <div className="h-screen w-screen dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0">
        <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Bouncing Service Icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="absolute left-10 top-1/4"
          variants={bounceVariants}
          animate="animate"
        >
          <FaRobot className="text-4xl text-blue-500" />
        </motion.div>
        <motion.div 
          className="absolute right-20 top-1/3"
          variants={bounceVariants}
          animate="animate"
          style={{ animationDelay: "0.3s" }}
        >
          <FaShieldAlt className="text-4xl text-purple-500" />
        </motion.div>
        <motion.div 
          className="absolute left-1/4 bottom-1/3"
          variants={bounceVariants}
          animate="animate"
          style={{ animationDelay: "0.6s" }}
        >
          <FaCloud className="text-4xl text-green-500" />
        </motion.div>
        <motion.div 
          className="absolute right-1/4 bottom-1/4"
          variants={bounceVariants}
          animate="animate"
          style={{ animationDelay: "0.9s" }}
        >
          <FaCode className="text-4xl text-yellow-500" />
        </motion.div>
        <motion.div 
          className="absolute left-1/2 top-1/2"
          variants={bounceVariants}
          animate="animate"
          style={{ animationDelay: "1.2s" }}
        >
          <FaMobileAlt className="text-4xl text-red-500" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            INNOVATIVE TECH SOLUTIONS
          </p>

          <TextGenerateEffect
            words="Empowering Businesses with Cutting-Edge Technology"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            We specialize in AI development, cybersecurity, SaaS platforms, and digital transformation.
          </p>

          <div className="flex gap-4">
            <a href="#services">
              <MagicButton
                title="Our Services"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="#contact">
              <MagicButton
                title="Get in Touch"
                 icon={<FaLocationArrow />}
                position="right"
      
              />
            </a>
          </div>
        </div>
      </div>

      {/* Company Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto z-10 relative">
        {[
          { value: "50+", label: "Projects Completed" },
          { value: "24/7", label: "Support" },
          { value: "100%", label: "Client Satisfaction" },
          { value: "10+", label: "Technologies" }
        ].map((stat, index) => (
          <motion.div 
            key={index}
            className="bg-black-200 p-4 rounded-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold">{stat.value}</h3>
            <p className="text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;