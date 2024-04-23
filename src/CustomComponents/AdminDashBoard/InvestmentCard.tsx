'use client'
import React, { useEffect, useState } from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ToastContainer, toast } from 'react-toastify';
import { MDBInput, MDBCheckbox, MDBBtn, MDBFile } from 'mdb-react-ui-kit';
import { RxCrossCircled } from "react-icons/rx";
import { Avatar, SwipeableDrawer } from '@mui/material';
import { MoveRight, Pencil } from 'lucide-react';
import { ScrollShadow } from "@nextui-org/react";
import { Textarea } from '@/components/ui/textarea';
import { Category } from '@/lib/Reducers/CategorySlice/CategorySlice';
import { RootState } from '@/lib/Reducers/store';
import { useSelector } from 'react-redux';
import { RegisteredInvestOptions, UpdateInvestOption } from '@/lib/Reducers/api';
import 'react-toastify/dist/ReactToastify.css';
import { InvestOptionData } from './AllInvestmentOptions';


export interface optionDrawerProp {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    optionData:InvestOptionData
}
interface props {
    cardData:InvestOptionData
}
export const InvestmentCard:React.FC<props> = ({cardData}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer open/close

    const toggleDrawer = (open: boolean) => () => {
        console.log("open", open)
        setIsDrawerOpen(open); // Set the state directly with boolean value
    };

    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="shadow-lg bg-white w-[350px]  py-[30px] rounded-[20px]">
            <div className="flex w-[80%] m-auto flex-col items-start space-y-[10px]">
                <div className="flex w-[100%] items-center justif-between space-x-3 mb-[20px]">
                    <Avatar className="w-[60px] h-[60px]" alt="" src={cardData?.Logo?cardData?.Logo:""} />
                    <h4 className="font-bold text-center text-xl leading-7 tracking-tight text-gray-900">
                        {cardData.CompanyName}
                    </h4>
                    <div className='' >
                        <Pencil className='text-[30px] text-[#37B6FF] cursor-pointer' onClick={toggleDrawer(true)} />
                    </div>
                    <SwipeableDrawer
                        className="w-[300px]"
                        anchor="right" // Set anchor to 'right'
                        open={isDrawerOpen} // Pass the boolean state variable here
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}>
                        <FormDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} investId={cardData._id} updateData={cardData} />
                    </SwipeableDrawer>

                </div>
                <div className="flex gap-2 h-[40px]">
                    <p className="font-bold text-center text-lg leading-7 text-gray-900">
                        BuisnessType:
                    </p>
                    <p className="font-normal text-center text-sm leading-7 text-gray-700">{cardData?.BuisnessType}</p>
                </div>
                <div className="gap-3  ">
                    <div className="flex gap-2 h-[40px]">
                        <p className="font-bold text-center text-lg leading-7 text-gray-900">
                            BuisnessCategory:
                        </p>
                        <p className="font-normal text-center text-sm leading-7 text-gray-700">{cardData?.CategoryId.name}</p>
                    </div>
                    <div className="flex gap-2 h-[40px]">
                        <p className="font-bold text-center text-lg leading-7 text-gray-900">
                            Locking Period:
                        </p>
                        <p className="font-normal text-center text-sm leading-7 text-gray-700">{cardData?.LockingPeriod}</p>
                    </div>
                </div>
                <div className='w-[100%] pt-[20px]'>
                    <div className='flex w-[80%] m-auto py-2 items-center cursor-pointer justify-center space-x-[4px] bg-[#1D687F]' onClick={() => setIsOpen(true)}>
                        <span className="text-white font-bold text-center text-lg leading-7">View More</span>
                        <span> <MoveRight className='text-[30px] text-white' /></span>
                    </div>
                </div>

                {
                    isOpen && <div className='w-full h-[670px] mb-6'>
                        <OptionsDrawer isOpen={isOpen} setIsOpen={setIsOpen} optionData={cardData} />
                    </div>
                }

            </div>

        </div>
    )
}



