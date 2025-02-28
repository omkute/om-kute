import React from 'react'
import * as Ri from 'react-icons/ri'
import * as Si from 'react-icons/si'
import * as Fa from 'react-icons/fa'
import * as Di from 'react-icons/di'
import * as Ai from 'react-icons/ai'


interface SkillsProps {
    iconName: string;
    iconPackage: 'ri' | 'si' | 'fa' | 'di' | 'ai';  // Add more as needed
    name: string;
    iconStyling: string;
}

function Skills({
    iconName,
    iconPackage = 'ri',  // default to ri icons
    name,
    iconStyling
}: SkillsProps) {
    // Select the icon package
    const Icons = {
        di: Di,
        ri: Ri,
        si: Si,
        fa: Fa,
        ai:Ai
    }[iconPackage];

    const IconComponent = Icons[iconName as keyof typeof Icons];

    if(!IconComponent) {
        console.warn(`Icon ${iconName} not found in package ${iconPackage}`);
        return null;
    }

    return (
        <div className='flex gap-3 items-center bg-slate-100/30 cursor-pointer p-2 w-fit rounded-2xl'>
            <IconComponent className={`${iconStyling} h-6 w-6`} />
            <p className='text-white'>{name || "Icon"}</p>
        </div>
    )
}

export default Skills