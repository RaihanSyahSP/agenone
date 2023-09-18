import React from 'react'
import { cn } from '@/lib/utils'
import { Tabs } from '@/components';
import Image from 'next/image';

const ProjectModule = () => {
  const companyLogoPath = [
    "/slack.png", "/google.png", "/netflix.png", "/air-bnb.png", "/adobe.png", "/microsoft.png"
  ]

    return (
      <div
        className={cn(
          "w-full h-[1420px] bg-secondary-900 bg-[url('/backgroundProject.png')] bg-cover bg-center",
          "md:h-[1144px] lg:h-fit"
        )
      }>
        <div
          className={cn(
            "text-white mx-auto pt-[56px] px-[30px]",
            "xl:pt-[100px] xl:px-[80px] xl:w-[1280px] xl:h-[1103px]"
          )
        }>
          <div className='flex flex-col items-center gap-[32px] lg:gap-[56px]'>
            <div className="text-center mx-auto flex flex-col align-middle w-full gap-[8px] md:gap-[24px]">
              <h1 className="text-white text-5xl-bold md:display-lg-bold">
                Our Project Have Been <span className="clip-text-gradient">Done</span>
              </h1>
              <p className='text-xl-medium text-secondary-200 text-center mx-auto xl:w-[954px]'>
                Take a look at some of our recent projects and see how we have helped other businesses elevate their brand and drive business growth.
              </p>
            </div>
            <Tabs />
          </div>
        </div>
        <div className='bg-gray-900 max-w-full mt-24 border-t border-gray-700'>
          <div className={cn(
            "w-fit mx-auto grid grid-cols-2 py-[12px] gap-1",
            "md:grid-cols-3 md:py-[24px]",
            "lg:flex lg:justify-between lg:w-fit",
            "xl:px-[80px] xl:grid-cols-1 xl:py-[32px] xl:w-[1280px]"
          )}>  
            {companyLogoPath.map((path, index) => (
                <Image
                  key={index}
                  src={path}
                  alt={path[index]}
                  width={160}
                  height={94}
                />
              ))}
          </div>
        </div>
      </div>
    ); 
}

export default ProjectModule