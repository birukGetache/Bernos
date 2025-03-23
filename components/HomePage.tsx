import { motion } from "framer-motion";

const HomePage = () =>{
    return(
        <div className=" relative top-[60px]   w-[100%] flex-col z-10 flex h-[calc(100vh-60px)] px-60 justify-center items-center">
           <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      whileInView={{ scale: 1 }} // Trigger scale to 1 when in view
      exit={{ scale: 0 }} // Return to scale 0 when out of view
      viewport={{ once: false, amount: 0.1 }} // Trigger the animation when 10% of the element is in view
    >
      <p className="text-2xl text-amber-400">Bernos system Technology</p>
      <p className="text-[90px] font-bold text-nowrap">transform your </p>
      <p className="text-[90px] font-bold text-nowrap">
        Tech <span className="bg-[#222] px-6 rounded-full text-amber-400">Today</span>
      </p>
    </motion.div>
  <div className="h-32 w-32 my-14 relative flex items-center justify-center">
      {/* Static "g" in the center */}
      <span className="text-4xl font-bold absolute">
      <svg
        fill="#DF6D14"
        width="64px"
        height="64px"
        viewBox="0 0 512 512"
        style={{
          shapeRendering: "geometricPrecision",
          textRendering: "geometricPrecision",
          fillRule: "evenodd",
          clipRule: "evenodd",
        }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g id="SVGRepo_iconCarrier">
          <g id="Layer_x0020_1">
            <path
              fill="#DF6D14"
              fillRule="nonzero"
              d="M437 75c-50,-50 -115,-75 -181,-75 -66,0 -131,25 -181,75 -50,50 -75,115 -75,181 0,66 25,131 75,181 50,50 115,75 181,75 66,0 131,-25 181,-75 50,-50 75,-115 75,-181 0,-66 -25,-131 -75,-181zm-181 -63c63,0 125,23 173,71 48,48 71,110 71,173 0,63 -23,125 -71,173 -48,48 -110,71 -173,71 -63,0 -125,-23 -173,-71 -48,-48 -71,-110 -71,-173 0,-63 23,-125 71,-173 48,-48 110,-71 173,-71z"
            ></path>
            <path
              fill="#DF6D14"
              fillRule="nonzero"
              d="M220 367c-3,0 -6,3 -6,6 0,3 3,6 6,6l153 0c3,0 6,-3 6,-6 0,0 0,0 0,-1l0 -152c0,-3 -3,-6 -6,-6 -3,0 -6,3 -6,6l0 147 -147 0z"
            ></path>
            <path
              fill="#f9be17"
              fillRule="nonzero"
              d="M369 377c2,2 6,2 8,0 2,-2 2,-6 0,-8l-234 -234c-2,-2 -6,-2 -8,0 -2,2 -2,6 0,8l234 234z"
            ></path>
          </g>
        </g>
      </svg>
    </span>
      {/* Rotating curved text */}
      <motion.svg
        width="140"
        height="140"
        viewBox="0 0 140 140"
        className="absolute"
        animate={{ rotate: -360 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformOrigin: "50% 50%" }}
        // Rotate around the center
      >
        <defs>
          <path
            id="circlePath"
            d="M 70,70 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
          />
        </defs>
        <text fontSize="25" fontWeight="bold" fill="#ddd">
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            Discover More Bernos
          </textPath>
        </text>
      </motion.svg>
    </div>
        </div>
    )
}

export default HomePage;