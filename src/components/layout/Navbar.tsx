"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { LogoIcon } from '@/assets'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import Button from '../button'


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const menu = [
    { name: "Home", url: "/" },
    { name: "Services",url: "/"},
    { name: "Project", url: "/" },
    { name: "About", url: "/" },
  ];
  return (
    <nav className="w-full fixed top-0 bg-secondary-900">
      <div className={`justify-between items-center px-4 mx-auto lg:max-w-7xl md:items-center md:h-[94px] md:flex md:px-8`}>
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div>
              <a href="#" className={cn("flex justify-between")}>
                <LogoIcon />
                <p className={cn("text-white font-bold italic text-2xl")}>Agenone</p>
              </a>
            </div>
            <div className="md:hidden">
              <button 
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" 
                  onClick={() => setNavbar(!navbar)}
                >
                {navbar ? <RxCross1 className="text-white" /> : <AiOutlineMenu className="text-white" />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block animate-slide-in" : "hidden"}`}>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-[40px] md:space-y-0">
              {menu.map(({ name, url }, index) => (
                <li key={index} className="text-white group transition duration-300">
                  {<Link href={url}>{name}</Link>}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-primary-500"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button className="hidden md:block">Contact Us</Button>
      </div>
    </nav>
  );
};
export default Navbar;