'usee client'
import { useEffect, useState } from "react";
import React from 'react'
import PortfollioCard from './PortfollioCard';
import { GetUserPortfollioByCategory } from "@/lib/Reducers/api";
import { InvestPortfollioOptionType } from "./Portfollio";
import { categorytype } from "../AdminDashBoard/AllUser";
export interface IndustryCategory {
    name: string;
    image: string;
    money: string;
    date: string;
    period: string;
}
interface panelProp{
    panelData:InvestPortfollioOptionType[]
}

const PortfolioPannel:React.FC<panelProp> = ({panelData}) => {
    const [sideData, setSideData] = useState<IndustryCategory | null>(
        {
            name: "energy limited",
            image: "energy limited",
            money: "3000",
            date: "22-02-2023",
            period: "2 month",
        }
    ); // Initialize sideData as null
    const [isSideDivOpen, setIsSideDivOpen] = useState(false); // Track whether SideDiv is open or closed
    const  [category,setCategory]=useState<string>("");
    const [userId,setUserId]=useState<string>("");
    const [portfolicategory,setportfoliocategory]=useState<categorytype[]>([]);
    const [carddata,setCarddata]=useState<InvestPortfollioOptionType>({})
    const handleSectorClick = (item:string) => {
       setCategory(item)
        setIsSideDivOpen(true); // Set isSideDivOpen to true when SideDiv is opened

    };
    const industries: IndustryCategory[] = [
        {
            name: "energy limited",
            image: "energy limited",
            money: "3000",
            date: "22-02-2023",
            period: "2 month",
        },
        {
            name: "Education",
            image: "energy limited",
            money: "3000",
            date: "22-02-2023",
            period: "2 month",
        },
        {
            name: "limited",
            image: "energy limited",
            money: "3000",
            date: "22-02-2023",
            period: "2 month",
        },
        {
            name: "energy limited",
            image: "energy limited",
            money: "3000",
            date: "22-02-2023",
            period: "2 month",
        },
        {
            name: "energy limited",
            image: "energy limited",
            money: "3000",
            date: "22-02-2023",
            period: "2 month",
        },
        {
            name: "energy limited",
            image: "energy limited",
            money: "3000",
            date: "22-02-2023",
            period: "2 month",
        },
        {
            name: "energy limited",
            image: "energy limited",
            money: "3000",
            date: "22-02-2023",
            period: "2 month",
        },
        {
            name: "energy limited",
            image: "energy limited",
            money: "3000",
            date: "22-02-2023",
            period: "2 month",
        }
    ]
    useEffect(() => {
        console.log("objectrepeat")
        console.log("pandeldata",panelData)
        const userid = panelData[0]?.UserId?._id;
        const catid = panelData[0]?.CategoryId?._id || ""; // Handle null or undefined
        setUserId(userid);
        setCategory(catid);
        
        if (panelData) {
            const newData = panelData.map((item) => item?.CategoryId);
            console.log("newdata",newData)
            setportfoliocategory(newData);
        }
    }, [panelData]);

    console.log("portfolio",portfolicategory)
    
    useEffect(()=>{
    const fetchByCategory=async()=>{
        const token=localStorage.getItem("UserToken");
        if(token && userId && category){
            const payload={
                CategoryId:category?category:"1"
            }
            const {data}=await GetUserPortfollioByCategory(token,userId,payload);
            setCarddata(data);
        }

    }
    fetchByCategory()
    },[category])
  return (
    <div className="w-[95%] flex items-center justify-between mx-auto mt-[40px]  ">
                <div className="flex w-[40%]  flex-col justify-start items-start space-y-6">
                    <div className="flex w-[100%]  flex-col justify-start items-start">
                        <div className="flex w-[100%] justify-start my-2 ">
                            <p className="font-Bold text-black text-xl leading-7 tracking-normal text-left">Categories Of Investment</p>
                        </div>
                        <div className="flex gap-2 md:gap-4 flex-wrap">
                            {portfolicategory && portfolicategory?.map((item, i) => (
                                <button
                                    key={i}
                                    className="py-1.5 md:py-2 px-3 md:px-4 rounded-lg bg-white border-2 transition-all hover:border-gray-400 text-sm md:text-base focus-visible:border-black font-medium"
                                    onClick={() => handleSectorClick(item._id)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
                {
                    carddata && <PortfollioCard
                  
                    carddata={carddata}
                    isOpen={isSideDivOpen}
                    onClose={() => setIsSideDivOpen(false)} 

                     />
                }
            </div>
  )
}

export default PortfolioPannel
