"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projectData";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import Skills from "@/components/ui/Skills";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import MobileMenu from "@/components/ui/MobileMenu";



export default function Home() {

  const [copySuccess, setCopySuccess] = useState('copy');
  const [emblaRef] = useEmblaCarousel({ loop: false, align: 'start' }, [
    Autoplay({ delay: 3000 })
  ]);


  const handlehandleCopy = () => {
    navigator.clipboard.writeText("omkute636@gmail.com");
    setCopySuccess('Copied!');

  };


  const handleDownload = () => {
    // Replace this URL with your Google Drive file ID
    // const fileId = 'Je1NEthT';
    // const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const downloadUrl = "https://drive.google.com/drive/folders/1DkRyArAt9b7l2RYEwL4g9RP_Je1NEthT";
    
    // Create a temporary anchor element and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'OmKuteResume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // BackgroundGradient
  return (
    <section className=" p-4">
      <MobileMenu className="" />
      <div className="h-[95vh] items-center justify-center p-6 cursor-default bg-gradient-to-b from-purple-100 to-purple-600 rounded-3xl">
        <section className="md:flex items-center justify-between  max-w-7xl mx-auto h-full px-8 ">
          <motion.div
            className=" flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className=" text-gray-600 "> Hi, </span>
              <br />
              <p className="bg-white border-b-2 bg-clip-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
                text-transparent">
               {" I'm Om Santosh Kute"}
              </p>
            </h1>
            <motion.p
              className="text-xl lg:text-2xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A passionate full-stack developer specializing in building scalable web
              applications with modern technologies like Next.js, Express.js
            </motion.p>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-45"></div>
              <Image
                className="rounded-xl relative"
                src="/images/om.png"
                alt="Om Santosh Kute"
                width={400}
                height={500}
                priority
                quality={100}
              />
            </div>
          </motion.div>
        </section>
      </div>
       {/* About Section */}
       <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-blue-500 to-blue-600 md:p-4 rounded-3xl shadow-lg my-3"
        >
        <div className="max-w-7xl mx-auto ">
          <h2 className="p-3 text-center md:text-left md:p-8 text-4xl font-bold text-white mb-12 border-b pb-4">
            About Me
          </h2>
          <div className="p-4">
            <p className="text-lg text-white leading-relaxed">
              I am a full-stack developer specializing in building scalable web applications with modern technologies like Next.js, Express.js, and Tailwind CSS. I have a passion for learning and sharing my knowledge with others. I am always looking for new challenges and opportunities to grow as a developer.
            </p>
          </div>
          <div className=" flex flex-wrap gap-4 p-4">
            <Skills 
                iconName="RiNextjsFill" 
                iconPackage="ri" 
                name="Next.js" 
                iconStyling="text-black" 
            />
            <Skills 
                iconName="SiJavascript" 
                iconPackage="si" 
                name="JavaScript" 
                iconStyling="text-yellow-300" 
            />
            <Skills 
                iconName="RiTailwindCssFill" 
                iconPackage="ri" 
                name="Tailwind CSS" 
                iconStyling="text-teal-300" 
            />
            <Skills 
                iconName="SiExpress" 
                iconPackage="si" 
                name="Express.js" 
                iconStyling="text-red-500" 
            />
            <Skills 
                iconName="SiExpo" 
                iconPackage="si" 
                name="react native Expo" 
                iconStyling="text-gray-600" 
            />
            <Skills 
              iconName="FaReact"
              name="React"
              iconStyling=" text-teal-400"
              iconPackage="fa"
            />
            <Skills 
              iconName="DiMongodb"
              name="MongoDB"
              iconStyling=" text-green-800"
              iconPackage="di"
            />
            <Skills 
              iconName="AiFillApi"
              name="Rest API"
              iconStyling=" text-white"
              iconPackage="ai"
            />
            <Skills 
              iconName="SiPostman"
              name="Postman"
              iconStyling=" text-orange-400"
              iconPackage="si"
            />

          </div>
        </div>

        </motion.section>
      {/* Projects Section */}
        <motion.section 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="  md:p-0 min-h-[95vh] rounded-3xl bg-gradient-to-b from-pink-400 to-red-500 shadow-lg my-3"
      >
        <div className="max-w-7xl mx-auto ">
          <h2 className=" p-3 text-center md:text-left md:p-8 text-4xl font-bold text-white mb-12 border-b pb-4">
            Featured Projects
          </h2>
          <div className=" overflow-hidden p-4" ref={emblaRef}>

            <div className="flex   gap-4 ">
                {projects.map((project,index) => (
                  <div className=" flex-[0_0_100%] md:flex-[0_0_33.333%] " key={index}>

                  <ProjectCard 
                      id={project.id} 
                      name={project.name}
                      description={project.description}
                      features={project.features.slice(0,6).map((feature) => feature.name)}
                      image={project.image || ""}
                      />
                    </div>
                ))}
              </div>
            </div>
        </div>
      </motion.section>
      {/* Resume Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-purple-500 to-blue-500
 md:p-4 rounded-3xl shadow-lg my-3 px-2"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="p-3 text-center md:text-left md:p-8 text-4xl font-bold text-white mb-12 border-b pb-4">
            My Resume
          </h2>
        </div>
        <div className=" md:flex ">
           <div className=" flex-1">
              <Image
              src="/images/omkuteresume.png"
              alt="Om Santosh Kute Resume"
              width={400}
              height={500}
              className=" rounded-xl mx-auto  "
              />
            </div>
            <div className=" md:my-auto text-center flex-1 bg-white/20 p-2 my-5  rounded-xl ">
              <p className=" text-white text-lg text-left p-5">
              A comprehensive overview of my professional journey, skills, and accomplishments.
              This document showcases my expertise and experience in the field.
              </p>
              <Button className="my-4" onClick={handleDownload}>
                Download
                <Download className="h-6 w-6 ml-2" />
              </Button>
          </div>
        </div>
      </motion.section>
      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-green-600/70 to-green-300 md:p-4 rounded-3xl shadow-lg my-3"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="p-3 text-center md:text-left md:p-8 text-4xl font-bold text-white mb-12 border-b pb-4">
            Contact Me
          </h2>
          <div className="p-4">
            <p className="text-xl text-white leading-relaxed">
              If you have any questions or would like to work together, feel free to reach out to me. I am always looking for new opportunities to collaborate with others.
            </p>
          </div>
          <div className="flex items-center flex-wrap justify-center gap-4 p-4">
          <p
           className=" flex items-center gap-2 bg-slate-300/20 p-2 rounded-2xl" 
          >
            <MdOutlineEmail className="h-6 w-6 text-blue-300" />
            <span className="text-white">Email : omkute636@gmail.com</span>
           </p>
            <span className="text-white bg-white/20 p-2 rounded-xl cursor-pointer" onClick={handlehandleCopy}>{copySuccess}</span>
          </div>
          <div className="flex justify-center gap-4 p-4 flex flex-wrap">
           <a 
           target="_blank" 
           className=" flex items-center gap-2 bg-slate-300/20 p-2 rounded-2xl" 
           href="">
            <BsTwitter className="h-6 w-6 text-blue-400" />
            <span className="text-white">Twitter</span>
           </a>
           <a 
           target="_blank" 
           className=" flex items-center gap-2 bg-slate-300/20 p-2 rounded-2xl" 
           href="">
            <FaLinkedin className="h-6 w-6 text-blue-300" />
            <span className="text-white">LinkedIn</span>
           </a>
           <a 
           target="_blank" 
           className=" flex items-center gap-2 bg-slate-300/20 p-2 rounded-2xl" 
           href="">
            <FaInstagram className="h-6 w-6 text-red-600" />
            <span className="text-white">Instagram</span>
           </a>
           <a 
           target="_blank" 
           className=" flex items-center gap-2 bg-slate-300/20 p-2 rounded-2xl" 
           href="">
            <FaGithub className="h-6 w-6 text-black" />
            <span className="text-white">Github</span>
           </a>
          </  div>
        </div>
      </motion.section>   

     
    </section>

  );
}
