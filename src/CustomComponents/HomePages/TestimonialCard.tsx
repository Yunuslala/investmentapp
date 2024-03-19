import React from 'react'
import Rating from '@mui/material/Rating';

import Image from 'next/image';

const TestimonialCard = () => {
    return (
        <div className='w-[300px] h-[200px] shadow-lg space-y-4 py-4 rotate-[5deg] '>
            <div className='flex flex-col w-[80%] m-auto space-y-7'>
            <div>    
                <Rating name="read-only" value={3.5} readOnly />
                </div>
            <div>
                <p className="text-xs text-gray-900">It was a pleasure working with the Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
            </div>
            </div>
            <div className="w-[100%] px-2 py-2 bg-[#FCB305]">
                <div className="flex w-[full] items-center justify-evenly">
                    <img className=" w-9 h-9 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xnGLZJFli6FRyXSlm8-QnpJb9hh30HffEA&s" alt="" />
                    <div className="flex flex-col items-start space-y-2">
                        <span className="text-base text-white  leading-none">Marvin McKinney</span>
                        <span className="font-extralight text-xs text-[#FFFFFF]">CEO of Coca Soft</span>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default TestimonialCard


