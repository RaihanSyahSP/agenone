import React from 'react'
import Button from '../button';
import { LogoIcon, RightIconButton, CircleOutlinedFooterRight, CircleOutlinedFooterLeft } from '@/assets';
import { cn } from '@/lib/utils';

const HeadlineFooter = () => {
  return (
    <div className="bg-gray-900 mx-16 max-h-[184px] rounded-t-[40px] border-b border-gray-700">
      <div className="flex justify-between items-center max-w-5xl mx-auto py-11 px-8">
        <div className="max-w-[600px]">
          <h1 className="text-6xl-semibold text-white">Let’s discuss and bring your vision to life.</h1>
        </div>
        <div>
          <Button isIcon={true} rightIcon={<RightIconButton />} size={"lg"}>
            Let&rsquo;s Talk
          </Button>
        </div>
      d</div>
    </div>
  );
}

const FooterNav = () => {
  return (
    <div className="relative min-h-[505px] bg-gray-900 text-white py-[50px] px-[80px]">
      <div className="border-b border-gray-700 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col max-w-[413px] gap-[50px] px-4 py-6">
          <div className="flex flex-col gap-[25px] h-[143px]">
            <a href="#" className="flex justify-between w-40">
              <LogoIcon />
              <p className={cn("text-white font-bold italic text-2xl")}>Agenone</p>
            </a>
            <p className="text-lg-regular text-gray-200">We&rsquo;re a team of experienced designers, developers, and marketers, passionate about delivering exceptional digital solutions.</p>
          </div>
          <p className="text-lg-medium text-gray-200">hello@agenone.com</p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
            <div>
              <h2 className="mb-6 text-lg-bold text-gray-900 dark:text-white">Menu</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="text-lg-regular hover:underline">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-lg-regular hover:underline">
                    Services
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-lg-regular hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-lg-regular hover:underline">
                    Project
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-lg-regular hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg-bold text-gray-900 dark:text-white">Support</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="text-lg-regular hover:underline">
                    FAQ
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-lg-regular hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-lg-regular hover:underline">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg-bold text-gray-900 dark:text-white">Social Media</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="text-lg-regular hover:underline">
                    Linkedin
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-lg-regular hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-lg-regular hover:underline">
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-lg-regular hover:underline">
                    Dribble
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="text-lg-regular hover:underline">
                    Behance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center pt-14">
        <p className="text-lg-regular">Copyright © 2023 by Agenone. All rights reserved.</p>
      </div>
      <div className="absolute bottom-0 right-0">
        <CircleOutlinedFooterRight />
      </div>
      <div className="absolute bottom-24 left-0">
        <CircleOutlinedFooterLeft />
      </div>
    </div>
  );

}


const Footer = () => {
  return (
    <footer>
      <HeadlineFooter />
      <FooterNav />
    </footer>
  );
}

export default Footer