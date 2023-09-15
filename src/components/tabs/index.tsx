"use client"

import { useEffect, useState } from "react";
import Button from "../button";

interface Content {
    id: number;
    label: string;
    title: string;
    content: string;
    imagePath: string;
}

const tabsContents: Content[] = [
    {
        id: 1,
        label: "UI/UX Design",
        title: "UI/UX Design",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad necessitatibus voluptates dicta atque inventore.",
        imagePath: "/image-service.png"
    },
    {
        id: 2,
        label: "Digital Marketing",
        title: "Digital Marketing",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad necessitatibus voluptates dicta atque inventore.",
        imagePath: "/image-service.png"
    },
    {
        id: 3,
        label: "Social Media Management",
        title: "Social Media Management",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad necessitatibus voluptates dicta atque inventore.",
        imagePath: "/image-service.png"
    },
    {
        id: 4,
        label: "Development",
        title: "Development",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad necessitatibus voluptates dicta atque inventore.",
        imagePath: "/image-service.png"
    }
]

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);


    useEffect(() => {
        console.log("activeTab", activeTab);
    }, [activeTab])
        
  return (
    <div className="mx-auto mt-[56px]">
        <div>
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
    </div>
  )
}

export default Tabs