import React from 'react'
import Button from '../button';
import { LogoIcon, RightIconButton } from '@/assets';
import { cn } from '@/lib/utils';

const HeadlineFooter = () => {
  return (
    <div className="bg-gray-900 mx-16 max-h-[184px] rounded-t-[40px] border-b border-gray-700">
      <div className="flex justify-between items-center max-w-5xl mx-auto py-11">
        <div className="max-w-[600px]">
          <h1 className="text-6xl-semibold text-white">Let’s discuss and bring your vision to life.</h1>
        </div>
        <div>
          <Button isIcon={true} rightIcon={<RightIconButton />} size={"lg"}>
            Let&rsquo;s Talk
          </Button>
        </div>
      </div>
    </div>
  );
}

const FooterNav = () => {
  return (
    <div className="min-h-[505px] bg-gray-900 text-white pt-[184px] flex justify-between px-[80px]">
      <div className="flex flex-col justify-between max-w-[413px] gap-[40px]">
        <div className="flex flex-col gap-[25px] h-[143px]">
          <a href="#" className={cn("flex justify-between w-40")}>
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
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Menu</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className=" hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Support</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Social Media</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
       
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