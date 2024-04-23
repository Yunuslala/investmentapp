import React from 'react'

const AlertCard = () => {
//     Client Name:
// Client ID:
// Start Date:
// Email:
// Contact:
// Payment Mode:
// Payout Mode for Returns:
// Investment Value:
// Time Period:
  return (
    <div style={{border:"1px solid #1D687F"}} className='w-[100%] rounded-[10px] shaddow-lg bg-white p-3 border-1 border-[#1D687F]'>
        <div className='w-[90%] mx-auto flex flex-col items-start justify-start'>
        <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'> Client Name</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>Yunus</span></p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'> Client Id</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>#Client12234578</span> </p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Start Date</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>23/03/2024</span></p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Email</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>email@gmail.com</span></p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Payment Mode</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>paypal</span></p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Mobile Number</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>9696510765</span></p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Payout Mode for Returns</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>Paypal</span></p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Investment Value</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>3000 INR</span></p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Time Period</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>5 months</span></p>
        </div>
      
    </div>
  )
}

export default AlertCard
