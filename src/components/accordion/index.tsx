"use client"

import { ArrowRight } from '@/assets';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react'
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

function getAbbreviatedLabel(label: string, windowWidth: number) {
  if (windowWidth < 350) {
    switch (label) {
      case "UI/UX Design":
        return "UI/UX";
      case "Digital Marketing":
        return "Digital";
      case "Social Media Management":
        return "SMM";
      case "Development":
        return "Dev";
      default:
        return label;
    }
  }
  return label;
}

const AccordionItem: React.FC<AccordionItemProps> = (props: AccordionItemProps) => {
    const contentEl = useRef<HTMLDivElement>(null);
    const { handleToggle, active, items } = props;
    const { id, title, content, imagePath } = items;
    const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0 or some default value

     useEffect(() => {
       const handleWindowResize = () => {
         setWindowWidth(window.innerWidth);
       };
       window.addEventListener("resize", handleWindowResize);
       setWindowWidth(window.innerWidth);
       return () => {
         window.removeEventListener("resize", handleWindowResize);
       };
     }, []);

    return (
        <div className="bg-[#F8F8F8] mx-[24px] my-[24px] rounded-[20px] xl:w-[1280px] xl:mx-auto">  
            <header
                className={cn(
                "flex items-start gap-[20px] p-[24px] hover:cursor-pointer",
                "md:gap-[40px] md:px-[60px] md:py-[54px]",
                "text-xl-bold md:text-4xl-medium",
            )}
                onClick={() => handleToggle(id)}
            >   
                <h2 className={`${active === id ? "active clip-text-gradient" : ""}`}>
                    {id}
                </h2>
                <div className='flex justify-between w-full'>
                    <h2 className={`${active === id ? "active clip-text-gradient" : ""}`}>
                        {getAbbreviatedLabel(title, windowWidth)}
                    </h2>
                    <div className={`transition-all ${active === id ? "rotate-90" : ""}`}>
                        <ArrowRight active={active} id={id} />
                    </div>
                </div>
            </header>
            <div
                ref={contentEl}
                className={cn(
                    "w-full flex flex-col gap-3 items-start text-start",
                    "pl-8 pr-6 md:pl-28 md:gap-9 md:pr-20 overflow-hidden transition-height duration-500",
                    active === id ? "h-auto" : "h-0")
                }
                style={
                active === id
                    ? { height: contentEl?.current?.scrollHeight! }
                    : { height: "0px" }
                }
            >
                <p className='text-md-regular md:text-lg-regular'>{content}</p>
                <div className='pb-[52px] md:pb-[54px]'>
                    <Image
                        src={imagePath}
                        width={1200}     
                        height={800}
                        alt="Picture"
                        style={{objectFit:"contain", borderRadius: "12px"}}
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
