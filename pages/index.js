import Image from 'next/image'

import { BsMoonStarsFill } from "react-icons/bs"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/Ai"
import vector from "../public/dev-ed-wave.png"
import elon_img from "../public/elon.jpg"
import design from "../public/design.png"
import Cards from './components/Cards'




export default function Home() {
  return (
    <div>

      <title>Om Kute</title>
      <main className="bg-white px-10 ">
        <section className="  h-screen">
          {/* navbar */}
          <nav className="py-10 mb-12 flex justify-between">



            <h1 className="text-xl font-burton">portfolio</h1>
            <ul className="flex items-center ">
              <li className="px-3">
                <BsMoonStarsFill className="cursor-pointer" />
              </li>
              <li><a href="#" className="bg-gradient-to-r  from-cyan-500 to-teal-500 p-2 rounded text-white text-md ml-6">resume</a></li>
            </ul>
          </nav>

          <div>
            <div className=" text-center p-10 ">
              {/* flex div for md */}
              <div className=" md:flex items-center ">
                {/* banner image */}
                <Image
                  src={vector}
                  className="block"
                />
                <div className="icon_info pt-9">



                  {/* TODo-make h2 graditent like apple */}
                  <div className="div2">
                    <h2 className="text-5xl text-cyan-500">Om Santosh Kute</h2>
                    <h3 className="text-2xl text" >A Engineering Student studying Computer Science</h3>
                    <p className="text-md py-5 text-gray-800">
                      Hey, I am Computer Science Student ,Studiying at
                      Anuradha Engineering College.
                      Currently I am Learning web development and java along with DSA
                    </p>
                  </div>
                  {/* Socila Icons */}
                  <div className="flex text-5xl justify-center gap-x-7">
                    <AiFillTwitterCircle />
                    <AiFillLinkedin />
                    <AiFillYoutube />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 Cards */}
          <section className=''>
            <h3 className='text-center pt-6 font-bold text-xl' >Projects</h3>
            <div className=" md:flex-5 sm:flex ">
              <Cards className="md:px-5" />
              <Cards className="md:px-5" />
              <Cards className="md:px-5" />
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
