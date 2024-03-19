'use client'
import React from "react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IoBedOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Swipperbtn from "../Layout/Swipperbtn";
import LeaderShipCard from "./LeaderShipCard";


import dynamic from 'next/dynamic';
const TestimonialCard=dynamic(()=>import("./TestimonialCard"))

const Testimonails = () => {
  return (
    <div className="bg-[#ecf5ff] w-[100%] p-[50px] ">
    <div className='flex  items-center justify-between w-[90%] mx-auto mt-[100px] '>
        <div className='w-[40%] h-[300px] '>
        <div className="flex w-full flex-wrap -mx-4 items-center mb-16">
        <div className="w-full lg:w-2/3 px-4 mb-12 lg:mb-0">
          <span className="inline-block py-2 cursor-pointer px-3 mb-4 text-xs font-semibold text-[#1D687F] bg-orange-300 rounded-full hover:bg-[#FCB305]">TESTIMONIALS</span>
          <h1 className="font-heading  flex items-center text-4xl xs:text-6xl font-bold text-gray-900 mb-4">
            <span>What our clients said</span>
          </h1>
          <p className="text-gray-500 text-lg">Risus viverra justo sagittis vestibulum metus.</p>
        </div>
      </div>
        </div>
        <div className='w-[60%] h-[600px] flex justify-evenly'>
        <div className=" flex w-full  items-center justify-between">
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                direction={'vertical'}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper flex flex-col items-start h-full px-2 "
              >
                <SwiperSlide className="px-3">
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide className="px-3">
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide className="px-3">
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide className="px-3">
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide className="px-3">
                  <TestimonialCard />
                </SwiperSlide>
          
              </Swiper>
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                direction={'vertical'}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper flex flex-col items-start h-full  "
              >
                <SwiperSlide className="px-3">
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide className="px-3">
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide className="px-3">
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide className="px-3">
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide className="px-3">
                  <TestimonialCard />
                </SwiperSlide>
          
              </Swiper>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Testimonails