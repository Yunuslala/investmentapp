'use client'
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronUp } from 'lucide-react';
type Checked = DropdownMenuCheckboxItemProps["checked"]

import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../public/images/logo.png"
import { IoPersonAddOutline } from "react-icons/io5";
import { UserRound } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
export default function Header(){
    return (
        <div className='w-[100%] flex flex-col justify-start items-start'>
            <div className="w-[100%] shadow-xl py-1">
            <div  className='w-[90%] m-auto flex flex-col justify-start items-start'>
                <div className="flex  w-[100%] justify-between py-3 items-center ">
                    <div  className="flex  w-[35%]  justify-between  content-center items-center ">
                        <div  className="w-[100px]">
                        <img src="https://www.floatui.com/logo.svg" className="w-32" />
                        </div>
                        <div
                            className="w-[200px] flex justify-evenly"
                        >
                            <Link href="www.instagram.com" className='text-[#1D687F] hover:text-[#FCB305]'>
                                <InstagramIcon />{" "}
                            </Link>
                            <Link href="www.instagram.com" className='text-[#1D687F] hover:text-[#FCB305]'>
                                {" "}
                                <XIcon />
                            </Link>
                            <Link href="www.instagram.com" className='text-[#1D687F] hover:text-[#FCB305]'>
                                <LinkedInIcon />
                            </Link>
                            <Link href="www.instagram.com" className='text-[#1D687F] hover:text-[#FCB305]'>
                                <FacebookIcon />{" "}
                            </Link>
                        </div>
                    </div>
                    <div  className=" flex  w-[30%] justify-between  items-center">
                            <div  className="propertyparent w-[30%]  flex justify-start  cursor-pointer  items-end">
                                <p className="font-bold text-[#1E1E1EB2] text-base pt-3 hover:text-[#FCB305] hover:underline">Our Team</p>
                            </div>

                        <div   className='w-[180px] flex justify-end items-end mt-2'>
                            <div
                                style={{
                                    height: "46.05px",
                                    borderRadius:"10px"

                                }}
                                className="w-[100%] flex justify-evenly text-[#FFFFFF] rounded-lg items-center  bg-[#1D687F] hover:bg-[#FCB305] hover:text-[#1E1E1E] hover:border-none cursor-pointer"
                            >
                                <UserRound className='w-[30px] ' />
                                <p
                                    style={{ fontFamily: "Helvetica" }}
                                    className="font-normal text-base mt-3  "
                                >
                                    Register
                                </p>
                            </div>
                        </div>



                    </div>
                </div>
                <div>

                </div>
            </div>
            </div>
         
            <div className='flex relative w-[100%] m-auto justify-start items-start bg-[#EEEEEE] h-[80px]   '>
                <div className='flex w-[90%] h-full m-auto justify-between items-center'>
               <CompnayDropDown />
               <OurDropDown />
                 <div className="flex h-full  justify-evenly items-center text-[#1E1E1EB2] hover:text-[#CFB53B] hover:transistion delay-120 hover:ease-in-out cursor-pointer hover:border-b-4 hover:border-[#CFB53B]  ">
                    <p className="font-bold text-lg leading-6 tracking-normal text-left text-[#1E1E1EB2] hover:text-[#CFB53B]">What we do</p>
                 </div>
                 <div className="flex h-full justify-evenly items-center text-[#1E1E1EB2] hover:text-[#CFB53B] hover:transistion delay-120 hover:ease-in-out cursor-pointer hover:border-b-4 hover:border-[#CFB53B] ">
                    <p className="font-bold text-lg leading-6 tracking-normal text-left text-[#1E1E1EB2] hover:text-[#CFB53B]">Career</p>
                 </div>
                 <div className="flex h-full justify-evenly items-center text-[#1E1E1EB2] hover:text-[#CFB53B] hover:transistion delay-120 hover:ease-in-out cursor-pointer hover:border-b-4 hover:border-[#CFB53B] ">
                    <p className="font-bold text-lg leading-6 tracking-normal text-left text-[#1E1E1EB2] hover:text-[#CFB53B]">Investor Relations</p>
                 </div>
                </div>
            </div>
        </div>
    )
}



