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
import { Textarea } from '@/components/ui/textarea';
import { City, Country, IState, State as StateData, ICity } from "country-state-city";
import { categorytype } from './AllUser';
import { ProfileUserData } from '../UserDashBoard/UserAccount';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/Reducers/store';
import { Category } from '@/lib/Reducers/CategorySlice/CategorySlice';
import { Forwardmessages } from '@/lib/Reducers/api';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const Messages = () => {
    const [categories, setcategories] = useState<string>("");
    const [chosecategory, setchosecategory] = useState<string>("")
    const [countries, setcountries] = useState<string>("");
    let countryData = Country.getAllCountries();
    const [existcountry, setexistCountry] = useState(countryData);
    const { CategoryData }: { CategoryData: Category[] } = useSelector((state: RootState) => state.CategorySlice);
    const [sendmessage,setsendmessage]=useState<string>("");
    console.log("AllInvestOptions", CategoryData); 
   const sendMessageData=async(e:any)=>{
    e.preventDefault();
    console.log("usermessages")
    let sendTo="sendall";
    if(categories){
        sendTo="SendPerCategory"
    }else if(countries){
        sendTo="sendPerCountry"
    }
    try {
        const token = localStorage.getItem("UserToken");
        if (token ) {
            const payload={
                CategoryId:categories,
                Country:countries,
                sendTo,
                message:sendmessage
            }
            const { data,msg,success } = await Forwardmessages(token, payload);
           if(success==true){
            Store.addNotification({
                title: "Login Notification",
                message: msg,
                type: "success",
                insert: "top",
                container: "top-center",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
           }else{
            Store.addNotification({
                title: "Login Notification",
                message:"error in sending messages",
                type: "danger",
                insert: "top",
                container: "top-center",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
           }
            console.log("profileUserData", data);
        }
    } catch (error) {
        console.error("Error fetching user profile:", error);
    }
   }

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
                     <Select onValueChange={(value: string) => setcountries(value)} >
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
                        </Select>
                                       
                     </div>

                </div>
                <div className='w-[100%] flex flex-col items-start justify-start py-[50px]'>
                </div>
            </div>
            <div className='flex flex-col space-y-[20px] py-[30px]' >
                <Textarea className='w-[80%] h-[200px] mx-auto shadow-lg rounded-[10px] bg-white'onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setsendmessage(e.target.value)} />
                <div className='flex w-[40%] mx-auto py-2 items-center cursor-pointer justify-center space-x-[4px] bg-[#1D687F]' onClick={sendMessageData}>
                    <span className="text-white font-bold text-center text-lg leading-7" >Send Message</span>

                </div>
            </div>
            <ReactNotifications />
        </div>

    )
}

export default HOC(Messages)