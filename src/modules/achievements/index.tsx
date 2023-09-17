import React from 'react'
import { Circle, Wave } from '@/assets'
import { AchievementsCard } from '@/components';

const AchievementsModule = () => {
  return (
    <div className="relative bg-gradient-primary-50 h-[836px] sm:h-[561px] md:h-[580px] lg:h-[561px]">
      <div className="absolute top-10 left-10">
        <Circle />
      </div>
      <div className="absolute right-0 top-[94px] md:top-[70px]">
        <Wave />
      </div>
      <section className="max-w-7xl mx-auto pt-[56px] px-[24px] md:px-[80px] md:pt-[80px]">
        <h2 className='text-2xl-medium text-gray-900 lg:text-6xl-medium'>
            We are passionate about helping businesses grow and succeed in the digital age. We take pride in our work and strive to exceed your expectations every time.
        </h2>
        <AchievementsCard />      
      </section>
    </div>
  );
}

export default AchievementsModule