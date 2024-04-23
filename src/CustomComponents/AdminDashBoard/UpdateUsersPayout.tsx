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
import Account from '../UserDashBoard/Account';
import ProfileComponent from '../UserDashBoard/Account';
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { City, Country, IState, State as StateData, ICity } from "country-state-city";
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/Reducers/store';
import { Category } from '@/lib/Reducers/CategorySlice/CategorySlice';
import { ProfileUserData } from '../UserDashBoard/UserAccount';
import { AllusersData, UpdatePayOptions } from '@/lib/Reducers/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

const UpdateUsersPayout = () => {
    const [categories, setcategories] = useState<string>("");
    const [countries, setcountries] = useState<string>("");
    const [userlist, setuserlist] = useState<ProfileUserData[]>([]);
    let countryData = Country.getAllCountries();
    const [existcountry, setexistCountry] = useState(countryData);
    const [chooseUser, setchooseUser] = useState<string>("")
    const { CategoryData }: { CategoryData: Category[] } = useSelector((state: RootState) => state.CategorySlice);
    console.log("AllInvestOptions", CategoryData);
    const [DateOfPayoutIssued,setDateOfPayoutIssued]=useState<Date | null>(null);
    const [AmountTransfered,setAmountTransfered]=useState<string>("");
    const [TransactionType,setTransactionType]=useState<string>("");
    const [CurrentReturnRate,setCurrentReturnRate]=useState<string>("");
    const router=useRouter()
    useEffect(()=>{
       
        const fetchAllData = async () => {
         
        }
        fetchAllData()

    },[chooseUser])
  
    useEffect(()=>{
        const getuserpercountry = async () => {
            try {
                const token = localStorage.getItem("UserToken");
                if (token) {
                    const { data } = await AllusersData(token, countries);
                    setuserlist(data);
                    console.log("profileUserData", data);
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        }
        getuserpercountry()
    },[countries])
    const handleSubmit=async(e:any)=>{
        e.preventDefault();
        console.log("choseuserAdded")
        try {
            const token = localStorage.getItem("UserToken");
            if (token ) {
                const obj={
                    DateOfPayoutIssued:DateOfPayoutIssued?DateOfPayoutIssued:"",
                    AmountTransfered,
                    TransactionType,
                    CurrentReturnRate,
                    CategoryId:categories,
                    SelectId:chooseUser
                }
                const { data,success,msg } = await UpdatePayOptions(token,obj);
                if(success==true){
                    const ErrorToast = () => {
                        toast.success(msg, {
                          position:"top-center",
                          autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
                          hideProgressBar: false, // Show the progress bar
                          className: "custom-toast", // Custom class for styling
                        });
                      };
                      ErrorToast();
                     router.refresh()
                }else{
                    const ErrorToast = () => {
                        toast.error("error in signup please fill credentials carefully", {
                          position:"top-center",
                          autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
                          hideProgressBar: false, // Show the progress bar
                          className: "custom-toast", // Custom class for styling
                        });
                      };
                      ErrorToast();
                }
             
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }

    }
    const handleDateChange = (date: Date | null) => {
        setDateOfPayoutIssued(date); // Update state with the selected date
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
                <div className='w-[100%] flex gap-2 md:gap-4 flex-wrap mt-[40px] justify-between '>
                    <form className="w-[60%] p-4 m-auto">
                        <LocalizationProvider dateAdapter={AdapterDayjs}  >
                            <DatePicker label="Date of Payout issued" className="w-[100%] mb-4" onChange={handleDateChange}  />
                        </LocalizationProvider>
                        <MDBInput className='mb-4 py-2' id='form5Example2' label='Amount Transfer' onChange={((e:any)=>setAmountTransfered(e.target.value))} />
                        <MDBInput className='mb-4 py-2' id='form5Example1' label='Transaction Type' onChange={((e:any)=>setTransactionType(e.target.value))} />
                        <MDBInput className='mb-4 py-2' id='form5Example2' label='Curent Return Rate' onChange={((e:any)=>setCurrentReturnRate(e.target.value))} />
                        <MDBBtn type='submit' block onClick={(e:any)=>handleSubmit(e)}>
                            Update
                        </MDBBtn>
                    </form>
                </div>
                <ToastContainer />
            </div>

        </div>
    )
}

export default HOC(UpdateUsersPayout)
