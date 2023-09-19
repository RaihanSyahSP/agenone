import React from 'react'
import Image from 'next/image'

interface TestimonialCardProps {
    id: number
    testimonial: string
    name: string
    position: string
    avatarPath: string
}

const TestimonialCard = ({id, testimonial, name, position, avatarPath}: TestimonialCardProps) => {
  return (
    <div className="rounded-3xl bg-gray-50 text-gray-500 hover:bg-gradient-primary-500 hover:text-white hover:cursor-pointer lg:w-[508px] lg:h-[256px]">
      <div className="mx-auto flex flex-col gap-6 lg:p-[24px]">
        <h3 className="lg:text-xl-regular">{testimonial}</h3>
        <div className="flex lg:gap-3 items-center">
          <Image src={avatarPath} alt="avatar" width={72} height={72} />
          <div className="flex flex-col gap-1">
            <h4 className="lg:text-xl-semibold">{name}</h4>
            <p className="lg:text-md-regular">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard