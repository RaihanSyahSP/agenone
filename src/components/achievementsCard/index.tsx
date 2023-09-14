import { cn } from '@/lib/utils';
import React from 'react'

interface AchievementsProps {
    number: string;
    title: string;
}

const contents = [
    {
        number: "10+",
        title: "Years of Experience",
    },
    {
        number: "666+",
        title: "Projects Completed",
    },
    {
        number: "555+",
        title: "Satisfied Clients",
    },
    {
        number: "10+",
        title: "Awards Achieved",
    }
]

const AchievementsItem = ({number, title}: AchievementsProps) => {
    return (
        <div className='w-full flex flex-col my-auto text-center gap-[12px] md:gap-[8px] lg:h-[76px]'>
            <h3 className={
                cn(
                    "display-sm-bold text-white",
                    "sm:text-4xl-bold md:text-6xl-bold lg:display-lg-bold"
                )
            }>
                {number}
            </h3>
            <h4 className={
                cn(
                    "text-md-regular text-white",
                    "sm:text-xs-medium md:text-md-medium lg:text-xl-regular"
                )
            }>
                {title}
            </h4>
        </div>
    )
}


const AchievementsCard = () => {
    return (
        <div className={
            cn(
                "grid grid-cols-1 gap-[10px] h-[468px] py-[24px] mt-[32px] w-full bg-gradient-primary-500 rounded-[20px]",
                "sm:grid-cols-2 sm:p-[24px] sm:h-[204px] sm:mt-[64px] gap-[8px]",
                "md:grid-cols-4 md:p-[38px] md:h-[191px] md:mt-[64px] gap-[9px]",
                "lg:grid-cols-4 lg:p-[32px] lg:h-[181px] lg:mt-[64px] gap-[10px]"
            )
        }>
        {contents.map((item, index) => (
            <AchievementsItem key={index} number={item.number} title={item.title} />
        ))}
    </div>
  )
}

export default AchievementsCard