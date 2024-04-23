'use client'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { Store } from "react-notifications-component";
import axios from "axios";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import logo from "../../../public/images/logo.png"
import { AlignHorizontalDistributeCenter, BadgeHelp, CreditCard, GalleryThumbnails } from 'lucide-react';
import { GrUpdate } from "react-icons/gr";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { HiBellAlert } from "react-icons/hi2";
import { IoMdOptions } from "react-icons/io";
import { HiMiniTicket } from "react-icons/hi2";
import { FaQuoteRight } from "react-icons/fa";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import { UserType, logUserType } from '../Layout/HOC';
import { UserProfile } from '@/lib/Reducers/api';

export interface SidebarProps {
  hamb: boolean;
  setHamb: React.Dispatch<React.SetStateAction<boolean>>;
  user?: logUserType; // Assuming User is a type representing user data

}



const Sidebar:React.FC<SidebarProps> = ({ hamb, setHamb,user}) => {
  const navigate=useRouter();
  const [userrole,setuserrole]=useState<string>("")

  
  useEffect(()=>{
    const fetchData = async () => {
      try {
          const token = localStorage.getItem("UserToken");
          if (token) {
              const {data} = await UserProfile(token);
              setuserrole(data.role);
              console.log("profileUserData", data);
          }
      } catch (error) {
          console.error("Error fetching user profile:", error);
      }
  };

  fetchData();
    
  },[])
  const nav = [
    {
      icon: <MdDashboardCustomize className="text-xl mr-3 rounded-full " />,
      link: "/dashboard",
      name: "Dashboard",
      allowedRoles: ["admin"],
    },
    {
      icon: (
        <AccountBoxIcon className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/MyAccount",
      name: "MyAccount",
      allowedRoles: ["user"],
    },
    {
      icon: (
        <DisplaySettingsIcon className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/MyPortfollio",
      name: "Myportfollio",
      allowedRoles: ["user"],
    },
    {
      icon: (
        <AlignHorizontalDistributeCenter className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/MyPayouts",
      name: "MyPayouts",
      allowedRoles: ["user"],
    },
    {
      icon: (
        <GrUpdate className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/MyPayoutsoptions",
      name: "update MyPayouts",
      allowedRoles: ["user"],
    },
    {
      icon: (
        <i className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/RegisteredUsers",
      name: "regietered users",
      allowedRoles: ["admin"],
    },
    {
      icon: (
        <GalleryThumbnails className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/UsersPortfollio",
      name: "portfollio of Users",
      allowedRoles: ["admin"],
    },
    {
      icon: (
        <IoMdOptions className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/InvestmentOptions",
      name: "Investment Options",
      allowedRoles: ["admin"],
    },
    {
      icon: (
        <IoMdOptions className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/InvestmentOptions-user",
      name: "Investment Options",
      allowedRoles: ["user"],
    },
    {
      icon: (
        <GrUpdate className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/Update-Payout-Users",
      name: "update payout of Users",
      allowedRoles: ["admin"],
    },
    {
      icon: <CreditCard className="fa-solid fa-address-card text-xl mr-3 rounded-full" />,
      link: "/User-Pay-Options",
      name: "view User Pay Options",
      allowedRoles: ["admin"],
    },
    {
      icon: (
        <BiMessageRoundedDetail className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/Messages",
      name: "Messages",
      allowedRoles: ["admin"],
    },
    {
      icon: (
        <HiBellAlert className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/Investment-Alert",
      name: "New Investment Alert",
      allowedRoles: ["admin"],
    },
     {
      icon: (
        <HiMiniTicket className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/TicketRaise",
      name: "Submit A Ticket",
      allowedRoles: ["user"],
    },
    {
      icon: (
        <BadgeHelp className="fa-solid fa-address-card text-xl mr-3 rounded-full" />
      ),
      link: "/Faq-Help",
      name: "Faq & Help",
      allowedRoles: ["user"],
    }
  ];

  const logOut = () => {
    localStorage.clear();
    navigate.push("/");
    Store.addNotification({
      title: "",
      message: "Logged Out",
      type: "success",
      insert: "bottom",
      container: "bottom-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  };

  const isAllowed = (allowedRoles:string[]) => {
    console.log("userandroles",userrole)
    return userrole && userrole && allowedRoles.includes(userrole);
  };

  return (
    <>
      <aside
        className="p-4 h-auto bg-[#1D687F]"
        style={{minHeight: "100vh" }}
      >
        {/* Top */}
        <div className="w-full md:hidden relative  p-2 mb-4">
          <RiCloseLine
            onClick={() => setHamb(!hamb)}
            className="text-3xl  absolute top-2 sm:hover:rotate-[228deg] transition-transform font-bold right-2 sm:hover:text-[22px] text-[rgb(241,146,46)] cursor-pointer"
          />
        </div>{" "}
        <figure className="flex  flex-col items-center">
        <img src="https://www.floatui.com/logo.svg" className="w-32" />
        </figure>
        <nav className="py-6">
        <span
            className="flex my-3 items-center cursor-pointer text-gray-900    tracking-wider p-2 rounded-sm"
            onClick={() => logOut()}
            style={{ color: "#FFF", textTransform: "uppercase" }}
          >
            <BiLogOutCircle className="text-xl mr-3 rounded-full " /> LogOut
          </span>
          {nav.map((navItem, index) =>
            isAllowed(navItem?.allowedRoles) ? 
            (
              <Link
                href={navItem.link}
                key={index}
                className=""
                style={{ textDecoration: "none", textTransform: "uppercase" }}
              >
                <span
                  className="sidebarhover flex my-3 items-center  cursor-pointer text-gray-900 hover:text-red    tracking-wider p-2 rounded-sm"
                  style={{ color: "#FFF", }}
                >
                  {navItem.icon} {navItem.name}
                </span>
              </Link>
            ) 
            : null
          )}
        
        </nav>
      </aside>
    </>
  );
};


export default Sidebar