"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/projects", title: "Projects" },
    { url: "/contact", title: "Contact" },
    // { url: "/extra", title: "Extra"},
  ];

const Navbar = () => {
    const [open,setOpen] = useState(false);
      
        // HAMBURGER ICON
        const topVariants = {
          closed: {
            rotate: 0,
          },
          opened: {
            rotate: 45,
            backgroundColor: "white",
          },
        };
        const centerVariants = {
          closed: {
            opacity: 1,
          },
          opened: {
            opacity: 0,
          },
        };
      
        const bottomVariants = {
          closed: {
            rotate: 0,
          },
          opened: {
            rotate: -45,
            backgroundColor: "white",
          },
        };
      
        const listVariants = {
          closed: {
            x: "100vw",
          },
          opened: {
            x: 0,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.2,
            },
          },
        };
      
        const listItemVariants = {
          closed: {
            x: -10,
            opacity: 0,
          },
          opened: {
            x: 0,
            opacity: 1,
          },
        };


  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
       {/* LINKS */}
       <div className="hidden md:flex gap-4 w-1/3">
       {links.map(link => (
        <NavLink link={link} key={link.title}/>
       ))}
       </div>

       {/* LOGO */}
       <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
        >

        <h1 className="text-xl1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-gray-800">
          Jayden Sisk
        </h1>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href="https://github.com/Jay32den">
        <Image src='/github.png' alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/jayden-sisk-b1674a256/">
        <Image src='/linkedin.png' alt="" width={24} height={24} />
        </Link>    
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
      {/*MENU BUTTON*/}
      <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};


export default Navbar