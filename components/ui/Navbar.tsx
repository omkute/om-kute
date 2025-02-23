"use client"
import { Pause, Play } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const NavbarItems = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Projects',
        href: '/'
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
        <nav className='fixed top-12 left-0 right-0 mx-auto w-fit flex items-center justify-center h-10 rounded-full bg-[#EDEBEB] text-black z-10 shadow-md shadow-green-500 font-montserrat gap-y-2 border-2  border-green-500'>
            <div className='ml-3 cursor-pointer'>
            { isPlaying ?  <Pause onClick={handlePlay} /> : <Play  onClick={handlePlay} />}
            </div>
            {NavbarItems.map((item,index)=>(
            <Link className='hover:scale-110 hover:bg-white rounded-full p-2 transition-transform duration-200' key={index} href={item.href}>
                <span>{item.name}</span>
            </Link>
            ))}
        </nav>
    )
}

export default Navbar