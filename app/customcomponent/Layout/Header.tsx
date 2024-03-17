import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from 'next/link';

const Header = () => {
  return (
    <div className='w-[100%] flex flex-col justify-start items-start'>
        <div className='w-[85%] flex flex-col justify-start items-start'>
        <div
        style={{ paddingBottom: "10px" }}
        className="w-10/12 h-20 flex mb-4 m-auto  justify-center pb-4"
      >
        <div className="flex  w-full justify-between py-5 content-center ">
          <div className="flex  w-2/6 justify-between  content-center items-center ">
            <div  className="w-[100px]">
             
            </div>
            <div
              className="w-3/6 flex justify-evenly"
              style={{ color: "#1D687F" }}
            >
              <Link href="www.instagram.com" className='hover:text-[#FCB305]'>
                <InstagramIcon />{" "}
              </Link>
              <Link href="www.instagram.com" className='hover:text-[#FCB305]'>
                {" "}
                <XIcon />
              </Link>
              <Link href="www.instagram.com" className='hover:text-[#FCB305]'>
                <LinkedInIcon />
              </Link>
              <Link href="www.instagram.com" className='hover:text-[#FCB305]'>
                <FacebookIcon />{" "}
              </Link>
            </div>
          </div>
          <div className=" flex  w-2/5 justify-between items-center content-center ">
            <div
              style={{
              
              }}
              className="propertyparent w-2/4 flex justify-evenly cursor-pointer content-center items-center"
        
            >
              <div className="">
       
              </div>
              <div>
                <p className="font-bold text-base pt-3 hover:text-[#FCB305] hover:underline">Our Team</p>
              </div>
            </div>
            <div
              style={{
                height: "46.05px",
               
              }}
              className="w-2/5 flex justify-evenly items-center content-center bg-[#1D687F] hover:bg-[#FCB305] hover:border-none cursor-pointer"
            >
              <p
                style={{ color: "#FFFFFF", fontFamily: "Helvetica" }}
                className="font-normal text-base pt-3 mt-[-5px] "
              >
                Signin/Register
              </p>
            </div>
     
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Header
