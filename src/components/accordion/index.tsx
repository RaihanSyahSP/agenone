"use client"

import { ArrowRight } from '@/assets';
import { cn } from '@/lib/utils';
import { useRef, useState } from 'react'
import Image from 'next/image'

interface Content {
    id: number;
    title: string;
    content: string;
    imagePath: string;
}

interface AccordionItemProps {
    active: number;
    handleToggle: (id:number) => void;
    items: Content;
}

const contents = [
    {
        id: 1,
        title: "UI/UX Design",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad necessitatibus voluptates dicta atque inventore.",
        imagePath: "/image-service.png"
    },
    {
        id: 2,
        title: "Digital Marketing",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad necessitatibus voluptates dicta atque inventore.",
        imagePath: "/image-service.png"
    },
    {
        id: 3,
        title: "Social Media Management",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad necessitatibus voluptates dicta atque inventore.",
        imagePath: "/image-service.png"
    },
    {
        id: 4,
        title: "Development",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad necessitatibus voluptates dicta atque inventore.",
        imagePath: "/image-service.png"
    }
]

const AccordionItem: React.FC<AccordionItemProps> = (props: AccordionItemProps) => {
    const contentEl = useRef<HTMLDivElement>(null);
    const { handleToggle, active, items } = props;
    const { id, title, content, imagePath } = items;

    return (
        <div className="bg-[#F8F8F8] mx-[24px] my-[24px] rounded-[20px] xl:w-[1280px] xl:mx-auto">  
            <header
                className={cn(
                "flex items-start gap-[40px] px-[60px] py-[54px] hover:cursor-pointer",
                "text-4xl-medium",
            )}
                onClick={() => handleToggle(id)}
            >   
                <h2 className={`${active === id ? "active clip-text-gradient" : ""}`}>
                    {id}
                </h2>
                <div className='flex justify-between w-full'>
                    <h2 className={`${active === id ? "active clip-text-gradient" : ""}`}>
                        {title}
                    </h2>
                    <div className={`transition-all ${active === id ? "rotate-90" : ""}`}>
                        <ArrowRight active={active} id={id} />
                    </div>
                </div>
            </header>
            <div
                ref={contentEl}
                className={cn(
                    "w-full flex flex-col gap-9 items-start",
                    "pl-28 pr-20 overflow-hidden transition-height duration-500",
                    active === id ? "h-auto" : "h-0")
                }
                
                style={
                active === id
                    ? { height: contentEl?.current?.scrollHeight! }
                    : { height: "0px" }
                }
            >
                <p className='text-lg-regular'>{content}</p>
                <div className='pb-[54px]'>
                    <Image
                        src={imagePath}
                        width={1200}     
                        height={500}
                        alt="Picture"
                        style={{objectFit: "cover", borderRadius: "20px"}}
                    />
                </div>
            </div>
        </div>
    )
}



export const Accordion = () => {
     const [active, setActive] = useState(0);

     const handleToggle = (index: number) => {
       if (active === index) {
         setActive(0);
       } else {
         setActive(index);
       }
    };
    
  return (
      <div className='md:mt-[64px]'>
        {
            contents.map((item) => (
                <AccordionItem
                    key={item.id}
                    active={active}
                    handleToggle={() => {handleToggle(item.id)}}
                    items={item}
                />
            ))
        }
    </div>
  )
}
