"use client"

import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerAssets from '@/assets/bannerCard'
import { cn } from '@/lib/utils';
import { StarIcon, WalletIcon, ProfileTwoIcon, MaximizeIcon, BannerAssetsSmall } from '@/assets';
import SpecialIcon from '../specialIcon';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const contents = [
  {
    title: "Expanding the Market",
    icon: <MaximizeIcon />,
  },
  {
    title: "Cost-Effective",
    icon: <WalletIcon />,
  },
  {
    title: "More Professional",
    icon: <StarIcon />,
  },
  {
    title: "Attract Client",
    icon: <ProfileTwoIcon />,
  }

];

const BannerCard = () => {
  return (
    <div className="mt-[80px]">
      <div className="relative">
        <div className="lg:hidden">
          <BannerAssetsSmall  />
        </div>
        <div className="hidden lg:block">
          <BannerAssets />
        </div>
        <div className="absolute top-0 left-0 w-full h-full ">
          <h2 className={cn(
              "text-lg-semibold w-[213px] mx-auto text-center font-semibold text-white mt-[24px]",
              "md:pt-5 md:text-lg-semibold lg:pt-12 lg:text-2xl-semibold",
              "md:w-[600px] xl:pt-0 xl:text-4xl-semibold")}
          >
            Benefit of improving your business
          </h2>
          <div className="hidden mx-auto mt-[39px] md:w-[700px] lg:flex lg:w-[700px] lg:mt-[10px] xl:w-[1160px]">
            {contents?.map((content) => (
              <SpecialIcon key={content.title} title={content.title} icon={content.icon} />
            ))}
          </div>
          <div className="w-[314px] mx-auto md:w-[700px] lg:hidden">
            <Swiper modules={[Pagination]} slidesPerView={1} pagination={{ clickable: true }}>
              {contents?.map((content) => (
                <SwiperSlide key={content.title}>
                  <SpecialIcon key={content.title} title={content.title} icon={content.icon}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCard