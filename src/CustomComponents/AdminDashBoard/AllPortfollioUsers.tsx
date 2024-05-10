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
import PortfolioPannel from '../UserDashBoard/PortfolioPannel';
import { Country, State as StateData } from "country-state-city";
import { ProfileUserData } from '../UserDashBoard/UserAccount';
import { AllusersData, GetAllAdminUserPortfollioByCategory, GetAllAdminUserPortfollioByCountry, GetUserAllPortfollio, UserPortfollioById } from '@/lib/Reducers/api';
import { Category } from '@/lib/Reducers/CategorySlice/CategorySlice';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/Reducers/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { InvestOptionIdType, InvestPortData} from '../UserDashBoard/Portfollio';


interface PortCompProp{
    allportdata:InvestPortData
}

const AllPortfollioUsers = () => {
    const [categories,setcategories]=useState<string>("");
    const [countries, setcountries] = useState<string>("");
    let countryData = Country.getAllCountries();
    const [existcountry, setexistCountry] = useState(countryData);
    const [userlist, setuserlist] = useState<ProfileUserData[]>([]);
    const [userdata, setuserData] = useState<ProfileUserData[]>([]);
    const [chooseUser, setchooseUser] = useState<string>("");
    const [AllportfollioData, setAllportfollioData] = useState<InvestPortData[]>([]);
    const { CategoryData }: { CategoryData: Category[] } = useSelector((state: RootState) => state.CategorySlice);

    
    useEffect(() => {
        try {
            const fetchUserPortfollio = async () => {
                const token = localStorage.getItem("UserToken");
                if (token) {
                    const { data } = await GetUserAllPortfollio(token);
                    setAllportfollioData(data);
                
                    
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

                        setAllportfollioData(data);
                    }else{
                          setAllportfollioData([]);
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

    useEffect(() => {
        const getuserpercountry = async () => {
            try {
                const token = localStorage.getItem("UserToken");
                if (token) {
                    const payload={
                        countryName:countries?countries:""
                    }
                    const { data } = await AllusersData(token, countries);
                    setuserData(data)
                    setuserlist(data);
                    console.log("profileUserData", data);
                    const portfolidata = await GetAllAdminUserPortfollioByCountry(token,payload);
                    if(portfolidata.success==true){
                        console.log("dataportfollio",data);

                        setAllportfollioData(portfolidata.data);
                    }else{
                        setAllportfollioData([]);
                        const ErrorToast = () => {
                            toast.error(portfolidata.msg, {
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
        getuserpercountry()
    }, [countries])
    
    useEffect(()=>{
        const getUsersPayOptions = async () => {
            try {
                const token = localStorage.getItem("UserToken");
                if (token && chooseUser ) {
                    const id=chooseUser?chooseUser:""
                    const { data } = await UserPortfollioById(token, id);
                    
                    console.log("profileUserData", data);
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        }
        getUsersPayOptions()
    },[chooseUser])

    useEffect(()=>{
        const getUsersPortfollio = async () => {
            try {
                const token = localStorage.getItem("UserToken");
                if (token ) {
                 
                    const { data } = await GetUserAllPortfollio(token);
                    setAllportfollioData(data)
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
        }
        getUsersPortfollio()
    },[])

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
                <div className='flex flex-col items-start mb-[10px] w-[100%]'>
                {
                    AllportfollioData?.length && AllportfollioData.map((item:any)=>(
                        <UsersIndividualPortfollios allportdata={item} />
                    ))
   
                }
                </div>
               
        
            </div>
            <ToastContainer />

        </div>
    )
}

const UsersIndividualPortfollios:React.FC<PortCompProp>=({allportdata})=>{
 const [ invested,totalInvested]=useState<number>(0)

 useEffect(()=>{
    let total=0;
    console.log("portdta",allportdata)
    allportdata?.InvestOptionId
    // data && data?.InvestOptionId
    allportdata && allportdata?.InvestOptionId?.map((item:InvestOptionIdType ) => {
        total+= Number(item?.paidMoney);

        return
    })
    totalInvested(total);
    
    

 },[allportdata])
    return(
        <>
           <div className='w-[100%] flex flex-col items-start justify-start py-[50px] border-1 border-[#FCB305]]'>
                <div className='flex items-center w-[95%] justify-between m-auto'>
                    <div className='flex items-center justify-between w-[25%]'>
                    <p className='font-bold text-center text-lg leading-7 text-[#FCB305]'>
                                Invested Amount:
                            </p>
                            <p className='font-bold text-center text-lg leading-7 text-[#FCB305]'>
                                ${invested}
                            </p>

                    </div>
                    <div className='flex items-end justify-end w-[40%]'>
                        <p className='font-bold text-center text-lg leading-7 text-[#FCB305]'>{allportdata?.UserId?._id}</p>

                    </div>
                </div>
                <div className='w-[95%]'>
                <PortfolioPannel panelData={allportdata} />
                </div>
               
              


                </div>
        </>
    )
}

export default HOC(AllPortfollioUsers)
