"use client"
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react';
import {  Country, State as StateData } from "country-state-city";
import HOC from '../Layout/HOC'
// const HOC =dynamic(()=>import("../Layout/HOC"))
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AlertCard from './AlertCard';
import { Category } from '@/lib/Reducers/CategorySlice/CategorySlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/Reducers/store';
import {  InvestPortData,  } from '../UserDashBoard/Portfollio';
import { GetAllAdminUserPortfollioByCategory, GetAllAdminUserPortfollioByCountry, GetUserAllPortfollio, GetUserPortfollioByCategory } from '@/lib/Reducers/api';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const InvestmentAlert = () => {
    const [categories, setcategories] = useState<string>("");
    const { CategoryData }: { CategoryData: Category[] } = useSelector((state: RootState) => state.CategorySlice);
    const [countries, setcountries] = useState<string>("");
    let countryData = Country.getAllCountries();
    const [portfollioData, setportfollioData] = useState<InvestPortData[]>([]);
    const [existcountry, setexistCountry] = useState(countryData);
    useEffect(() => {
        try {
            const fetchUserPortfollio = async () => {
                const token = localStorage.getItem("UserToken");
                if (token) {
                    const { data } = await GetUserAllPortfollio(token);
                    setportfollioData(data);
                
                    
                }


            }
            fetchUserPortfollio()


        } catch (error) {

        }
    }, []);
    useEffect(()=>{
        try {
            const fetchUserPortfollio = async () => {
                const token = localStorage.getItem("UserToken");
              
                if (token ) {
                    const payload={
                        CategoryId:categories?categories:""
                    }
                    console.log("categoriesId",payload)
                  
                    const { data,success,msg } = await GetAllAdminUserPortfollioByCategory(token,payload);
                    if(success==true){
                        console.log("dataportfollio",data);

                        setportfollioData(data);
                    }else{
                          setportfollioData([]);
                        const ErrorToast = () => {
                            toast.error(msg, {
                              position:"top-center",
                              autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
                              hideProgressBar: false, // Show the progress bar
                              className: "custom-toast", // Custom class for styling
                            });
                          };
                          ErrorToast();
                    }

                
                
                    
                }


            }
            fetchUserPortfollio()


        } catch (error) {

        }
    },[categories])

    useEffect(()=>{
        try {
            const fetchUserPortfollio = async () => {
                const token = localStorage.getItem("UserToken");
              
                if (token ) {
                    const payload={
                        countryName:countries?countries:""
                    }
                    console.log("categoriesId",payload)
                  
                    const { data,success,msg } = await GetAllAdminUserPortfollioByCountry(token,payload);
                    if(success==true){
                        console.log("dataportfollio",data);

                        setportfollioData(data);
                    }else{
                        setportfollioData([]);
                        const ErrorToast = () => {
                            toast.error(msg, {
                              position:"top-center",
                              autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
                              hideProgressBar: false, // Show the progress bar
                              className: "custom-toast", // Custom class for styling
                            });
                          };
                          ErrorToast();
                    }

                
                
                    
                }


            }
            fetchUserPortfollio()


        } catch (error) {

        }
    },[countries])

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
                                           View As Per Category
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
                                            View As Per Country
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
              <div className='w-[100%] grid grid-cols-2 gap-[15px] gap-r-[10px] py-[60px]'>
              {
               portfollioData?.length && portfollioData?.map((item:InvestPortData, index: number) => (
                    <div  className='w-[100%] mb-[10px] '>
                    <AlertCard carddata={item} />
                  </div>
            
             ))}
              


              </div>
          </div>
          <ToastContainer />

      </div>
  )
}

export default HOC(InvestmentAlert)