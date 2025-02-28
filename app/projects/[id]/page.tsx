import { projects } from '@/data/projectData'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import {ChevronsLeftRightEllipsis, Github, Radio} from 'lucide-react'
import { Button } from '@/components/ui/button';
import Link from 'next/link';


interface Project {
    id: string;
    name: string;
    description: string;
    livelink: string;
    githublink: string;
    image: string;
    features: Array<{ name: string }>;
  }

  interface PageProps {
    params: {
        id: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
}

export default function ProjectPage(
    { params }: { params: { id: string } }) {

    
    const project = projects.find(p => p.id === params.id) as Project || undefined

  if (!project) {
    notFound()
  }

  return (
    <div className=' min-h-screen p-5 md:mt-[15vh] bg-background-900'>
        <div className=' flex p-5 justify-between items-cente rounded-xl'>
            <div className=' w-1/2 flex justify-center flex-col'>
                <h3 className=' text-red-400 text-xl font-semibold'>{project.name}</h3>
                <p className=' text-gray-400 text-lg'>{project.description}</p>
                <div className=' flex gap-3 mt-3 '>
                   <Link href={project.livelink}>
                    <Button className=' shadow-md shadow-white'>
                            <Radio/>
                            <span>Preview</span>
                        </Button>
                   </Link>
                   <Link href={project.githublink}>
                    <Button className='shadow-md shadow-white'>
                            <Github/>
                            <span>Github</span>
                        </Button>
                   </Link>

                </div>
            </div>
            <div className=' w-1/2 '>
                <Image
                    src={`/images/${project.image}`}
                    alt={String(project.image)}
                    width={200}
                    height={350}
                    className="rounded-xl mx-auto"
                />
            </div>
        </div>
        <hr className=' my-2 border-white/20  ' />
        <div>

                <div  className='  flex flex-row gap-3 flex-wrap '>
            {project.features.map((feature, index) => (
                    <div key={index} className='bg-white/20 rounded-2xl text-sm text-white flex justify-between items-center gap-1 p-2' >
                            <p>{feature.name}</p>
                            <ChevronsLeftRightEllipsis/>
                    </div>
        ))}
           </div>
        </div>
        <hr className=' my-2 border-white/20  ' />
        <div className=' text-white'>
            <h3 className=' text-xl  font-semibold'> About this projct</h3>
            <p>{project.ddescription}</p>

        </div>
    </div>
  )
}
