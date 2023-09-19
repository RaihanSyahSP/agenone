import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
    id: number
    testimonial: string
    name: string
    position: string
    avatarPath: string
}

const TestimonialCard = ({id, testimonial, name, position, avatarPath}: TestimonialCardProps) => {
  return (
    <div className={
      cn(
        "max-w-sm mx-auto rounded-3xl bg-gray-50 text-gray-500 animate-infinite-scroll",
        "hover:bg-gradient-primary-500 hover:text-white hover:cursor-pointer",
        "md:max-w-md xl:w-[508px] lg:h-[256px]"
      )
    }>
      <div className="mx-auto flex flex-col gap-6 p-[24px] md:gap-4 lg:p-[20px] xl:p-[24px]">
        <h3 className="text-md-regular lg:text-xl-regular">{testimonial}</h3>
        <div className="flex gap-2 items-center lg:gap-3 ">
          <Image src={avatarPath} alt="avatar" width={72} height={72} />
          <div className="flex flex-col gap-1">
            <h4 className="text-md-bold lg:text-xl-semibold">{name}</h4>
            <p className="text-sm-regular lg:text-md-regular">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard