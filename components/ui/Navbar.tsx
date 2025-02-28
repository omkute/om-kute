"use client"
import { Pause, Play } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";


const NavbarItems = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Projects',
        href: '#projects'
    },
    {
        name: 'About',
        href: '/'
    },
    {
        name: 'Resume',
        href: '/'
    },
    {
        name: 'Contact me',
        href: '/'
    }
]

function Navbar() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [audio] = useState(typeof Audio !== "undefined" ? new Audio("/music/Together Forever.mp3") : null)

    useEffect(() => {
        if (audio) {
            audio.loop = true
        }
        return () => {
            if (audio) {
                audio.pause()
            }
        }
    }, [audio])

    const handlePlay = () => {
        if (audio) {
            if (isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <motion.nav
            className=' hidden  md:fixed top-10 md:left-0 right-0 mx-auto md:w-fit  flex-col  md:flex md:flex-row items-center justify-center md:h-12 md:rounded-full bg-[#EDEBEB] text-black z-20 shadow-md shadow-black font-montserrat gap-y-2 border-2'
            initial={{ opacity:0, y:-50 }}
            animate={{ opacity:1, y:0, scale:1 }}
            transition={{ duration:0.8 }}

         >
            <div className='ml-3 cursor-pointer text-green-500 '>
            { isPlaying ?  <Pause  onClick={handlePlay} /> : <Play  onClick={handlePlay} />}
            </div>
            {NavbarItems.map((item,index)=>(
            <Link className='hover:scale-110 hover:bg-white rounded-full p-2 transition-transform duration-200' key={index} href={item.href}>
                <span>{item.name}</span>
            </Link>
            ))}
            
        </motion.nav>
    )
}

export default Navbar