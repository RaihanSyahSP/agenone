import { Accordion } from '@/components';
import React from 'react'

const ServiceModul = () => {
  return (
    <div className="w-full h-auto px-[24px] bg-white text-center md:h-auto md:mb-[100px]">
      <div className="mt-[56px] md:mt-[100px]">
        <h1 className="text-secondary-900 text-5xl-bold md:display-lg-bold ">
          The Service We Offer <span className="clip-text-gradient">For You</span>
        </h1>
      </div>
      <div>
        <Accordion />
      </div>
    </div>
  );
}

export default ServiceModul