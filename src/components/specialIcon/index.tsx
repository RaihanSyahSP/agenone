import React from "react";
import { cn } from "@/lib/utils";

interface SpecialIconProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const SpecialIcon: React.FC<SpecialIconProps> = ({ icon, title, className, ...props }) => {
  return (
    <div className={cn(
        "flex flex-col justify-center mx-auto pt-14 pb-10 items-center",
        "gap-[10px] md:w-[700px] md:h-[230px]",
        className
    )} >
        <div className={cn(
            "flex p-[10px] items-start gap-[10px] rounded-full",
            "bg-gradient-to-r from-white via-white to-transparent")}
        >
              <div className={cn(
                    "flex w-[88px] h-[88px] p-[18px]",
                    "justify-center items-center gap-[10px]",
                    "rounded-full border-2 border-[#00796D] bg-white"
              )}>
                {icon}
              </div>      
        </div>
      <p className="text-2xl-medium text-white ">{title}</p>
    </div>
  );
};

export default SpecialIcon;
