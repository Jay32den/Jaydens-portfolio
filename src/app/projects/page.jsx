"use client"
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const items = [
    {
      id: 1,
      color: "from-blue-300 to-yellow-300",
      title: "Schedule/Calender App",
      desc: "A fully responsive and intuitive calendar scheduling app built with Next.js, TypeScript, and Tailwind CSS. This app allows users to effortlessly manage events, schedule appointments, and organize tasks in a clean, user-friendly interface.",
      img: "/Screenshot (161).png",
      link: 'https://schedule-calender-app.vercel.app/',
      technologies: ['Next.js','TailwindCSS'],
      sourceCode: 'https://github.com/Jay32den/Schedule-Calender-App'
    },
    {
        id: 2,
        color: "from-red-300 to-blue-300",
        title: "CFS Tattoo",
        desc: "Currently manage and maintain a WordPress website that attracts daily visitors, ensuring consistent performance and user engagement. Regularly update and enhance the site with new features, content, and optimizations to meet evolving user needs and improve overall functionality.",
        img: "/CFS-Tattoo-Screenshot.png",
        link: 'https://cfstattoo.com/',
        technologies: ['WordPress', 'ShortCode']
    },
    {
      id: 3,
      color: "from-red-300 to-blue-300",
      title: "React Commerce",
      desc: "Establish a premium shopping site offering handcrafted skateboard obstacles meticulously crafted from metal, with precision welding, and made accessible to customers nationwide, leveraging React.JS, Node.JS, and CSS.",
      img: "/MattfbHome.png",
      link: 'https://skateboard-obsticle-website.vercel.app/',
      technologies: ['React.js', 'Node.js', 'CSS'],
      sourceCode: 'https://github.com/Jay32den/Skateboard-Obsticle-Website'
    },
    {
        id: 4,
        color: "from-blue-300 to-violet-300",
        title: "React.JS Portfolio",
        desc: "Showcase my professional skills, achievements, and work portfolio through a meticulously designed platform developed using Next.JS, React.JS, and Tailwind CSS.",
        img: "/Portfolio.png",
        link: "https://jaydensiskportfolio.vercel.app/",
        technologies: ['React.js', 'Tailwind CSS'],
        sourceCode: 'https://github.com/Jay32den/Portfolio-React.JS'
      },
    {
      id: 5,
      color: "from-blue-300 to-violet-300",
      title: "Skateboarding Trick Generator",
      desc: "Developed a skateboarding trick generator using vanilla JavaScript, HTML, and CSS as part of my passion for skateboarding. This interactive application provides exciting trick ideas, making it a fun and engaging tool for skaters.",
      img: "/Screenshot (160).png",
      link: "https://skateboarding-trick-generator.vercel.app/",
      technologies: ['HTML', 'CSS', 'JavaScript'],
      sourceCode: 'https://github.com/Jay32den/skate-trick-generator'
    },
    {
      id: 6,
      color: "from-violet-300 to-purple-300",
      title: "Google Clone",
      desc: "Replicate the functionalities of the Google search engine through the implementation of a comprehensive clone using MongoDB, Node.js, React.JS, and Express.JS.",
      img: "/GoogleHome.png",
      link: 'https://google-clone-azure-tau.vercel.app/',
      technologies: ['MongoDB', 'Node.js', 'React.js', 'Express.js'],
      sourceCode: 'https://github.com/Jay32den/Google-clone'
    },
    {
      id: 7,
      color: "from-purple-300 to-red-300",
      title: "Chat App",
      desc: "Facilitating seamless communication by connecting individuals through shared chat room numbers or unique keywords,developed using React.JS, Firebase, and CSS.",
      img: "/ChatApp.png",
      link: 'https://chatroom-lovat-psi.vercel.app/',
      technologies: ['React.js', 'Firebase', 'CSS'],
      sourceCode: 'https://github.com/Jay32den/chatroom'
    },
    {
      id: 8,
      color: "from-red-300 to-orange-300",
      title: "Food Truck Template",
      desc: "Engineered a versatile template utilizing Vite and JSX, tailored specifically for food trucks and restaurants to showcase their schedules, menu offerings, and contact details with seamless functionality and aesthetic appeal.",
      img: "/Restaurant.png",
      link: 'https://restaurant-template-two.vercel.app/',
      technologies: ['Vite', 'JSX', 'CSS'],
      sourceCode: 'https://github.com/Jay32den/restaurant-template'
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-48 bg-gradient-to-r ${item.color} relative overflow-hidden`}>
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                  {item.sourceCode && (
                    <a
                        href={item.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-800 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                    >
                    Source Code
                    </a>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Projects;