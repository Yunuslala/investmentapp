'use client'
import React from 'react'
import { useSwiper } from 'swiper/react';
import Image from "next/image";
import frwdpic from "../../../public/images/forbtn.png"
import prevpic from "../../../public/images/prevbtn.png"

const Swipperbtn = () => {
    const swiper = useSwiper();

    return (
      <div className="flex w-full items-cetnter justify-center mt-7">
      <div className="mr-4  cursor-pointer" onClick={() => swiper.slidePrev()}>
        {/* <Image src={prevpic}  alt="prev" /> */}
      </div>
      <div className="cursor-pointer" onClick={() => swiper.slideNext()}>
      {/* <Image src={frwdpic}  alt="frwd" /> */}

      </div>

    </div>
    );
}

export default Swipperbtn
