import Image from "next/image";
import React, { useEffect } from "react";
// import { useTheme } from "next-theme";
import Link from "next/link";
// import { BsMoonStarsFill } from "react-icons/bs";
// import { BiSun } from "react-icons/bi";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import vector from "../public/dev-ed-wave.png";
import Card from "./components/Card";


export default function Home() {
  
  const dark = () => {
    alert(
      "working on dark mode >toggler but dark/light mode will work with you system dark/light mode"
    );
  };

  return (
    <div>
      <title>Om Kute</title>
     
      <main className="bg-white dark:bg-black   ">
        <section className=" h-screen">
          {/* navbar */}
          <nav className="py-10 mb-12 flex justify-between px-2 md:px-6">
            <h1 className="text-xl font-burton dark:text-white">portfolio</h1>
            <ul className="flex items-center ">
              <li className="px-3">
                
                {/* <BiSun className='moon text-black dark:text-white'/> */}
              </li>
              <li>
                <a
                  href="tel:90224616660"
                  className="bg-gradient-to-r  from-cyan-500 to-teal-500 p-2 rounded text-white text-md ml-6"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="dark:bg-black mx-7 rounded-xl">
            <div className=" text-center p-10 md:p-0 mb-3">
              {/* flex div for md */}
              <div className=" md:flex items-center ">
                {/* banner image */}
                <Image src={vector} className="block" alt="banner" />
                <div className="icon_info pt-10">
                  {/* TODo-make h2 graditent like apple */}
                  <div className="div2 dark:bg-black  ">
                    <h2 className="text-5xl text-cyan-500 pb-5 font-extrabold">
                      Hi, I'm Om Kute
                    </h2>
                    <h3 className="text-2xl text dark:text-white ">
                      A Engineering Student studying Computer Science
                    </h3>
                    <p className="text-md dark:text-white py-5 text-gray-800 block">
                      Hey, I am Computer Science Student ,Studiying at Anuradha
                      Engineering College. Currently I am Learning web
                      development and React-Native.
                    </p>
                  </div>
                  {/* Socila Icons */}
                  <div className="dark:bg-black bg-white flex text-5xl justify-center gap-x-7">
                    <Link href="https://twitter.com/OmKute12" passHref={true}>
                      <AiFillTwitterCircle className="dark:text-white cursor-pointer hover:bg-blue-300 rounded-full " />
                    </Link>

                    <Link
                      href="https://www.linkedin.com/in/om-kute-a97014196/"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin className="dark:text-white cursor-pointer hover:bg-blue-800 rounded-md" />
                    </Link>
                    <Link href="https://www.youtube.com/channel/UC_2DelxRgR37i0-EyyKMBTg/featured">
                      <AiFillYoutube className="dark:text-white cursor-pointer hover:bg-red-500 rounded-md" />
                    </Link>
                    <Link href="https://github.com/omkute">
                      <AiFillGithub className="dark:text-white cursor-pointer hover:bg-gray-500 rounded-md" />
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 Cards */}
          <section className="">
            <h3 className="text-center center font-bold text-xl dark:text-cyan-300 dark:bg-black">
              Projects
            </h3>
            <div className=" md:flex-5 sm:flex dark:bg-black">
              <Card
              projectName="Todo App"
              projectDescription=" A todo application that is used to make todo task's, the todos are stored on cloud. This App has clean and userfriendly UI "
              tags=" Nextjs Javascript MongoDB Rest-API"
             
              />
              <Card
              projectName="Todo App"
              projectDescription=" A todo application that is used to make todo task's, the todos are stored on cloud. This App has clean and userfriendly UI "
              tags=" Nextjs Javascript MongoDB Rest-API"
             
              />
              <Card
              projectName="Todo App"
              projectDescription=" A todo application that is used to make todo task's, the todos are stored on cloud. This App has clean and userfriendly UI "
              tags=" Nextjs Javascript MongoDB Rest-API"
             
              />
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
