import React from 'react'

const LeaderShipCard = () => {
    return (
        <div className="relative h-[450px] pt-4 ">
        <div className="w-[310px] h-[450px] rounded-md border border-black">
            <div className="w-full">
                <div className="relative w-full h-[242px] border-2 rounded-lg overflow-hidden">
                    <video className="w-full h-full object-cover rounded-md" controls>
                        <source src="https://kr-resource.deepbrain.io/2024-02-27/65ddad0b691a4b0c3b6bbbd4.completed.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="w-[85%] flex items-center justify-center flex-col mx-auto mt-10">
           <div>
            <div>
                <p className="font-bold text-[#1E1E1E] text-2xl leading-7 tracking-normal text-start">Lorem Ipsum</p>
            </div>
            <div>
                <p className='font-normal text-xs leading-4 tracking-normal text-left text-[#1E1E1E]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Donec a ornare nibh. Vestibulum auctor molestie sagittis.
Vivamus odio lacus, varius non risus cursus, imperdiet
ultrices turpis</p>
            </div>
           </div>
            </div>
        </div>
        </div>
    )
}

export default LeaderShipCard