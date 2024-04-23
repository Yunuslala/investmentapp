'use client'
import React, { useEffect, useState } from 'react'
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
import { City, Country, IState, State as StateData, ICity } from "country-state-city";
import ProfileComponent from '../UserDashBoard/Account';
import { AllusersData, GetAllCategories, getUserById } from '@/lib/Reducers/api';
import { ProfileUserData } from '../UserDashBoard/UserAccount';
import Account from '../UserDashBoard/Account';
export interface categorytype {
    name: string,
    _id: string,
    created_at: string

}
const AllUser = () => {
    const [categories, setcategories] = useState<categorytype[]>([]);
    const [chosecategory, setchosecategory] = useState<string>("")
    const [countries, setcountries] = useState<string>("");
    let countryData = Country.getAllCountries();
    const [existcountry, setexistCountry] = useState(countryData);
    const [userlist, setuserlist] = useState<ProfileUserData[]>([]);
    const [userdata, setuserData] = useState<ProfileUserData[]>([]);
    const [chooseUser, serchooseUser] = useState<string>("")
    useEffect(() => {
        const getCategory = async () => {
            try {
                const token = localStorage.getItem("UserToken");
                if (token) {
                    const { data } = await GetAllCategories(token);
                    setcategories(data);
                    console.log("profileUserData", data);
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        }
        getCategory()
    }, [])
    useEffect(() => {
        const getuserpercountry = async () => {
            try {
                const token = localStorage.getItem("UserToken");
                if (token) {
                    const { data } = await AllusersData(token, countries);
                    setuserData(data)
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
        const getuserpercountry = async () => {
            try {
                const token = localStorage.getItem("UserToken");
                if (token) {
                    const { data } = await getUserById(token, chooseUser);
                    setuserData(data);
                    console.log("profileUserData", data);
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        }
        getuserpercountry()
    },[chooseUser])

    return (
        <div className='w-[100%] shaddow-lg bg-white  py-[30px]'>
            <div className='w-[90%] flex flex-col items-start justify-start m-auto'>
                <div className='flex items-center justify-between w-[100%] '>
                    <div className='w-[30%]'>
                        <Select onValueChange={(value: string) => setchosecategory(value)} >
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
                                        categories && categories.map((item: {
                                            name: string,
                                            _id: string,
                                            created_at: string

                                        }) => (
                                            <SelectItem
                                                value={item?._id}
                                                className="active:bg-red cursor-pointer"
                                                key={item?._id + item?.created_at}

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
                        {chosecategory && <Select onValueChange={(value: string) => setcountries(value)} >
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
                            serchooseUser(value)
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
                <div className='w-[100%] flex gap-2 md:gap-4 flex-wrap justify-between '>
                    {
                        userdata && userdata.map((item) => (
                            <Account userData={item} key={item?._id ? item?._id : "" + item?.createdAt} />
                        ))
                    }



                </div>
            </div>

        </div>
    )
}

export default HOC(AllUser)
