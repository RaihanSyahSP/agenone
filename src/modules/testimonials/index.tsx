import React from 'react'
import { TestimonialCard } from '@/components'

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
      <div className="w-full h-fit grid grid-cols-2 gap-10 bg-white xl:h-[800px]">
        {
        data.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))
        }
      </div>
  )
}

export default TestimonialsModule