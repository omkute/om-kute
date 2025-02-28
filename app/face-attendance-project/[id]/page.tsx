// import React from 'react';
// import Image from 'next/image';
// import {ChevronsLeftRightEllipsis, Github, Radio} from 'lucide-react'
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// function FaceAttedance() {
//   return (
//     <div className=' min-h-screen p-5 md:mt-[15vh] bg-background-900'>
//         <div className=' flex p-5 justify-between items-cente rounded-xl'>
//             <div className=' w-1/2 flex justify-center flex-col'>
//                 <h3 className=' text-red-400 text-xl font-semibold'>{project.name}</h3>
//                 <p className=' text-gray-400 text-lg'>{project.description}</p>
//                 <div className=' flex gap-3 mt-3 '>
//                    <Link href={project.livelink}>
//                     <Button className=' shadow-md shadow-white'>
//                             <Radio/>
//                             <span>Preview</span>
//                         </Button>
//                    </Link>
//                    <Link href={project.githublink}>
//                     <Button>
//                             <Github/>
//                             <span>Github</span>
//                         </Button>
//                    </Link>

//                 </div>
//             </div>
//             <div className=' w-1/2 '>
//                 <Image
//                     src={`/images/${project.image}`}
//                     alt="Face Recognition"
//                     width={200}
//                     height={350}
//                     className="rounded-xl mx-auto"
//                 />
//             </div>
//         </div>
//         <hr className=' my-2 border-white/20  ' />
//         <div>
//             {project.features.map((feature, index) => (

//                 <div className=' flex gap-3 flex-wrap '>
//                     <div key={index} className='bg-white/20 rounded-2xl text-sm text-white flex justify-between items-center gap-1 p-2' >
//                             <p>{feature}</p>
//                             <ChevronsLeftRightEllipsis/>
//                     </div>
//                     <div className='bg-white/20 rounded-2xl text-sm text-white flex justify-between items-center gap-1 p-2' >
//                             <p>Next.js</p>
//                             <ChevronsLeftRightEllipsis/>
//                     </div>
//                     <div className='bg-white/20 rounded-2xl text-sm text-white flex justify-between items-center gap-1 p-2' >
//                             <p>Next.js</p>
//                             <ChevronsLeftRightEllipsis/>
//                     </div>
//                     <div className='bg-white/20 rounded-2xl text-sm text-white flex justify-between items-center gap-1 p-2' >
//                             <p>Next.js</p>
//                             <ChevronsLeftRightEllipsis/>
//                     </div>

                
//            </div>
//         ))}
//         </div>
//         <hr className=' my-2 border-white/20  ' />
//         <div className=' text-white'>
//             <h3 className=' text-xl  font-semibold'> About this projct</h3>
//             <p>{project.ddescription}</p>

//         </div>
//     </div>
//   )
// }

// export default FaceAttedance