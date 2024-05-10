'use client'
import React, { useEffect, useState } from 'react'
import HOC from '../Layout/HOC'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,

    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Tab } from '@headlessui/react';
import {  OptionCategory, classNames } from '../UserDashBoard/UpdateMyPayoutOptions';
import {  Country, State as StateData} from "country-state-city";
import { ProfileUserData } from '../UserDashBoard/UserAccount';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/Reducers/store';
import { Category } from '@/lib/Reducers/CategorySlice/CategorySlice';
import { AllusersData, UserPayoutOption } from '@/lib/Reducers/api';
export interface bankprop{
    Username?:string,
    accountNumber?:string,
    BankName?:string,
    BankAddress?:string,
    SwiftCode?:string,
    IfscCode?:string,
    ContactNumber?:string,
    PaypalLink?:string,
    otherPayoutLinks?:string,
    createdAt?:string
}
export interface BankDetailProp{
    bankprop?:bankprop
}
const UserPayOptions = () => {
    const [categoriesin, setcategories] = useState<string>("");
    const [selectedTab, setSelectedTab] = useState<OptionCategory>('Paypal');
    const [countries, setcountries] = useState<string>("");
    const [userlist, setuserlist] = useState<ProfileUserData[]>([]);
    let countryData = Country.getAllCountries();
    const [existcountry, setexistCountry] = useState(countryData);
    const [chooseUser, setchooseUser] = useState<string>("")
    const { CategoryData }: { CategoryData: Category[] } = useSelector((state: RootState) => state.CategorySlice);
    const [userpayoption,setUserPayOption]=useState<bankprop>({});
    console.log("AllInvestOptions", CategoryData);
    useEffect(()=>{
        const getuserpercountry = async () => {
            try {
                const token = localStorage.getItem("UserToken");
                if (token && countries ) {
                    const { data } = await AllusersData(token, countries);
                    setuserlist(data);
                    console.log("profileUserData", data);
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        }
        getuserpercountry()
    }, [countries])


    useEffect(()=>{
        const getUsersPayOptions = async () => {
            try {
                const token = localStorage.getItem("UserToken");
                if (token && chooseUser ) {
                    const { data } = await UserPayoutOption(token, chooseUser);
                    setUserPayOption(data);
                    console.log("profileUserData", data);
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        }
        getUsersPayOptions()
    },[chooseUser])








    const BankAccountDetails:React.FC<BankDetailProp> = ({bankprop}) => (
        <div className='flex flex-col items-start justify-start w-[100%] space-y-[15px] py-[20px]' >
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Account Holder Name</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankprop?.Username}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Account Number</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankprop?.accountNumber}</span> </p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>IFSC Code</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankprop?.IfscCode}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Bank Name</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankprop?.BankName}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Swift Code</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankprop?.SwiftCode}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Mobile Number</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankprop?.ContactNumber}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>user Address</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankprop?.BankAddress}</span></p>
        </div>
    );

    const PayPal:React.FC<BankDetailProp> = ({bankprop}) => (
        <div className='flex flex-col items-start justify-start w-[100%]'>
            <p className='flex items-center justify-between w-[50%] m-auto py-[20px]'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Paypal details</span> <span className='font-normal text-sm leading-tight text-left text-[#37B6FF] cursor-pointer'>{bankprop?.PaypalLink}</span></p>
        </div>


    );

    const OtherPayoutLinks:React.FC<BankDetailProp> = ({bankprop}) => (
        <div className='flex flex-col items-start justify-start w-[100%]'>
        <p className='flex items-center justify-between w-[50%] m-auto py-[20px]'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Other Payout Links</span> <span className='font-normal text-sm leading-tight text-left text-[#37B6FF] cursor-pointer'>{bankprop?.otherPayoutLinks}</span></p>
    </div>
    );
    const categories: Record<OptionCategory, React.FC> = {
        Paypal: PayPal,
        'Bank Account Details': BankAccountDetails,
        'Other Payout Links': OtherPayoutLinks,
    };

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
                    <div className='w-[30%]'>
                    {countries && <Select onValueChange={(value: string) => {
                            setchooseUser(value)
                        }}>
                            <SelectTrigger className="w-full shadow-lg bg-white py-[3px] text-xl">
                                <SelectValue
                                    placeholder={
                                        <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F] mt-[15px]">
                                            Select From List
                                        </p>
                                    }
                                />
                            </SelectTrigger>
                            <SelectContent className="shadow-lg bg-white rounded-[10px]">
                                <SelectGroup className="flex flex-col space-y-2 w-[80%] m-auto">
                                    {
                                        userlist && userlist.map((item:ProfileUserData) => (
                                            <SelectItem
                                                value={item?._id?item?._id:""}
                                                key={item?._id}
                                                className="active:bg-red cursor-pointer"
                                            >
                                                <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F] mt-[15px]">
                                                    {item?.FirstName+" "+item?.LastName}
                                                </p>
                                            </SelectItem>
                                        ))
                                    }

                                </SelectGroup>
                            </SelectContent>
                        </Select>}
                    </div>
                </div>
                <div className='w-[100%] flex gap-2 md:gap-4 mt-[30px] flex-wrap justify-between '>
                    <div className="w-[80%] bg-blue h-[100%] mx-auto">
                     { userpayoption &&  <Tab.Group>
                            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                                {Object.keys(categories).map((category: string) => (
                                    <Tab
                                        key={category}
                                        className={({ selected }: { selected: boolean }) =>
                                            classNames(
                                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-[#1D687F]',
                                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                                selected
                                                    ? 'bg-white text-blue-700 shadow'
                                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                            )
                                        }
                                        onClick={() => setSelectedTab(category)}
                                    >
                                        {category}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2 ">
                                {Object.entries(categories).map(([category, Component]: [OptionCategory, React.FC<BankDetailProp>]) => (
                                    <Tab.Panel
                                        key={category}
                                        className={classNames(
                                            'rounded-xl bg-white p-3',
                                            'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                        )}
                                        hidden={selectedTab !== category}
                                    >
                                        <Component bankprop={userpayoption}  />
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HOC(UserPayOptions)
