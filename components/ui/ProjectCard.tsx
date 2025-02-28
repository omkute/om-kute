import React from 'react'
import {motion} from 'framer-motion'
import { Database, Frame } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


interface ProjectCardProps {
  id: string;
  name: string;  // Changed from projectName
  description: string;  // Changed from projectDescription
  features: string[];  // Changed from projectFeatures
  image: string;
}
const iconMap={
    Database: Database,
    Frame: Frame,
    tailwind: Frame,
    icon1: Frame,
    icon2: Frame,
    icon3: Frame
}

export default function ProjectCard({ id, name, description, features, image }: ProjectCardProps) {
  return (
      <div className=' md:min-w-[30%]'>
       
       <Link className=' cursor-pointer' key={id} href={`/projects/${id}`}>
       <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl min-h-[75vh] flex flex-col justify-between"
            >
                <div>
                    <Image
                        src={`/images/${image}`}
                        alt="Face Recognition"
                        width={400}
                        height={350}
                        quality={100}
                        priority
                        className="rounded-xl w-[100%]"
                    />
                </div>
            <div>
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{name}</h3>
                    <p className="text-gray-100 mb-4">
                        {description}
                    </p>
                </div>
                <div className="flex gap-3 flex-wrap ">
                    {features.map((feature, index) => (

                        <span key={index} className="px-3 py-1 bg-white/20 rounded-full text-sm text-white flex justify-between items-center gap-1 ">
                            {React.createElement(iconMap[feature] || Frame, { className: "text-blue-500" })}
                            <span>{feature}</span>
                        </span>
                        ))}
                </div>
            </div>
            </motion.div>
       </Link>
    </div>
  )
}
