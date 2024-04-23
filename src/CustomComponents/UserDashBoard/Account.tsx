
"use client"
import dynamic from 'next/dynamic'
import HOC, { logUserType } from '../Layout/HOC'
import { Avatar } from '@mui/material'
// const HOC =dynamic(()=>import("../Layout/HOC"))
import React, { useEffect, useState } from 'react'
import 'react-notifications-component/dist/theme.css'
import "./Account.css"
export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

interface ProfileUserData  extends logUserType{
    avatar?:string,
    Status:string,
    Locality:string
}

interface logindatatype{
    password?:string,
    email?:string
}

const emails = ['username@gmail.com', 'user02@gmail.com'];
interface Props {
    userData?: ProfileUserData;
}

const Account:React.FC<Props> = ({userData}) => {
        const [open, setOpen] = React.useState(false);
        const [isHovered, setIsHovered] = useState<boolean>(false);
        
       
        return (
            <div  className="w-[40%] shadow-lg  mx-auto mt-[80px]  bg-[#FCB305]">
                <div className='relative w-[100%] '>
                    <div className='absolute account-avtar top-[-30px] left-[45%]' onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <div className="relative cursor-pointer">
                            <Avatar className="w-[90px] h-[90px] object-center object-cover" alt="Remy Sharp" src={userData?.avatar?userData.avatar:"https://randomuser.me/api/portraits/men/79.jpg"} />
                        </div>
                    </div>
                    <div className='w-[45%] mx-auto flex flex-col space-y-[6px] items-center justify-center pt-[100px] pb-[40px]'>
                        <p className="font-bold text-center text-2xl leading-7 text-white">{userData?.Status && userData?.Status}</p>
                        <p className="font-bold text-center text-lg leading-7 text-white">{userData && userData?.FirstName+" "+userData?.LastName}</p>
                        <p className="font-normal text-center text-sm leading-7 text-white">{userData && userData.Locality+","+userData?.City+","+userData?.State+","+userData?.Country}</p>
                        <p className="font-normal text-center text-sm leading-7 text-white">{userData && userData?.email}</p>
                        <p className="font-normal text-center text-sm leading-7 text-white">{userData && userData?.Contact}</p>
                        <p className="font-normal text-center text-sm leading-7 text-white">{userData && userData?.createdAt?.toString()}</p>
                    </div>
                </div>

            </div>
        )
    
    
}



export default Account

