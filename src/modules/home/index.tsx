import React from 'react'
import Button from '@/components/button'
import { RightIconButton } from "@/assets";
import { cn } from '@/lib/utils';

const HomeModule = () => {
  return (
    <div className={cn("w-full h-[1120px] bg-secondary-900 pt-36")}>
      <div className={cn("w-[262px] h-[34px] flex justify-center mx-auto bg-gray-transparent text-white rounded-full md:w-[351px] md:h-[44px]")}>
        <p className={cn("flex items-center justify-center px-[12px] py-[8px] overline-sm md:overline-md md:px-[16px] md:py-[12px]")}>NUMBER ONE CREATIVE DIGITAL AGENCY</p>
      </div>
    </div>
  );
}

export default HomeModule