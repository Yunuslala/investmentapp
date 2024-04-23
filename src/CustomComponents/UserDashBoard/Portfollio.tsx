"use client"
import dynamic from 'next/dynamic'
import React from 'react'
import HOC from '../Layout/HOC'
// const HOC =dynamic(()=>import("../Layout/HOC"))
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import { BsShieldPlus } from "react-icons/bs";
import { useEffect, useState } from "react";
import { HandCoins, ShieldMinus } from 'lucide-react';
import PortfolioPannel from './PortfolioPannel';
import { UserPortfollio } from '@/lib/Reducers/api';
import { categorytype } from '../AdminDashBoard/AllUser';
interface InvestOption {
    _id: string;
    CompanyName: string;
    Logo: string;
    VideoMessage: string;
    Documents?: string;
    CategoryId: string;
    AboutCompany: string;
    HashTags: string;
    WebsiteLink: string;
    InvestmentSizeMin: string;
    InvestmentSizeMax: string;
    LockingPeriod: string;
    Payouts: string;
    ReturnRateMin: string;
    ReturnRateMax: string;
    isDeleted: boolean;
    createdAt: string;
    __v: number;
    BuisnessType?: string;
    OperationsOfCompany?: string;
}

interface User {
    _id: string;
    Country: string;
    State: string;
    Locality: string;
    Status: string;
    City: string;
    zip: string;
    Intrests: any[]; // You might want to define a specific type for interests
    FirstName: string;
    MiddleName: string;
    LastName: string;
    email: string;
    Contact: string;
    IdCard: string;
    role: string;
    createdAt: string;
    __v: number;
}



export interface InvestPortfollioOptionType {
    _id: string;
    InvestOptionId: InvestOption;
    UserId: User;
    CategoryId: categorytype;
    paidMoney: string;
    isActivated: Boolean;
    __v: number;
    createdAt: string;
}

// const data: InvestPortfollioOptionType[] = [
//     {
//         "_id": "662525f2fa6fbf842944cdaa",
//         "InvestOptionId": {
//             "_id": "66230b6dfdb853dd215ef9a4",
//             "CompanyName": "dummy company",
//             "Logo": "https://res.cloudinary.com/dzvbykaxd/image/upload/v1713572713/eyjuoga6ffxhuhkojei5.jpg",
//             "VideoMessage": "https://res.cloudinary.com/dzvbykaxd/video/upload/v1713572715/ro2v2h9jphzhaq6nudig.mp4",
//             "Documents": "https://res.cloudinary.com/dzvbykaxd/image/upload/v1713570449/pdfs/dummy.pdf",
//             "CategoryId": "66224fd93017a517a171ce28",
//             "AboutCompany": "this is about compnay",
//             "HashTags": "# hashtags",
//             "WebsiteLink": "www.google.com",
//             "InvestmentSizeMin": "20",
//             "InvestmentSizeMax": "10",
//             "LockingPeriod": "10 months",
//             "Payouts": "Half-Yearly",
//             "ReturnRateMin": "20",
//             "ReturnRateMax": "30",
//             "isDeleted": false,
//             "createdAt": "2024-04-20T00:25:17.664Z",
//             "__v": 0
//         },
//         "UserId": {
//             "_id": "662252cd3017a517a171ce50",
//             "Country": "India",
//             "State": "Uttar Pradesh",
//             "Locality": "kareli",
//             "Status": "Beginner",
//             "City": "Allahabad",
//             "zip": "12202",
//             "Intrests": [],
//             "FirstName": "Mohd",
//             "MiddleName": "",
//             "LastName": "saif",
//             "email": "kingbnl19@gmail.com",
//             "Contact": "9696510765",
//             "IdCard": "https://res.cloudinary.com/dzvbykaxd/image/upload/v1713525453/E-Commerce/images/Users/ordmihwcbmpsb4jod56j.jpg",
//             "role": "user",
//             "createdAt": "2024-04-19T11:17:33.647Z",
//             "__v": 0
//         },
//         "__v": 0
//     },
//     // Include other objects here...
// ];


const portfollio = () => {
    const [portfollioData, setportfollioData] = useState<InvestPortfollioOptionType[]>([]);
    const [totalInvested, settotalInvested] = useState<number>(0);
    const [activeInvest, setactiveInvest] = useState<number>(0);
    const [deactiveInvest, setdeactiveInvest] = useState<number>(0);


    useEffect(() => {
        try {
            const fetchUserPortfollio = async () => {
                const token = localStorage.getItem("UserToken");
                if (token) {
                    const { data } = await UserPortfollio(token);
                    setportfollioData(data);
                    let total=0;
                    let active=0;
                    let deactive=0;
                    data && data?.map((item: InvestPortfollioOptionType) => {
                        total+= Number(item?.paidMoney);

                        if (item?.isActivated == true) {
                          active++
                        } else {
                           deactive++
                        }
                        return
                    })
                    settotalInvested(total);
                    setactiveInvest(active);
                    setdeactiveInvest(deactive);
                    
                }


            }
            fetchUserPortfollio()


        } catch (error) {

        }
    }, [])

    return (
        <div className='w-full flelx flex-col items-start '>
            <div className='w-[95%] m-auto'>
                <div className='flex justify-between items-center w-[100%]'>
                    <div className='w-[30%] py-[20px] px-[15px]  flex justify-between items-center bg-[#29cccc] cursor-pointer'>
                        <div className='w-[84%] flex flex-col items-start justify-start'>
                            <p className='font-bold text-center text-lg leading-7 text-white'>
                                Active Invested Amount
                            </p>
                            <p className='font-bold text-center text-lg leading-7 text-white'>
                                ${totalInvested && totalInvested}
                            </p>
                        </div>
                        <div className='w-[40px] h-[40px]  flex items-center jusitfy-center object-cover rounded-[50%]'>
                            <HandCoins className='' style={{ color: 'white', fontSize: "30px" }} />
                        </div>


                    </div>
                    <div className='w-[30%] py-[20px] px-[15px]  flex justify-between items-center bg-[#cc3399] cursor-pointer '>
                        <div className='w-[84%] flex flex-col items-start justify-start'>
                            <p className='font-bold text-center text-lg leading-7 text-white'>
                                Subscriptions Active
                            </p>
                            <p className='font-bold text-center text-lg leading-7 text-white'>
                                {activeInvest && activeInvest}
                            </p>
                        </div>
                        <div className='w-[40px] h-[40px]  object-cover   rounded-[50%] '>
                            <BsShieldPlus className='pl-[3px]' style={{ color: 'white', fontSize: "30px" }} />
                        </div>


                    </div>
                    <div className='w-[30%] py-[20px] px-[15px]  flex justify-between items-center bg-[#cc3300] cursor-pointer'>
                        <div className='w-[84%] flex flex-col items-start justify-start'>
                            <p className='font-bold text-center text-lg leading-7 text-white'>
                                Subscriptions Deactivated
                            </p>
                            <p className='font-bold text-center text-lg leading-7 text-white'>
                                {deactiveInvest && deactiveInvest}
                            </p>
                        </div>
                        <div className='w-[40px] h-[40px] object-cover rounded-[50%] '>
                            <ShieldMinus className='text-[40px]' style={{ color: 'white' }} />
                        </div>



                    </div>
                </div>
                <PortfolioPannel panelData={portfollioData} />
            </div>

        </div>
    )
}

export default HOC(portfollio)