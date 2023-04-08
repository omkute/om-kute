import React from "react";
import Image from "next/image";
import design from "../../public/tindog.png";

function Cards() {
  return (
    <div className=" bg-white dark:bg-black">
      
      {/* Cards */}
      <div className="pb-9 px-5 py-8 r" >
        <div href="#" className=" cursor-pointer text-center shadow-xl rounded-xl py-4 bg-white dark:bg-slate-800 dark:text-stone-50 hover:bg-slate-700">
          <Image className="rounded-lg" alt="img" src={design} height="400px" width="350px" />
          <h3 className="my-10 font-medium p-t8">Tindog website</h3>
          <a className="text-blue-500 text-lg"                       target={"_blank"}
 href="https://omkute.github.io/TinDog/">Link to live site</a>
          <p className="py-2 sm: px-4">
            This is project from web development bootcamp
          </p>
          <h4 className=" block py-4 text-cyan-600 font-bold  sm: px-4">
            Programming Languages 
          </h4>
          <p className="py-1 dark:text-stone-50 text-gray-800">Html</p>
          <p className="py-1 dark:text-stone-50 text-gray-800">CSS</p>
          {/* <p className="py-1 dark:text-stone-50 text-gray-800">Javascript</p> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
