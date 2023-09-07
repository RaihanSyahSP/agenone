import React from 'react'
import Button from '@/components/button'
import { RightIconButton } from "@/assets";

const HomeModule = () => {
  return (
    <div className='w-full h-screen bg-gradient-primary-100 text-slate-600 text-2xl'>
      <Button isIcon={true} rightIcon={<RightIconButton/>}>Click Me</Button>
    </div>
  )
}

export default HomeModule