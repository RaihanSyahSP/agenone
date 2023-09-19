"use client"

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Button from "../button";
import { cn } from "@/lib/utils";

interface DetailContent {
    id: number;
    title: string;
    content: string;
    imagePath: string;
}
interface Content {
    id: number;
    label: string;
    detailContent: DetailContent[];
}

const tabsContents: Content[] = [
  {
    id: 1,
    label: "UI/UX Design",
    detailContent: [
      {
        id: 1,
        title: "UI/UX Design",
        content: "We are designed to help your business thrive in the online world.",
        imagePath: "/img-project1.png",
      },
      {
        id: 2,
        title: "UI/UX Design",
        content: "We are designed to help your business thrive in the online world.",
        imagePath: "/img-project2.png",
      },
    ],
  },
  {
    id: 2,
    label: "Digital Marketing",
    detailContent: [
      {
        id: 1,
        title: "Digital Marketing",
        content: "We are digitalization to help your business thrive in the online world.",
        imagePath: "/img-project1.png",
      },
      {
        id: 2,
        title: "Digital Marketing",
        content: "We are digitalization to help your business thrive in the online world.",
        imagePath: "/img-project2.png",
      },
    ],
  },
  {
    id: 3,
    label: "Social Media Management",
    detailContent: [
      {
        id: 1,
        title: "Social Media Management",
        content: "We are menaged to help your business thrive in the online world.",
        imagePath: "/img-project1.png",
      },
      {
        id: 2,
        title: "Social Media Management",
        content: "We are menaged to help your business thrive in the online world.",
        imagePath: "/img-project2.png",
      },
    ],
  },
  {
    id: 4,
    label: "Development",
    detailContent: [
      {
        id: 1,
        title: "Development",
        content: "We are developed to help your business thrive in the online world.",
        imagePath: "/img-project1.png",
      },
      {
        id: 2,
        title: "Development",
        content: "We are developed to help your business thrive in the online world.",
        imagePath: "/img-project2.png",
      },
    ],
  },
];

function getAbbreviatedLabel(label: string, windowWidth: number) {
    if (windowWidth < 500) {
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


const tabsCard = ({ detailContent }: Content) => {
    return (
        <div
            className={cn(
                "flex gap-[12px] flex-col mt-[32px]",
                "md:flex-row xl:flex-row xl:gap-[20px] xl:mt-[40px]"
            )
        }>
        {detailContent.map((content, index) => (
            <div key={index}
                className={cn(
                    "w-full h-[412px] bg-secondary-800 rounded-[32px] p-[12px] border-gray-700 border",
                    "md:w-[350px] md:h-[500px] md:p-[16px]",
                    "xl:w-[530px] xl:h-[655px] xl:p-[16px]"
                )
            }>
            <div className="relative group cursor-pointer">
                <Image
                    src={content.imagePath}
                    alt="image-service"
                    width={598}
                    height={579}
                    className="object-cover rounded-[20px] transition-opacity duration-300 ease-in-out"
                />
                <div 
                    className={cn(
                        "absolute inset-0 flex items-center justify-center",
                        "bg-black opacity-0 rounded-[20px]",
                        "group-hover:opacity-80 transition-opacity duration-300 ease-in-out"
                    )
                }>
                    <Image
                        src="/hover-icon.png"
                        alt="hover-icon"
                        width={218}
                        height={218}
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="flex flex-col items-stretch text-left pt-[16px] gap-[2px] md:gap-[12px] md:pt-[24px]">
              <h1 className="text-lg-bold md:text-4xl-bold">{content.title}</h1>
              <p className="opacity-[0.8] text-md-regular md:text-xl-regular">{content.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
}


const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0 or some default value

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        setWindowWidth(window.innerWidth);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    return (
      <>
        <div className="mx-auto">
            <div className="flex align-middle bg-white rounded-full p-[5px] md:p-[8px]">
                {tabsContents.map((tab, index) => (
                    <Button
                        key={index}
                        intent={activeTab === index ? "primary" : "secondary"}
                        size={windowWidth < 768 ? "sm" : "md"}
                        onClick={() => setActiveTab(index)}
                    >
                        {getAbbreviatedLabel(tab.label, windowWidth)}
                    </Button>
                ))}
            </div>      
        </div>
        <div className="mx-auto">
            {tabsContents.map((tab, index) => (
                <div key={index}>
                    {activeTab === index && tabsCard(tab)}
                </div>
            ))}
        </div>
    </>
  )
}

export default Tabs