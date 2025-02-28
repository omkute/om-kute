import React from 'react'
import { HiMenuAlt3 } from "react-icons/hi";

function MobileMenu({ nav }: { nav: React.ReactNode }) {
    const [ menu, setMenu ] = React.useState(false)
    const handlemenu = () => {
        setMenu(!menu)
    }
  return (
    <div className='md:hidden'>
        <HiMenuAlt3 onClick={handlemenu} className="md:hidden text-black p-1 rounded-3xl bg-white/50 absolute top-1 h-12 w-12 border-2 right-5" />
        <div className={`${menu ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
            {nav}
        </div>
    </div>
  )
}

export default MobileMenu