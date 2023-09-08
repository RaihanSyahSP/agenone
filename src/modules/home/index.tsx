import React from 'react'
import Button from '@/components/button'
import { RightIconButton } from "@/assets";
import { cn } from '@/lib/utils';

const HomeModule = () => {
  return (
    <div className={cn("w-full h-[1120px] bg-secondary-900 pt-36 bg-[url('/background.png')] bg-cover bg-center")}>
      <div
        className={cn('w-[262px] h-[34px] flex justify-center', 
                          'mx-auto bg-gray-transparent text-white rounded-full',
                          'md:w-[351px] md:h-[44px]')}
      >
        <p className={cn(`flex items-center justify-center px-[12px] py-[8px] overline-sm md:overline-md md:px-[16px] md:py-[12px]`)}>
          NUMBER ONE CREATIVE DIGITAL AGENCY
        </p>
      </div>
      <div className={cn(`pt-[12px] text-5xl-bold w-full px-2 mx-auto text-center sm:min-w-fit sm:px-4 md:min-w-fit lg:min-w-full`)}>
        <h1 className={cn(`bg-clip-text bg-gradient-primary-500 text-transparent md:display-lg-bold`)}>
          Smart Choices
        </h1>
        <h1 className={cn(` text-white md:pt-5 md:display-lg-bold`)}>
          For Your Business Growth
        </h1>
      </div>
      <p className={cn(`mx-auto text-center text-xl-medium text-secondary-200 w-[327px] pt-[14px] lg:w-[673px]`)}>
        We are a team of experienced designers, developers, and marketers, passionate about delivering exceptional digital solutions.
      </p>
      <Button
        isIcon={true}
        rightIcon={<RightIconButton />}
        className={cn(`mx-auto mt-[40px] md:mt-[56px]`)}
        size={"lg"}
      >
        Contact Us
      </Button>
    </div>
  );
}

export default HomeModule