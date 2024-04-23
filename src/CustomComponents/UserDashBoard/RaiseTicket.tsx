"use client"
import dynamic from 'next/dynamic'
import React from 'react'
import HOC from '../Layout/HOC'
// const HOC =dynamic(()=>import("../Layout/HOC"))
const { Phone, Mail, MapPinned } = require("lucide-react");
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaLink } from "react-icons/fa6";


const RaiseTicket = () => {
    const handleFileChange = () => {

    }
    return (
        <div className='w-[100%] '>
          <div className="w-full mt-[10px] mb-[100px] ">
      <div className="w-[85%] items-center justify-between m-auto ">
        <div className="w-[100%] jusitfy-center items-center ">
          <p className="font-bold text-center text-2xl leading-8 text-[#1E1E1E]">
            Raise A Ticket
          </p>
        </div>
        <div className="w-[100%] flex justify-between items-center">
          <div className="flex w-[40%]  h-[478px] flex-col items-start space-y-[15px]">
            <div className='w-[100%] items-start justif-start flex'>
              <p className="font-sans text-base font-bold leading-tight text-left text-[#1D687F]">
              If you have questions related to anything and account raise support ticket
              </p>
            </div>
            <div className="flex items-center justify-between w-[40%]">
              <Phone style={{ color: "#1D687F" }} />
              <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F]">
                +91 9599085990
              </p>
            </div>
            <div className="flex items-center justify-between w-[45%]">
              <Mail style={{ color: "#1D687F" }} />
              <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F]">
                query@gmail.com
              </p>
            </div>
          
          </div>
          <div className="w-[50%] bg-[#EEEEEEB2] h-[460px] flex items-start">
            <div className="flex  w-full h-full items-start justify-start ">
              <div className="w-[80%] h-[80%] m-auto flex flex-col items-start justify-start space-y-[20px]">
                <div className="flex items-center  w-full">
                  <p className="font-sans text-lg font-bold leading-5 text-center text-[#1D687F] flex items-center">
                    <span>Have any Query?...</span>{" "}
                    <span className="font-sans text-base font-bold leading-5 text-center text-[#5F5F5F]">
                      Let us Know
                    </span>{" "}
                  </p>
                </div>
                <div className="grid w-[100%] h-[120px] my-auto max-w-sm items-center gap-1 shadow-lg rounded-[10px] bg-white">
                        <input className=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="text" name="FirstName" placeholder="subject*"  />

                    </div>
                <div className="w-full">
                  <Select >
                    <SelectTrigger className="w-full shadow-lg bg-white py-[3px] text-xl">
                      <SelectValue
                        placeholder={
                          <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F]">
                            Type
                          </p>
                        }
                      />
                    </SelectTrigger>
                    <SelectContent className="shadow-lg bg-white rounded-[10px]">
                      <SelectGroup className="flex flex-col space-y-2 w-[80%] m-auto">
                        <SelectItem
                          value="5"
                          className="active:bg-red cursor-pointer"
                        >
                          <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F]">
                           My Account
                          </p>
                        </SelectItem>
                        <SelectItem
                          value="4"
                          className="active:bg-red cursor-pointer"
                        >
                          <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F]">
                            Payment
                          </p>
                        </SelectItem>
                        <SelectItem
                          value="4"
                          className="active:bg-red cursor-pointer"
                        >
                          <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F]">
                            Investment
                          </p>
                        </SelectItem>
                        <SelectItem
                          value="3"
                          className="active:bg-red cursor-pointer"
                        >
                          <p className="font-sans text-sm font-bold leading-tight text-left text-[#5F5F5F]">
                            Others
                          </p>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full relative h-[260px] shadow-lg rounded-[10px] bg-white">
                  <div className="w-[100%] h-[260px] m-auto ">
                    <Textarea
                      className="w-full h-[260px] py-[10px]"
                      placeholder="Write your Query Here......"
                    />
                  </div>
                  <div className="w-[100%] flex items-center justify-evenly absolute bottom-[2%] left-[0%]  ml-auto">
                    <div className="cursor-pointer mt-[5px]">
                      <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                        className="mt-5"
                      />
                      <div
                        onClick={() =>
                            {
                                const fileInput = document.getElementById("fileInput");
                                if (fileInput) {
                                  fileInput.click();
                                }
                            }
                        }
                        className="flex items-center justify-evenly space-x-3"
                      >
                        <FaLink className="w-[20px]" />
                        <p className="font-bold text-sm leading-tight text-left text-[#37B6FF] mt-[8px]">
                          ADD MEDIA
                        </p>
                      </div>
                    </div>
                    <div>
                      <button className="bg-[#37B6FF] border-none cursor-pointer w-[120px] rounded-[10px] h-[35px] text-white font-bold text-base text-center">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        </div>
    )
}

export default HOC(RaiseTicket)