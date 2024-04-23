'use client'
import React, { useState } from 'react'
import HOC from '../Layout/HOC'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import PortfolioPannel from '../UserDashBoard/PortfolioPannel';

const AllPortfollioUsers = () => {
    const [categories,setcategories]=useState<string>("");
    const [countries,setcountries]=useState<string>("");

    return (
        <div className='w-[100%] shaddow-lg bg-white  py-[30px]'>
            <div className='w-[90%] flex flex-col items-start justify-start m-auto'>
                <div className='flex items-center justify-between w-[100%] '>
                    <div className='w-[30%]'>
                        <Select onValueChange={(value)=>setcategories(value)} >
                            <SelectTrigger className="w-full shadow-lg bg-white py-[3px] text-xl">
                                <SelectValue
                                    placeholder={
                                        <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F] mt-[15px]">
                                            Category of Investment
                                        </p>
                                    }
                                />
                            </SelectTrigger>
                            <SelectContent className="shadow-lg bg-white rounded-[10px]">
                                <SelectGroup  className="flex flex-col space-y-2 w-[80%] m-auto">
                                    <SelectItem
                                        value="5"
                                        className="active:bg-red cursor-pointer"
                                    >
                                        <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F] mt-[15px]">
                                            My Account
                                        </p>
                                    </SelectItem>
                                    <SelectItem
                                        value="4"
                                        className="active:bg-red cursor-pointer"
                                    >
                                        <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F] mt-[15px]">
                                            Payment
                                        </p>
                                    </SelectItem>
                                    <SelectItem
                                        value="4"
                                        className="active:bg-red cursor-pointer"
                                    >
                                        <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F] mt-[15px]">
                                            Investment
                                        </p>
                                    </SelectItem>
                                    <SelectItem
                                        value="3"
                                        className="active:bg-red cursor-pointer"
                                    >
                                        <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F] mt-[15px]">
                                            Others
                                        </p>
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className='w-[30%]'>
                       {categories && <Select onValueChange={(value)=>setcountries(value)} >
                            <SelectTrigger className="w-full shadow-lg bg-white py-[3px] text-xl">
                                <SelectValue
                                    placeholder={
                                        <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F] mt-[15px]">
                                            Select Country
                                        </p>
                                    }
                                />
                            </SelectTrigger>
                            <SelectContent className="shadow-lg bg-white rounded-[10px]">
                                <SelectGroup className="flex flex-col space-y-2 w-[80%] m-auto">
                                    <SelectItem
                                        value="5"
                                        className="active:bg-red cursor-pointer"
                                    >
                                        <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F] mt-[15px]">
                                            My Account
                                        </p>
                                    </SelectItem>
                                    <SelectItem
                                        value="4"
                                        className="active:bg-red cursor-pointer"
                                    >
                                        <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F] mt-[15px]">
                                            Payment
                                        </p>
                                    </SelectItem>
                                    <SelectItem
                                        value="4"
                                        className="active:bg-red cursor-pointer"
                                    >
                                        <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F] mt-[15px]">
                                            Investment
                                        </p>
                                    </SelectItem>
                                    <SelectItem
                                        value="3"
                                        className="active:bg-red cursor-pointer"
                                    >
                                        <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F] mt-[15px]">
                                            Others
                                        </p>
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>}
                    </div>
                   
                </div>
                <div className='w-[100%] flex flex-col items-start justify-start py-[50px]'>
                <div className='flex items-center w-[95%] justify-between m-auto'>
                    <div className='flex items-center justify-between w-[25%]'>
                    <p className='font-bold text-center text-lg leading-7 text-[#FCB305]'>
                                Invested Amount:
                            </p>
                            <p className='font-bold text-center text-lg leading-7 text-[#FCB305]'>
                                $45,555
                            </p>

                    </div>
                    <div className='flex items-end justify-end w-[40%]'>
                        <p className='font-bold text-center text-lg leading-7 text-[#FCB305]'>#client12341</p>

                    </div>
                </div>
                <div className='w-[95%]'>
                <PortfolioPannel />
                </div>
               
              


                </div>
            </div>

        </div>
    )
}

export default HOC(AllPortfollioUsers)
