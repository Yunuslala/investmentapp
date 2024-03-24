'use client'
import { BsPersonPlusFill } from "react-icons/bs";
import { Fragment, HTMLInputTypeAttribute, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { BsKey } from "react-icons/bs";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { CiMail } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { RiEyeLine } from "react-icons/ri";
import { HiOutlineEyeOff } from "react-icons/hi";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import React from 'react'
import logo from "../../../public/images/logo.png"

const Signup = () => {
    const [type, settype] = useState<HTMLInputTypeAttribute>("text");

    const handleTypesof=async(type:HTMLInputTypeAttribute)=>{
        settype(type)
      }
      const RegisterSubmit = () => {
        try {
        } catch (error) {}
      };
    
      const LoginSubmit = () => {};
    return (
        <div role="presentation" className="w-[480px] m-auto flex flex-col">
        <div className="w-[100%] pt-4 px-2">
          <div className="w-[90%] m-auto justify-start items-start flex-col">
            <div className="flex w-[60%] justify-between mb-3 items-center">

              <div className="">
                <Image className="w-[118px] h-[52px]" src={logo} alt="logo" />
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center w-[80%]">
                <div className="w-[100%] flex items-center justify-center ">
                  <p
                    style={{ color: "#1E1E1E" }}
                    className="font-sans text-lg font-bold leading-6 tracking-normal text-center"
                  >
                    Registration
                  </p>
                </div>
                <div className=" w-[422px] py-4   px-8 bg-[#f3f3f3]  flex flex-col items-start justify-start mx-auto color-[#FFFFFF] ">
                  <form className="w-[100%] h-full ">
                    <div>
                      <div>
                        <p className="font-helvetica text-base font-bold leading-4 tracking-normal text-left text-[#004BAE]">
                          FULL NAME
                        </p>
                      </div>
                      <div
                        style={{
                          color: "#5F5F5F",
                          borderRadius: "6px",
                          background: "white",
                        }}
                        className="formdiv mt-[-7px] shadow-lg w-[330px] h-[49px] border-2 flex justify-evenly items-center"
                      >
                        <GoPerson style={{ fontSize: "30px" }} />
                        <input
                          type="text"
                          placeholder="Enter UserName"
                          className="inputtagsname "
                        />
                      </div>
                    </div>
  
                    <div className="my-[15px]">
                      <div>
                        <p className="font-helvetica text-base font-bold leading-4 tracking-normal text-left text-[#004BAE]">
                          EMAIL
                        </p>
                      </div>
                      <div
                        style={{
                          color: "#5F5F5F",
                          borderRadius: "6px",
                          background: "white",
                        }}
                        className="formdiv mt-[-7px] shadow-lg w-[330px] h-[49px] border-2 flex justify-evenly items-center"
                      >
                        <CiMail style={{ fontSize: "30px" }} />
                        <input
                          type="text"
                          placeholder="Enter Email"
                          className="inputtagsname "
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="font-helvetica text-base font-bold leading-4 tracking-normal text-left text-[#004BAE]">
                          PHONE NUMBER
                        </p>
                      </div>
                      <div
                        style={{
                          color: "#5F5F5F",
                          borderRadius: "6px",
                          background: "white",
                        }}
                        className="formdiv mt-[-7px] shadow-lg w-[330px] h-[49px] border-2 flex justify-evenly items-center"
                      >
                        <MdLocalPhone style={{ fontSize: "30px" }} />
                        <input
                          type="text"
                          placeholder="Enter Phone Number"
                          className="inputtagsname "
                        />
                      </div>
                    </div>
                    <div className="  my-[15px] ">
                      <div>
                        <p className="font-helvetica text-base font-bold leading-4 tracking-normal text-left text-[#004BAE]">
                          PASSWORD
                        </p>
                      </div>
                      <div
                        style={{
                          color: "#5F5F5F",
                          borderRadius: "6px",
                          background: "white",
                        }}
                        className="formdiv mt-[-7px] shadow-lg w-[330px] h-[49px] border-2 flex justify-evenly items-center"
                      >
                        <BsKey style={{ fontSize: "30px" }} />
                        <input
                          type={type}
                          placeholder="Enter Password"
                          className="inputtagsname "
                        />
                        {type == "text" ? (
                          <HiOutlineEyeOff
                            style={{ color: "#004BAE", width: "25px" }}
                            className="cursor-pointer"
                            onClick={() =>handleTypesof("password")}
                          />
                        ) : (
                          <RiEyeLine
                            style={{ color: "#004BAE", width: "25px" }}
                            className="cursor-pointer"
                            onClick={() =>handleTypesof("text")}
                          />
                        )}
                      </div>
                    </div>
                    <div className=" mb-[15px]  ">
                      <div>
                        <p className="font-helvetica text-base font-bold leading-4 tracking-normal text-left text-[#004BAE]">
                          CONFIRM PASSWORD
                        </p>
                      </div>
                      <div
                        style={{
                          color: "#5F5F5F",
                          borderRadius: "6px",
                          background: "white",
                        }}
                        className="formdiv mt-[-7px] shadow-lg w-[330px] h-[49px] border-2 flex justify-evenly items-center"
                      >
                        <BsKey style={{ fontSize: "30px" }} />
                        <input
                          type={type}
                          placeholder="Enter Password"
                          className="inputtagsname "
                        />
                      </div>
                    </div>
                    <div
                      style={{ borderRadius: "6px" }}
                      className="w-[330px] mb-[15px] h-[51px] bg-[#37B6FF] flex justify-center cursor-pointer items-center "
                    >
                      <p className="font-helvetica text-xl font-bold leading-5 tracking-normal text-center text-[#FFFFFF] mt-3">
                        REGISTER ACCOUNT
                      </p>
                    </div>
                    <div className="flex w-[80%] m-auto justify-center items-center">
                      <p>
                        <span className="flex items-center  font-sans text-sm font-bold leading-4 tracking-normal text-center text-[#5F5F5F]">
                          Already Have Account?....
                       
                        </span>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Signup


