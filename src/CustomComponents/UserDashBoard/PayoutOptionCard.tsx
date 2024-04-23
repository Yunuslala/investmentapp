'use client'
import React, { useEffect, useState } from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { MDBInput, MDBCheckbox, MDBBtn, MDBFile, MDBRadio, MDBIcon } from 'mdb-react-ui-kit';
import { RxCrossCircled } from "react-icons/rx";
import { Avatar, SwipeableDrawer } from '@mui/material';
import { Eye, MoveRight, Pencil } from 'lucide-react';
import { ScrollShadow } from "@nextui-org/react";
import { Textarea } from '@/components/ui/textarea';
import { InvestOptionData } from '../AdminDashBoard/AllInvestmentOptions';
import { Asul } from 'next/font/google';
import Dialog from '@mui/material/Dialog';
import { subscribeInvestOption } from '@/lib/Reducers/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCcPaypal } from "react-icons/fa";
interface PaymentDialogProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    InvestmentMin:string,
    InvestmentMax:string,
    onClose: (value: string) => void;
    InvestId:string
}
export interface optionDrawerProp {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    optionData: InvestOptionData,

}
interface props {
    cardData: InvestOptionData
}
export const PayoutOptionCard: React.FC<props> = ({ cardData }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer open/close
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (value: string) => {
        setOpen(false);
    };
    const toggleDrawer = (open: boolean) => () => {
        console.log("open", open)
        setIsDrawerOpen(open); // Set the state directly with boolean value
    };
   

    const [isOpen, setIsOpen] = useState<boolean>(false);

    function PaymentDialog(props: PaymentDialogProps) {
        const { onClose, open,InvestmentMax,InvestmentMin,InvestId } = props;



 const SubscribeOption = async (id: string) => {
        try {
            const token = localStorage.getItem("UserToken");
            const payload = {
                InvestOptionId: id,
                paidMoney:InvestmentMin && InvestmentMin
            }
            if (token) {
                const apidata = await subscribeInvestOption(token, payload);

                if (apidata.success == true) {
                    const ErrorToast = () => {
                        toast.success(apidata.msg, {
                            position: "top-center",
                            autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
                            hideProgressBar: false, // Show the progress bar
                            className: "custom-toast", // Custom class for styling
                        });
                    };
                    ErrorToast();

                }
                else {
                    console.log("apidata", apidata)
                    const ErrorToast = () => {
                        toast.error(apidata.response.data.msg, {
                            position: "top-center",
                            autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
                            hideProgressBar: false, // Show the progress bar
                            className: "custom-toast", // Custom class for styling
                        });
                    };
                    ErrorToast();
                }
            }
            handleClose()
        }
        catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }

        const handleClose = () => {
            setOpen(false)
        };

        const handleListItemClick = (value: string) => {
            onClose(value);
        };

        return (
            <Dialog onClose={handleClose} open={open} className='w-[600px] flex items-start p-[20px]  mx-auto'>
                <div className="w-[100%] flex flex-col items-start justify-start py-[10px]">
                    <div className='w-[100%] mx-auto flex flex-col items-start'>
                        <div className='flex w-[60%] mx-auto items-start'>
                            <p className='font-bold text-center text-lg leading-7 text-gray-900'>Investment Range</p>
                        </div>
                        <div className='flex w-[50%] mx-auto jusitfy-between items-center'>
                            <p className="font-bold text-center text-lg leading-7 text-gray-900">{InvestmentMin && InvestmentMin}</p>
                            <p className="font-bold text-center text-lg leading-7 text-gray-500 w-[10px]"></p>

                            <p className="font-bold text-center text-lg leading-7 text-gray-500">to</p>
                            <p className="font-bold text-center text-lg leading-7 text-gray-500 w-[10px]"></p>

                            <p className="font-bold text-center text-lg leading-7 text-gray-900">{InvestmentMax && InvestmentMax}</p>
                        </div>
                    </div>
                    <div className="d-flex w-[100%] flex-col p-[20px] pb-3 ">
                        <div className="d-flex w-[100%]  p-[20px] pb-3 ">
                            <div className="d-flex  align-items-center pe-2">
                                <MDBRadio name="radioNoLabel" id="radioNoLabel1" checked />
                            </div>
                            <div className="rounded border d-flex w-100 p-3 align-items-center">
                                <p className="mb-0">
                                    <FaCcPaypal
                                        size="40px"
                                        className="text-primary pe-2"
                                    />{" "}
                                  
                                </p>
                                <div className="ms-auto">Pay With paypal</div>
                            </div>
                        </div>


                        <MDBBtn block size="lg" onClick={(e:any)=>SubscribeOption(InvestId)}>
                            Proceed to payment
                        </MDBBtn>
                    </div>
                </div>




            </Dialog>
        );
    }


    return (
        <div className="shadow-lg bg-white w-[350px]  py-[30px] rounded-[20px]">
            <div className="flex w-[80%] m-auto flex-col items-start space-y-[10px]">
                <div className="flex w-[100%] items-center justif-between space-x-3 mb-[20px]">
                    <Avatar className="w-[60px] h-[60px]" alt="" src={cardData?.Logo ? cardData?.Logo : ""} />
                    <h4 className="font-bold text-center text-xl leading-7 tracking-tight text-gray-900">
                        {cardData.CompanyName}
                    </h4>
                    <div className='' >
                        <Eye className='text-[30px] text-[#37B6FF] cursor-pointer' onClick={() => setIsOpen(true)} />
                    </div>
                    {
                        isOpen && <div className='w-full h-[670px] mb-6'>
                            <OptionsDrawer isOpen={isOpen} setIsOpen={setIsOpen} optionData={cardData} />
                        </div>
                    }

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
                    <div className='flex w-[80%] m-auto py-2 items-center cursor-pointer justify-center space-x-[4px] bg-[#1D687F]' onClick={handleClickOpen} >
                        <span className="text-white font-bold text-center text-lg leading-7">Subscribe</span>

                    </div>
                    <PaymentDialog
                    InvestmentMin={cardData?.InvestmentSizeMin}
                    InvestmentMax={cardData?.InvestmentSizeMax}
                        open={open}
                        InvestId={cardData?._id}
                        onClose={handleClose}
                        setOpen={setOpen}
                    />
                </div>



            </div>
            <ToastContainer />
        </div>
    )
}



const OptionsDrawer: React.FC<optionDrawerProp> = ({ isOpen, setIsOpen, optionData }) => {

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
                                        <source src={optionData?.VideoMessage ? optionData?.VideoMessage : "https://www.shutterstock.com/shutterstock/videos/1105565351/preview/stock-footage-african-american-financial-analyst-works-in-broker-agency-office-d-abstract-ai-animation-of-real.webm"} type="video/mp4" />
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
                                    <Avatar className='w-[50px] h-[50px]' src={optionData?.Logo ? optionData?.Logo : ""} />
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
                                        <p className="font-normal text-center text-sm leading-7 text-gray-700">{`Base ${optionData?.ReturnRateMin} Up ${optionData?.ReturnRateMax}`}</p>
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



