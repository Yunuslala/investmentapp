'use client'
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from "swiper/modules";
import { IoBedOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Swipperbtn from "../Layout/Swipperbtn";
import LeaderShipCard from "./LeaderShipCard";









export default function Leadership(){
    return (
      <div className="w-[100%] bg-[#ecf5ff] py-[40px] mt-[70px]">
    <div className="w-[95%] flex ml-auto ">
        <div className="flex w-[100%] flex-col">
          <div className="flex mb-9 w-[70%] ml-auto justify-evenly items-center">
            <div className="w-[50%]">
              <p
                className="font-bold text-[#1E1E1E] text-2xl leading-7 tracking-normal text-start"
              >
                Listen Insights From Leadership
              </p>
            </div>
            <div className=" w-[20%] flex justify-center">
              <div
             
                className="viewAll cursor-pointer flex h-10 justify-center text-[#40788C] items-center w-40 border-1 border-solid border-[#40788C] hover:border-none hover:bg-[#FCB305] hover:text-[#FFFFFF] hover:transition-all delay-120 hover:ease-in-out"
              >
                <p
                  className="flex  justify-center items-center font-helvetica text-base font-bold leading-4 tracking-normal text-center m-2 "
              
                >
                  VIEW ALL
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%]">
            <div className=" flex w-[100%]  items-start justify-start">
              <Swiper
                 effect={'coverflow'}
                 grabCursor={true}
                 centeredSlides={true}
                 slidesPerView={3}
                 coverflowEffect={{
                   rotate: 50,
                   stretch: 0,
                   depth: 100,
                   modifier: 1,
                   slideShadows: true,
                 }}
                 autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
               loop={true}
                 modules={[EffectCoverflow,Autoplay]}
                className="mySwiper flex flex-col items-start w-full "
              >
                <SwiperSlide>
                  <LeaderShipCard />
                </SwiperSlide>
                <SwiperSlide>
                  <LeaderShipCard />
                </SwiperSlide>
                <SwiperSlide>
                  <LeaderShipCard />
                </SwiperSlide>
                <SwiperSlide>
                  <LeaderShipCard />
                </SwiperSlide>
                <SwiperSlide>
                  <LeaderShipCard />
                </SwiperSlide>
                <Swipperbtn />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      </div>
    
      )
}