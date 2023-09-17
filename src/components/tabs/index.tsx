"use client"

import { useEffect, useState } from "react";
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

const tabsCard = ({ id, label, detailContent }: Content) => {
    return (
      <div className={cn("flex gap-[20px] mt-[40px]")}>
        {detailContent.map((content, index) => (
          <div key={index} className={cn("w-[530px] h-[655px] bg-secondary-800 rounded-[32px] p-[16px] border-gray-700 border")}>
            <div className="relative group cursor-pointer">
                <Image
                    src={content.imagePath}
                    alt="image-service"
                    width={598}
                    height={579}
                    className="object-cover rounded-[20px] transition-opacity duration-300 ease-in-out"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 rounded-[20px] group-hover:opacity-80 transition-opacity duration-300 ease-in-out">
                    <Image
                        src="/hover-icon.png"
                        alt="hover-icon"
                        width={218}
                        height={218}
                    />
                </div>
            </div>
            <div className="flex flex-col items-stretch text-left gap-[12px] pt-[24px]">
              <h1 className="text-4xl-bold">{content.title}</h1>
              <p className="text-xl-regular opacity-[0.8]">{content.content}</p>
            </div>
          </div>
        ))}
      </div>
    );
}

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
      <>
        <div className="mx-auto">
            <div className="flex align-middle bg-white rounded-full p-[8px]">
                {tabsContents.map((tab, index) => (
                    <Button
                        key={index}
                        intent={activeTab === index ? "primary" : "secondary"}
                        size="md"
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </Button>
                ))}
            </div>      
        </div>
        <div className="mx-auto ">
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