const OptionsDrawer: React.FC<optionDrawerProp> = ({ isOpen, setIsOpen,optionData }) => {

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}   >
            <DrawerContent className="w-[100%] bg-white flex flex-col py-[30px] items-start justify-start h-[700px]  ">
                <div className="relative w-[100%]  flex flex-col items-start justify-start  ">
                    <div
                        style={{ zIndex: "1" }}
                        className="w-[80%] bg-white mx-auto  flex flex-col items-start justify-start  h-[670px]"
                    >
                        <div
                            style={{ borderBottom: "2px solid #5F5F5F" }}
                            className="flex w-full justify-between py-3 mb-[20px] items-center"
                        >
                            <div>
                                <p className="font-bold text-left text-base leading-5 font-helvetica">
                                    Investment Details
                                </p>
                            </div>
                            <DrawerClose asChild>
                                <div className="cursor-pointer mt-[-2px] mb-1">
                                    <RxCrossCircled
                                        style={{ color: "#37B6FF", fontSize: "25px" }}
                                    />
                                </div>
                            </DrawerClose>
                        </div>
                        <ScrollShadow className='h-[600px] w-[100%] py-[60px] pr-[20px]'>
                            <div className='flex flex-col items-start justify-start w-[100%] space-y-[10px]'>
                                <div className="w-[100%] flex items-center justify-between ">
                                    <video className="w-[40%] h-[242px] rounded-lg" controls>
                                        <source src={optionData?.VideoMessage?optionData?.VideoMessage:"https://www.shutterstock.com/shutterstock/videos/1105565351/preview/stock-footage-african-american-financial-analyst-works-in-broker-agency-office-d-abstract-ai-animation-of-real.webm"} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    <div className='w-[20%] flex flex-col  items-start justify-start'>
                                        <div className='flex w-[100%] mx-auto mt-[30px] py-2 items-center cursor-pointer justify-center space-x-[4px] bg-[#1D687F]' >
                                            <span className="text-white font-bold text-center text-lg leading-7">Download Pdf </span>

                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col items-start justify-start w-[100%] py-[10px]'>
                                    <p className="font-bold text-xl leading-7 text-left text-[#000000]">{optionData.CompanyName}</p>
                                </div>
                                <div className='flex gap-2  w-[30%] justify-between pb-[10px]'>
                                <Avatar className="w-[60px] h-[60px]" alt="" src={optionData?.Logo?optionData?.Logo:""} />

                                    <p className="font-normal text-center text-sm leading-7 text-[#000000]">{optionData?.BuisnessType}</p>
                                    <p className="font-normal text-center text-sm leading-7 text-[#000000]">{optionData?.CategoryId.name}</p>

                                </div>
                                <div className='flex items-center justif-between w-[70%]'>
                                    <div className='flex gap-2  w-[40%]'>
                                        <p className="font-bold text-center text-lg leading-7 text-gray-900">
                                            BuisnessCategory:
                                        </p>
                                        <p className="font-normal text-center text-sm leading-7 text-gray-700">{optionData?.CategoryId.name}</p>
                                    </div>
                                    <div className='flex gap-2  w-[40%]'>
                                        <p className="font-bold text-center text-lg leading-7 text-gray-900">
                                            BuisnessCategory:
                                        </p>
                                        <p className="font-normal text-center text-sm leading-7 text-gray-700">{optionData?.CategoryId.name}</p>
                                    </div>
                                </div>
                                <div className='flex items-center justif-between w-[70%]'>
                                    <div className='flex gap-2  w-[40%]'>
                                        <p className="font-bold text-center text-lg leading-7 text-gray-900">
                                            Investment Size:
                                        </p>
                                        <p className="font-normal text-center text-sm leading-7 text-gray-700">{`${optionData?.InvestmentSizeMin} to ${optionData?.InvestmentSizeMax} `}</p>
                                    </div>
                                    <div className='flex gap-2  w-[40%]'>
                                        <p className="font-bold text-center text-lg leading-7 text-gray-900">
                                            Locking Period:
                                        </p>
                                        <p className="font-normal text-center text-sm leading-7 text-gray-700">{optionData?.LockingPeriod}</p>
                                    </div>
                                </div>
                                <div className='flex items-center justif-between w-[70%]'>
                                    <div className='flex gap-2  w-[40%]'>
                                        <p className="font-bold text-center text-lg leading-7 text-gray-900">
                                            Payouts Type:
                                        </p>
                                        <p className="font-normal text-center text-sm leading-7 text-gray-700">{optionData?.Payouts}</p>
                                    </div>
                                    <div className='flex gap-2  w-[40%]'>
                                        <p className="font-bold text-center text-lg leading-7 text-gray-900">
                                            Return Rate:
                                        </p>
                                        <p className="font-normal text-center text-sm leading-7 text-gray-700">{`Base ${optionData?.ReturnRateMin} Up ${optionData?.ReturnRateMax}`} </p>
                                    </div>
                                </div>
                                <div className='flex items-center justif-between w-[70%]'>
                                    <div className='flex gap-2  w-[30%]'>
                                        <p className="font-bold text-center text-lg leading-7 cursor-pointer text-[#37B6FF]">
                                            {optionData?.WebsiteLink}
                                        </p>

                                    </div>
                                    <div className='flex gap-2  w-[50%]'>
                                        <p className="font-normal text-center text-lg leading-7 text-gray-900">
                                            {optionData?.HashTags}
                                        </p>

                                    </div>
                                </div>
                                <div className='flex flex-col w-[100%] items-start justify-start'>
                                    <p className="font-normal text-sm leading-5 text-left text-[#5F5F5F]">
                                        {optionData?.AboutCompany}
                                    </p>
                                </div>
                                <div className='flex flex-col w-[100%] items-start justify-start'>
                                    <p className="font-normal text-sm leading-5 text-left text-[#5F5F5F]">
                                      {optionData?.OperationsOfCompany}
                                    </p>
                                </div>
                            </div>
                            <div className=''>
                            </div>
                        </ScrollShadow>
                    </div>
                </div>
            </DrawerContent>

        </Drawer>
    )
}

