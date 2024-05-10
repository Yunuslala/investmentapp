'use client'
import React, { useEffect, useState } from 'react'
import {  Country, State as StateData } from "country-state-city";
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
import { FormDrawer, InvestmentCard } from './InvestmentCard';
import { SwipeableDrawer } from '@mui/material';
import { categorytype } from './AllUser';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/Reducers/store';
import { Category } from '@/lib/Reducers/CategorySlice/CategorySlice';
import { GetAllOptionsByCategory, getAllInvestOptions } from '@/lib/Reducers/api';
interface CategoryOptionsType {
    _id: string;
    name: string;
    createdAt: string;
    __v: number;
}
export interface InvestOptionData {
    CompanyName: string;
    Logo: string;
    VideoMessage: string;
    CategoryId: CategoryOptionsType;
    AboutCompany: string;
    HashTags: string;
    BuisnessType: string;
    WebsiteLink: string;
    InvestmentSizeMin: string;
    InvestmentSizeMax: string;
    LockingPeriod: string;
    Payouts: string;
    ReturnRateMin: string;
    ReturnRateMax: string;
    OperationsOfCompany: string;
    isDeleted: boolean;
    _id: string;
    createdAt: string;
    __v: number;
}


const AllInvestmentoptions = () => {
    const [categories, setcategories] = useState<string>("");
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer open/close
    const [countries, setcountries] = useState<string>("");
    let countryData = Country.getAllCountries();
    const [existcountry, setexistCountry] = useState(countryData);
    const [optionsData,setOptionsData]=useState<InvestOptionData[]>([]);
    const toggleDrawer = (open: boolean) => () => {
        console.log("open",open)
        setIsDrawerOpen(open); // Set the state directly with boolean value
    };
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
    const { CategoryData }: { CategoryData: Category[] } = useSelector((state: RootState) => state.CategorySlice);
    console.log("AllInvestOptions", CategoryData);
    return (
        <div className='w-[100%] shaddow-lg bg-white  py-[30px]'>
            <div className='w-[90%] flex flex-col items-start justify-start m-auto'>
                <div className='flex items-end justify-end w-[100%] mb-[10px]'>
                    <div className='bg-[#FCB305]  cursor-pointer w-[150px] flex items-center justify-center rounded-[14px]' onClick={toggleDrawer(true)}>
                        <p className='font-sans text-xl font-normal leading-tight text-white mt-[10px]'>Add New</p>
                    </div>
                    <SwipeableDrawer
                    className="w-[300px]"
                     anchor="right" // Set anchor to 'right'
                        open={isDrawerOpen} // Pass the boolean state variable here
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}>
                        <FormDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
                    </SwipeableDrawer>

                </div>
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
                    <div className='w-[30%]'>
                    {categories && <Select onValueChange={(value: string) => setcountries(value)} >
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
                                    {existcountry && existcountry.map((item: {
                                        name: string,
                                        latitude: string,
                                        longitude: string,
                                        isoCode: string
                                    }) => (
                                        <SelectItem
                                            value={item?.name}
                                            key={item?.longitude}
                                            className="active:bg-red cursor-pointer"
                                        >
                                            <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F] mt-[15px]">
                                                {item?.name}
                                            </p>
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>}
                    </div>
                </div>
                <div className='w-[100%] flex gap-2 md:gap-4 flex-wrap justify-between py-[60px]'>
                   {
                    optionsData && optionsData?.map((item)=>(
                        <div className='w-[30%]'>
                        <InvestmentCard cardData={item} key={item._id} />
                    </div>
                    ))
                   }
            
                </div>
            </div>

        </div>
    )
}

export default HOC(AllInvestmentoptions)