export function CompnayDropDown() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
  const [showIcon,setShowIcon]=React.useState<boolean>(false);
  const handleClick=(event: React.MouseEvent<HTMLDivElement, MouseEvent>, data: string)=>{
    console.log(data)
    setShowIcon((prev:boolean)=>{
        console.log(prev)
        return !prev
    })
  }
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        
              <div
            onClick={(event)=>handleClick(event,"data")}
           
               className="flex w-[170px] justify-between items-center h-[80px] text-[#1E1E1EB2] hover:text-[#CFB53B] hover:transition-all delay-120 hover:ease-in-out cursor-pointer hover:border-b-4 hover:border-[#CFB53B]">
                    <p className="font-bold text-lg leading-6 tracking-normal text-left text-[#1E1E1EB2]  hover:text-[#CFB53B]">Company</p>
                    {showIcon? (<ChevronUp className="w-[35px] mt-[-15px] " />) : (  <ChevronDown className="w-[35px] mt-[-15px] "  />)
                        }
                 </div>
        
      </DropdownMenuTrigger>
      <DropdownMenuContent style={{borderRadius:"15px",zIndex:80}} className="w-[250px] ml-[60px] h-[200px]  px-4 py-3 flex flex-col bg-[#ffffff] justify-center items-center shadow-xl">
        <div className="flex flex-col items-start w-[100%] space-y-4 h-full mx-auto justify-center">
        <div className="h-[20px]">
        <p className="font-normal text-lg text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-center hover:underline hover:text-[#CFB53B]">Company Information</p>
       </div>
       <div className="h-[20px]">
        <p className="font-normal text-lg text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-center hover:underline hover:text-[#CFB53B]">Management</p>
       </div>
       <div>
        <p className="font-normal text-lg text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-center hover:underline hover:text-[#CFB53B]">Leadership</p>
       </div>
       <div>
        <p className="font-normal text-lg text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-center hover:underline hover:text-[#CFB53B]">Ownership</p>
       </div>
        </div>
      
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


export function OurDropDown() {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)
    const [showIcon,setShowIcon]=React.useState<boolean>(false);
    const handleClick=(event: React.MouseEvent<HTMLDivElement, MouseEvent>, data: string)=>{
      console.log(data)
      setShowIcon((prev:boolean)=>{
          console.log(prev)
          return !prev
      })
    }
    return (
      <DropdownMenu >
        <DropdownMenuTrigger asChild>
          
                <div
              onClick={(event)=>handleClick(event,"data")}
               className="flex w-[170px]  h-[80px]  justify-evenly items-center text-[#1E1E1EB2] hover:text-[#CFB53B] hover:transistion delay-120 hover:ease-in-out cursor-pointer hover:border-b-4 hover:border-[#CFB53B] ">
                    <p className="font-bold text-lg leading-6 tracking-normal text-left text-[#1E1E1EB2]  hover:text-[#CFB53B]">Our Group</p>
                      {showIcon? (<ChevronUp className="w-[35px] mt-[-15px] " />) : (  <ChevronDown className="w-[35px] mt-[-15px] "  />)
                        }
                   </div>
          
        </DropdownMenuTrigger>
        <DropdownMenuContent style={{borderRadius:"15px",zIndex:80}} className="w-[1000px] ml-[60px] h-[400px]   px-[40px] py-3 flex flex-col bg-[#ffffff] justify-center items-center shadow-xl">
          <div className="flex  items-start w-[90%] space-y-5 h-full mx-auto justify-between items-start">
            <div  className="flex w-[40%] mt-4 flex-col items-start justify-start">
                <div>
                    <p className="font-bold text-xl leading-7 tracking-normal text-left text-[#1E1E1E] hover:text-[#CFB53B] hover:transistion delay-120 hover:ease-in-out cursor-pointer hover:underline">Self Governed Companies</p>
                </div>
                <div>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"> <span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> 
                    <span>Nupium Global Venture LLC</span>  </p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span> Lueur</span></p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span>SanTech Films & Media Division</span> </p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span>SanTech iWorld</span> </p>
                </div>
            </div>
            <div  className="flex w-[35%]  flex-col items-start justify-start">
                <div>
                    <p className="font-bold text-xl leading-7 tracking-normal text-left text-[#1E1E1E] hover:text-[#CFB53B] hover:transistion delay-120 hover:ease-in-out cursor-pointer hover:underline">Investment in Companies</p>
                </div>
                  <div>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span>Nupium Global Venture LLC </span> </p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span>Lueur</span> </p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span>SanTech Films & Media Division</span> </p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span>SanTech iWorld</span> </p>
                </div>
            </div>
            <div  className="flex w-[20%]  flex-col items-start justify-start">
                <div>
                    <p className="font-bold text-xl leading-7 tracking-normal text-left text-[#1E1E1E] hover:text-[#CFB53B] hover:transistion delay-120 hover:ease-in-out cursor-pointer hover:underline">Industries</p>
                </div>
                <div>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span>Facility Management</span> </p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span> Coverage</span></p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span>Education</span> </p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span> Technology</span></p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span>Beauty & Wellness</span> </p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span>Energy</span> </p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span> Media</span></p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span>B2B Trading</span> </p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span> Food [QSR]</span></p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span>Automobiles</span> </p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span> B2B Trading</span></p>
                    <p className="font-normal text-xs text-[#5F5F5F] cursor-pointer leading-6 tracking-normal text-start hover:underline hover:text-[#CFB53B]"><span
                    className="text-[#5F5F5F] mr-2 mt-[-2px] hover:text-[#CFB53B] font-bold text-lg leading-5 tracking-normal text-left"
                  > &#8226;</span> <span>Entertainment</span> </p>
                </div>
            </div>
          </div>
        
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