export interface handleclosetype {
    toggleDrawer: (open: boolean) => React.MouseEventHandler<HTMLDivElement> | undefined;
    isDrawerOpen: boolean,
    investId?:string,
    updateData?:InvestOptionData
}

export const FormDrawer: React.FC<handleclosetype> = ({ isDrawerOpen, toggleDrawer,investId,updateData }) => {
    const { CategoryData }: { CategoryData: Category[] } = useSelector((state: RootState) => state.CategorySlice);
    const [CategoryId, setCategoryId] = useState<string>("");
    const [CompanyName, setCompanyName] = useState<string>("");
    const [AboutCompany, setAboutCompany] = useState<string>("");
    const [HashTags, setHashTags] = useState<string>("");
    const [WebsiteLink, setWebsiteLink] = useState<string>("");
    const [investmentSizeMin, setinvestmentSizeMin] = useState<string>();
    const [investmentSizeMax, setinvestmentSizeMax] = useState<string>();
    const [ReturnRateMin, setReturnRateMin] = useState<string>();
    const [ReturnRateMax, setReturnRateMax] = useState<string>();
    const [LockingPeriod, setLockingPeriod] = useState<string>("");
    const [imagePath, setimagePath] = useState<File | null>(null);
    const [videoPath, setvideoPath] = useState<File | null>(null);
    const [pdfPath, setpdfPath] = useState<File | null>(null);
    const [operationsOfCompany, setoperationsOfCompany] = useState<string>("");
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleCheckboxChange = (value: string) => {
        setSelectedOption(value === selectedOption ? null : value);
    };
    
    const handleClose = () => {
        console.log("object")
        toggleDrawer(false); // Call toggleDrawer when the element is clicked
    };
    useEffect(() => {

    }, [isDrawerOpen])
    const handleCategory = (category: string) => {
        const [id, name] = category.split(" ");
        console.log("ID:", id);
        console.log("Name:", name);
        setCategoryId(id);

    }
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('CategoryId', CategoryId);
        formData.append('CompanyName', CompanyName);
        formData.append('AboutCompany', AboutCompany);
        formData.append('HashTags', HashTags);
        formData.append('WebsiteLink', WebsiteLink);
        formData.append('InvestmentSizeMin', investmentSizeMin ?? "");
        formData.append('InvestmentSizeMax', investmentSizeMax ?? "");
        formData.append('ReturnRateMin', ReturnRateMin ?? "");
        formData.append('ReturnRateMax', ReturnRateMax ?? "");
        formData.append('LockingPeriod', LockingPeriod);
        formData.append("operationsOfCompany",operationsOfCompany);
        // Append files if they are not null
        if (imagePath) {
          formData.append('image', imagePath);
        }
        if (videoPath) {
          formData.append('video', videoPath);
        }
        if (pdfPath) {
          formData.append('pdf', pdfPath);
        }
        
        // Append selected option if it's not null
        if (selectedOption) {
          formData.append('Payouts', selectedOption);
        }
        try {
            const token = localStorage.getItem("UserToken");
            if (token) {
                const { data,msg,success } = await RegisteredInvestOptions(formData, token);
                console.log("profileUserData", data);
                if(success){
                    const ErrorToast = () => {
                        toast.success(msg, {
                          position:"top-center",
                          autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
                          hideProgressBar: false, // Show the progress bar
                          className: "custom-toast", // Custom class for styling
                        });
                      };
                      ErrorToast();
                }else{
                    const ErrorToast = () => {
                        toast.error("error in registering", {
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
    const handleUpdateSubmit = async (e:any) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('CategoryId', CategoryId);
        formData.append('CompanyName', CompanyName);
        formData.append('AboutCompany', AboutCompany);
        formData.append('HashTags', HashTags);
        formData.append('WebsiteLink', WebsiteLink);
        formData.append('InvestmentSizeMin', investmentSizeMin ?? "");
        formData.append('InvestmentSizeMax', investmentSizeMax ?? "");
        formData.append('ReturnRateMin', ReturnRateMin ?? "");
        formData.append('ReturnRateMax', ReturnRateMax ?? "");
        formData.append('LockingPeriod', LockingPeriod);
        formData.append("operationsOfCompany",operationsOfCompany);
        // Append files if they are not null
        if (imagePath) {
          formData.append('image', imagePath);
        }
        if (videoPath) {
          formData.append('video', videoPath);
        }
        if (pdfPath) {
          formData.append('pdf', pdfPath);
        }
        
        // Append selected option if it's not null
        if (selectedOption) {
          formData.append('Payouts', selectedOption);
        }
        try {
            const token = localStorage.getItem("UserToken");
            if (token) {
                const id=investId?investId:"";
                const { data,msg,success } = await UpdateInvestOption(formData,id,token );
                console.log("profileUserData", data);
                if(success){
                    const ErrorToast = () => {
                        toast.success(msg, {
                          position:"top-center",
                          autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
                          hideProgressBar: false, // Show the progress bar
                          className: "custom-toast", // Custom class for styling
                        });
                      };
                      ErrorToast();
                }else{
                    const ErrorToast = () => {
                        toast.error("error in registering", {
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

    return (
        <div className='w-[100%] py-[20px]'>
            <div className='w-[80%] m-auto'>
                <div className="flex w-[60%] justify-between  items-center">
                    <div
                        onClick={toggleDrawer(false)}
                        className="cursor-pointer"
                    >
                        <RxCrossCircled style={{ color: " #37B6FF", fontSize: "25px" }} />
                    </div>
                    <div className=''>
                        <p className="font-bold text-center text-xl leading-7 tracking-tight text-gray-900 mt-[5px]">Add Investment</p>
                    </div>
                </div>
            </div>
            <form className="w-[90%] p-4 m-auto ">
                <MDBInput className='mb-4' id='form5Example1' label={updateData?.CompanyName?updateData?.CompanyName:'Company Name'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)} />
                <MDBInput className='mb-4' id='form5Example2' label={updateData?.BuisnessType?updateData?.BuisnessType:'Business Type'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAboutCompany(e.target.value)} />

                <div className="mb-4">
                    <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleCategory(e.target.value)} className='w-[325px] p-[10px] border border-gray-900'>
                        <option value="" className='mb-[5px]'>select Category</option>
                        {CategoryData && CategoryData.map((item) => (
                            <option value={item?._id + " " + item.name} className='mb-[5px]'>{item?.name}</option>
                        ))}

                    </select>
                </div>

                <MDBInput className='mb-4' id='form5Example2' label={updateData?.LockingPeriod?updateData.LockingPeriod:'Locking Period'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLockingPeriod(e.target.value)} />
                <MDBInput className='mb-4' id='form5Example1' label={updateData?.ReturnRateMin?updateData?.ReturnRateMin:'Return Rate Base'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReturnRateMin(e.target.value)} />
                <MDBInput className='mb-4' id='form5Example2' label={updateData?.ReturnRateMax?updateData?.ReturnRateMax:'Reurn Rate Maximum'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setReturnRateMax(e.target.value)} />
                <MDBInput className='mb-4' id='form5Example2' label={updateData?.WebsiteLink?updateData?.WebsiteLink:'Website Link'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWebsiteLink(e.target.value)} />
                <MDBInput className='mb-4' id='form5Example2' label={updateData?.HashTags?updateData?.HashTags:'Website Hastags'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHashTags(e.target.value)} />


                <p>Payout options</p>
                <MDBCheckbox
                    name='inlineCheck'
                    id='inlineCheckbox1'
                    value='Yearly'
                    label='Yearly'
                    inline
                    checked={selectedOption === 'Yearly'}
                    onChange={() => handleCheckboxChange('Yearly')}
                />
                <MDBCheckbox
                    name='inlineCheck'
                    id='inlineCheckbox2'
                    value='Half-Yearly'
                    label='Half-Yearly'
                    inline
                    checked={selectedOption === 'Half-Yearly'}
                    onChange={() => handleCheckboxChange('Half-Yearly')}
                />
                <MDBCheckbox
                    name='inlineCheck'
                    id='inlineCheckbox3'
                    value='Quarterly'
                    label='Quarterly'
                    inline
                    checked={selectedOption === 'Quarterly'}
                    onChange={() => handleCheckboxChange('Quarterly')}
                />
                <MDBInput className='mb-4' id='form5Example2' label={updateData?.InvestmentSizeMin?updateData?.InvestmentSizeMin:'Investment Size Min'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setinvestmentSizeMin(e.target.value)} />
                <MDBInput
  className='mb-4'
  id='form5Example2'
  label={updateData?.InvestmentSizeMax?updateData?.InvestmentSizeMax:'Investment Size Max'}
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setinvestmentSizeMax(e.target.value)}
/>

<MDBFile
  label='upload Video Message'
  id='customFile1'
  className='mb-4'
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setvideoPath(file);
    }
  }}
/>

<MDBFile
  label='Company logo'
  id='customFile2'
  className='mb-4'
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setimagePath(file);
  }}
/>

<MDBFile
  label='upload pdfs'
  id='customFile3'
  className='mb-4'
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setpdfPath(file);
    }
  }}
/>

                <Textarea className="w-full h-[160px] my-[10px]" placeholder={updateData?.AboutCompany?updateData?.AboutCompany:"Write about company Here......" }onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAboutCompany(e.target.value)} />
                <Textarea className="w-full h-[160px]" placeholder={updateData?.OperationsOfCompany?updateData?.OperationsOfCompany:"Write about operations of company......"} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setoperationsOfCompany(e.target.value)} />
                <MDBCheckbox
                    wrapperClass='d-flex justify-content-center mb-4'
                    id='form5Example3'
                    label='I have read and agree to the terms'
                    defaultChecked
                />
                <MDBBtn type='submit' block onClick={investId?handleUpdateSubmit:handleSubmit}>
                    {investId?"update":"Submit"}
                </MDBBtn>
            </form>
            <ToastContainer />
        </div>
    )
}

