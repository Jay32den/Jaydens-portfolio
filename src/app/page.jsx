"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";



const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/J_Watercolor.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold text-center">
          Bridging Ideas and Execution
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
          Welcome to my digital canvas, I'm a front-end developer with a passion for crafting
             immersive digital experiences. I specialize in transforming innovative designs into
             responsive and user-friendly websites that leave a lasting impact on users.
          </p>
          {/* BUTTONS */}
          
          <div className="w-full flex gap-4">
            <Link href= "/projects">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              View Projects
            </button>
            </Link>
            <Link href="/contact">
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
            </Link>
            <a href="/JaydenSiskResume (1).pdf" download={"Jayden Sisk Resume"}>
            <button className="p-4 rounded-lg ring-1 ring-black">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;