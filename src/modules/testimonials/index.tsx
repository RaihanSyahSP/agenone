import React from 'react'
import { TestimonialCard } from '@/components'
import { cn } from '@/lib/utils';

const data = [
  {
    id: 1,
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.",
    name: "John Doe",
    position: "Earth Founder",
    avatarPath: "/testimonials/john.png",
  },
  {
    id: 2,
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.",
    name: "Alan",
    position: "Mars Founder",
    avatarPath: "/testimonials/alan.png",
  },
  {
    id: 3,
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.",
    name: "Clara",
    position: "Moon Founder",
    avatarPath: "/testimonials/clara.png",
  },
  {
    id: 4,
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.",
    name: "Lil Nas",
    position: "Sun Founder",
    avatarPath: "/testimonials/lilnas.png",
  },
  {
    id: 5,
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.",
    name: "John Doe",
    position: "Earth Founder",
    avatarPath: "/testimonials/john.png",
  },
  {
    id: 6,
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.",
    name: "Alan",
    position: "Mars Founder",
    avatarPath: "/testimonials/alan.png",
  },
  {
    id: 7,
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.",
    name: "Clara",
    position: "Moon Founder",
    avatarPath: "/testimonials/clara.png",
  },
  {
    id: 8,
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam.",
    name: "Lil Nas",
    position: "Sun Founder",
    avatarPath: "/testimonials/lilnas.png",
  },
];


const TestimonialsModule = () => {
  return (
    <div
      className={cn(
        "w-full h-fit grid grid-cols-1 px-[24px] mt-80 mx-auto gap-10 bg-white",
        "overflow-hidden [mask-image:_linear-gradient(to_top,transparent_0,_black_128px,_black_calc(100%-100px),transparent_100%)]",
        "md:grid-cols-2 md:px-[60px] md:mt-28",
        "lg:mt-10 xl:h-[800px] xl:px-[108px] xl:max-w-max"
      )}
    >
      {data.map((item, index) => (
        <div
          key={item.id}
          className={index % 2 === 0 ? ' md:mt-10 lg:mt-16' : ''}
        >
          <TestimonialCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default TestimonialsModule