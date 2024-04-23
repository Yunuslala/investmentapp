"use client"
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import HOC from '../Layout/HOC'
// const HOC =dynamic(()=>import("../Layout/HOC"))
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PayoutOptionCard } from './PayoutOptionCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/Reducers/store';
import { Category } from '@/lib/Reducers/CategorySlice/CategorySlice';
import { GetAllOptionsByCategory, getAllInvestOptions } from '@/lib/Reducers/api';
import { InvestOptionData } from '../AdminDashBoard/AllInvestmentOptions';


const MyPayoutsoptions = () => {
  const [categories, setcategories] = useState<string>("");
  const [countries, setcountries] = useState<string>("");
  const [optionsData,setOptionsData]=useState<InvestOptionData[]>([]);
  const { CategoryData }: { CategoryData: Category[] } = useSelector((state: RootState) => state.CategorySlice);
  console.log("AllInvestOptions", CategoryData);
  useEffect(()=>{
    const getAllOptions=async()=>{
        try {
            const token = localStorage.getItem("UserToken");
            if (token) {
                const { data } = await getAllInvestOptions(token);
                setOptionsData(data);
                console.log("profileUserData", data);
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }
    getAllOptions()
},[])
useEffect(()=>{
    const getAllOptionsByCat=async()=>{
        try {
            const token = localStorage.getItem("UserToken");
            if (token && categories) {
                const { data } = await GetAllOptionsByCategory(token,categories);
                setOptionsData(data);
                console.log("profileUserData", data);
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }
    getAllOptionsByCat()
},[categories])
  return (
    <div className='w-[100%] shaddow-lg bg-white  py-[30px]'>
    <div className='w-[90%] flex flex-col items-start justify-start m-auto'>
        <div className='flex items-center justify-between w-[100%] '>
        <div className='w-[30%]'>
                    <Select onValueChange={(value: string) => setcategories(value)} >
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
                                <SelectGroup className="flex flex-col space-y-2 w-[80%] m-auto">
                                    {
                                      CategoryData && CategoryData.map((item: Category) => (
                                        <SelectItem
                                            value={item?._id}
                                            className="active:bg-red cursor-pointer"
                                            key={item?._id + item?.createdAt}
                                        >
                                            <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F] mt-[5px]">
                                                {item?.name}
                                            </p>
                                        </SelectItem>
                                    ))
                                    }

                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
        </div>
        <div className='w-[100%] flex gap-2 md:gap-4 flex-wrap justify-between py-[60px]'>  
            {
                    optionsData && optionsData?.map((item)=>(
                        <div className='w-[30%]'>
                        <PayoutOptionCard cardData={item} key={item._id} />
                    </div>
                    ))
                   }
        </div>
    </div>

</div>
  )
}

export default HOC(MyPayoutsoptions)