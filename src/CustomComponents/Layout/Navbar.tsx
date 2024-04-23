'use client'
import { RiMenu4Line } from "react-icons/ri";
import { SidebarProps } from "../UserDashBoard/SideBar";
import dynamic from "next/dynamic";
import { Avatar, Badge } from "@mui/material";
import { MailIcon, Send } from "lucide-react";

import React, { useEffect } from 'react';
import { logUserType } from "./HOC";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/Reducers/store";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: any; // Adjust the type as needed
      };
    };
    initGoogleTranslate: (() => void) | null; // Adjusted return type
  }
}
interface NavBarProps {
  hamb: boolean;
  setHamb: React.Dispatch<React.SetStateAction<boolean>>;
  userData?: logUserType
}


const Navbar: React.FC<NavBarProps> = ({ hamb, setHamb }) => {
  const { UserLogin } = useSelector((state: RootState) => state.AuthSlice);
  useEffect(() => {
    function loadGoogleTranslateScript(): Promise<void> {
      return new Promise<void>((resolve, reject) => {
        const existingScript = document.getElementById('google-translate-script');
        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=initGoogleTranslate';
        script.id = 'google-translate-script';
        script.async = true;
        script.onerror = reject;
        document.body.appendChild(script);
        script.onload = () => resolve();
      });
    }

    window.initGoogleTranslate = () => {
      if (!window.google?.translate?.TranslateElement) {
        console.error('Google Translate is not available');
        return;
      }
      // Initialize Google Translate once the script is loaded
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };

    loadGoogleTranslateScript()
      .then(() => {
        console.log('Google Translate script loaded successfully');
      })
      .catch((error) => {
        console.error('Error loading Google Translate script:', error);
      });

    return () => {
      // Clean up: remove the initGoogleTranslate function from the window object
      window.initGoogleTranslate = null; // Assign null instead of removing the function
    };
  }, []);




  return (
    <>
      <div
        className={
          hamb
            ? "flex  w-full justify-between  my-1 rounded-sm  p-4 py-3 shadow-md items-center  bg-slate-200 space-x-4"
            : "flex  w-full justify-between my-1 rounded-sm  p-4 py-3 shadow-md items-center  bg-slate-200 space-x-4"
        }
        style={{ backgroundColor: "#1D687F" }}
      >
        <RiMenu4Line
          onClick={() => setHamb(!hamb)}
          className="text-2xl font-bold text-gray-900 hover:scale-90 cursor-pointer"
          style={{ color: "#fff" }}
        />

        <section className="flex sm:ml-auto justify-start sm:w-full items-start space-x-2  pr-2">
          <figcaption className="tracking-wider sm:ml-auto sm:w-[80%]  pl-1 font-semibold">
            <div
              className="flex items-center sm:ml-auto  sm:w-full justify-evenly"
              style={{ color: "#fff" }}
            >
              <div id="google_translate_element" ></div>
              <div className="relative ">
                <Avatar
                  className="w-[70px] h-[70px] object-cover"
                  alt="Remy Sharp"
                  src={typeof UserLogin?.avatar === 'string' ? UserLogin.avatar : "https://randomuser.me/api/portraits/men/79.jpg"}
                />
                <div className="w-[10px] h-[10px] rounded-full bg-[#3aed3a] absolute top-[2%] right-[28%]"></div>
              </div>
              <Badge badgeContent={4} color="primary" className="cursor-pointer">
                <Send className="w-[30px]" />
              </Badge>
              <span className="lg:text-base text-sm text-white  uppercase text-right">
                Welcome {UserLogin.FirstName + " " + UserLogin.LastName}
              </span>

            </div>
          </figcaption>
        </section>
      </div>
    </>
  );
};

export default Navbar;
