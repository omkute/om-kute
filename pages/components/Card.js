import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

// import { MdOutlineArrowOutward } from "react-icons/md";
// import { MdOutlineArrowOutward } from "react-icons/md";

function Card({ projectName, projectDescription, tags }) {
     const splitSentence =(tags)=>{
         return tags
         .trim()                         // Remove leading/trailing spaces
         .toLowerCase()                  // Convert to lowercase
         .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") // Remove punctuation
         .split(/\s+/)                  // Split by one or more spaces
         .filter(word => word.length > 0);
     }
  return (
    <div className=" grid-cols-3 sm:cols-2 m-2 border-2 dark:border-white rounded-xl">
      <Image
        src="/portfolioBanner.png"
        height="300"
        width="600"
        className=" mx-auto rounded-lg"
      />
      <div className=" p-4">
        <p className=" text-white text-xl ">{projectName}</p>
        <p className=" dark:text-slate-300 text-sm ">{projectDescription}</p>
      </div>
      <div className=" dark:text-white p-4">{}</div>
      {/* Link */}
      <div className=" flex justify-between p-4">
        {/* Github */}
        <Link
          href="/"
          className="bg-white p-3 rounded-xl flex items-center space-x-3"
        >
          <div className=" dark:bg-white bg-gray-300 rounded-xl flex  items-center p-3 space-x-3 cursor-pointer">
            <Image src="/github.svg" className=" fill-white" width={15} height={13} />
            <p >Github</p>
          </div>
        </Link>
        {/* Live Link  */}
        <Link
          href="https://om-kute.vercel.app/"
          target="_blank"
          className="bg-white p-3 rounded-xl flex items-center space-x-3"
        >
          <div className=" bg-gray-300 dark:bg-white rounded-xl flex  items-center p-3 space-x-3 cursor-pointer">
            <p className="px-3" >Live-link</p>
            <Image src="/live.svg" className=" mx-3" width={15} height={15} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
