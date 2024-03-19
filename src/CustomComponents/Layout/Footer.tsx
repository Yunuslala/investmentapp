'use client'

import Link from "next/link"
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

import "./Footer.css"



export default function Footer() {
    const footerNavs = [
        {
            label: "Company",
            items: [
                {
                    href: 'www.google.com',
                    name: 'Partners'
                },
                {
                    href: 'www.google.com',
                    name: 'Blog'
                },
                {
                    href: 'www.google.com',
                    name: 'Team'
                },
                {
                    href: 'www.google.com',
                    name: 'Careers'
                },
            ],
        },
        {
            label: "Resources",
            items: [
                {
                    href: 'www.google.com',
                    name: 'contact'
                },
                {
                    href: 'www.google.com',
                    name: 'Support'
                },
                {
                    href: 'www.google.com',
                    name: 'Docs'
                },
                {
                    href: 'www.google.com',
                    name: 'Pricing'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: 'www.google.com',
                    name: 'Terms'
                },
                {
                    href: 'www.google.com',
                    name: 'License'
                },
                {
                    href: 'www.google.com',
                    name: 'Privacy'
                },
                {
                    href: 'www.google.com',
                    name: 'About US'
                },
            ]
        }
    ]

    return (
        <div className="w-[100%] bg-[#1D687F]">
   <div className="w-[90%]  px-4 py-5  mx-auto md:px-8">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <img src="https://www.floatui.com/logo.svg" className="w-32" />
                        <p className="leading-relaxed mt-2 text-[15px] text-[#FFFFFF] ">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.

                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <label className="block pt-4 pb-2 text-[#FFFFFF] ">
                            Subscribe For News Letter
                        </label>
                        <div className="max-w-sm flex items-center border text-black rounded-md p-1">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2.5 outline-none"
                            />
                            <button
                                className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-3"
                                key={idx}
                            >
                                <h4 className="text-white font-medium">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx} className="">
                                            <Link
                                            className="link-footer"
                                                href={el.href}
                                            >
                                                {el.name}
                                            </Link>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className=" mt-4 sm:mt-0 text-[#FFFFFF] ">
                    &copy; 2030
                    HariKala Venture Management Limited, All rights Reserved
                </div>
                <div className="flex w-[30%] justfiy-between  my-8">
                    <div className=" w-[15%] cursor-pointer ">
                        <GrFacebookOption
                            style={{
                                fontSize: "40px",
                            }}
                            className="link-icon-foot rounded-full text-white border-1 border-white p-[8px] "
                        />
                    </div>
                    <div className=" w-[15%] cursor-pointer ">
                        <IoLogoInstagram
                            style={{
                                fontSize: "40px",
                            }}
                            className="link-icon-foot rounded-full text-white border-1 border-white p-[8px]  "
                        />
                    </div>
                    <div className=" w-[15%] cursor-pointe">
                        {" "}
                        <div  className="rounded-full ">
                            <CiLinkedin
                                style={{
                                    fontSize: "40px",
                                }}
                                className="link-icon-foot rounded-full text-white border-1 border-white p-[8px] "
                            />
                        </div>
                    </div>
                    <div className=" w-[15%] cursor-pointer ">
                        <FaXTwitter
                            style={{
                                fontSize: "40px",
                            }}
                            className="link-icon-foot rounded-full text-white border-1 border-white p-[8px] "
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>
     
    )
}
