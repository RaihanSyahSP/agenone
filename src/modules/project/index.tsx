import React from 'react'
import { cn } from '@/lib/utils'
import { Tabs } from '@/components';

const ProjectModule = () => {
    return (
      <div className={cn("w-full md:h-[1144px] lg:h-[1303px] bg-secondary-900 bg-[url('/backgroundProject.png')] bg-cover bg-center")}>
        <div className={cn("text-white mx-auto", "lg:pt-[100px] lg:px-[80px] lg:w-[1280px] lg:h-[1103px]")}>
          <div className='flex flex-col items-center gap-[56px]'>
            <div className="text-center mx-auto flex flex-col align-middle gap-[24px] w-full">
              <h1 className="text-white text-5xl-bold md:display-lg-bold">
                Our Project Have Been <span className="clip-text-gradient">Done</span>
              </h1>
              <p className='text-xl-medium text-secondary-200 text-center w-[954px] mx-auto'>
                Take a look at some of our recent projects and see how we have helped other businesses elevate their brand and drive business growth.
              </p>
            </div>
            <Tabs />
          </div>
        </div>
      </div>
    ); 
}

export default ProjectModule