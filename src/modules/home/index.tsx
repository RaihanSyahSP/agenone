import React from 'react'
import Button from '@/components/button'
import { RightIconButton } from "@/assets";

const HomeModule = () => {
  return (
    <div className='w-full h-screen bg-secondary-900 text-slate-600 text-2xl'>
      <div className='absolute bg-hero-pattern z-30'>
      </div>
      <Button isIcon={true} rightIcon={<RightIconButton/>}>Click Me</Button>
    </div>
  )
}

export default HomeModule