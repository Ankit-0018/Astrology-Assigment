"use client"

import { Testimonial } from "@/app/types/landing";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import CorousalCard from "./CorousalCard";
import { Navigation } from "swiper/modules";
const Corousal = () => {

    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading , setLoading] = useState<boolean>(true);
    const [error , setError] = useState<string>("");

   useEffect(() => {
    const fetchTestimonials = async () => {
      try {
          const res = await fetch("/api/testimonials");
          const data = await res.json();
          setTestimonials(data);
          console.log(data);
      } catch (error) {
        setError("Error Fetching Testimonials...")
          console.error("Error fetching testimonials:", error);
      }finally{
        setLoading(false);
      }
    }
    fetchTestimonials();
}, [])

if(error) return <p>Error Fetching Testimonials..</p>
if(loading) return <p>Loading...</p>

  return (
     <Swiper
      spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation]}
          navigation
          autoplay
        breakpoints={{
          240: { slidesPerView: 1 },
          580: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }, 
          1400: { slidesPerView: 5 }, 
        }}
      onSlideChange={() => console.log('slide change')}
      
    >
        {testimonials?.map((testimonial,idx) => {
            return <SwiperSlide key={idx}>
                <CorousalCard name={testimonial.name}  imageUrl={testimonial.imageUrl} feedback={testimonial.feedback} />
            </SwiperSlide>
        })}
  
    </Swiper>

    
  )
}

export default Corousal
