'use client'
import React, { ComponentType, JSXElementConstructor, useEffect, useState } from "react";

import axios from "axios";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";
import Sidebar from "../UserDashBoard/SideBar";
import { GetAllCategories, UserProfile } from "@/lib/Reducers/api";
import { setLoggin } from "@/lib/Reducers/AuthSlice/AuthSlice";
import { useDispatch } from "react-redux";
import { setCategories } from "@/lib/Reducers/CategorySlice/CategorySlice";

export interface UserType {
  role?: string,
  name?: string
}
export interface logUserType {
  _id?: string;
  Country?: string;
  State?: string;
  City?: string;
  zip?: string;
  Intrests?: string[];
  // Assuming interests are stored as strings
  FirstName?: string;
  IdCard?: string,
  MiddleName?: string;
  LastName?: string;
  email?: string;
  Contact?: string;
  role?: string;
  createdAt?: string; // Consider using Date type if you plan to parse this string into a date object
}


const HOC = (Wcomponenet: ComponentType<any>) => {
  return function Component() {
    const dispatch=useDispatch()
    const [hamb, setHamb] = useState<boolean>(false);
    const [log, seTypetUser] = useState<UserType>({});
    const [userData, setUserData] = useState<logUserType>({});
    const [role, setrole] = useState<string>("")
    // const Baseurl = "https://wicked-gray-betta.cyclic.app/api/v1/";


    // useEffect(() => {
    //   getUser();
    // }, []);

    const getUser = async (Baseurl: string, Auth: any) => {
      try {
        const { data } = await axios.get(`${Baseurl}User/profile`, Auth);
        console.log("hocdata", data.data.role)
        setrole(data.data.role);
        
        setUserData(data.data)
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const token = localStorage.getItem("UserToken");
          if (token) {
            const { data } = await UserProfile(token);
            setrole(data.role);
            setUserData(data);
            localStorage.setItem("UserId",data?._id);
            dispatch(setLoggin(data))
            console.log("profileUserData", data);
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      };

      fetchData();
      const getCategory = async () => {
        try {
            const token = localStorage.getItem("UserToken");
            if (token) {
                const { data } = await GetAllCategories(token);
                dispatch(setCategories(data))
                console.log("profileUserData", data);
            }
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }
    getCategory()


    }, [])
    return (
      <>
        <section
          className="flex h-[100%] overflow-x-hidden  relative "
          style={{ backgroundColor: "#f2f3f8" }}
        >
          {/* Sidebar */}
          <div
            className={
              hamb
                ? " absolute top-0 z-30 md:w-auto shadow-md bg-slate-200  w-60 transition-all md:-left-full left duration-150  h-auto overflow-y-auto  left-0 "
                : " md:w-72 z-30 bg-slate-200  shadow-md  md:static absolute top-0 -left-full   transition-all duration-150  overflow-y-auto h-auto"
            }
            style={{ minWidth: "300px" }}
          >
            <Sidebar hamb={hamb} setHamb={setHamb} user={userData} />
          </div>
          {/* Components & Navbar */}
          <div
            className={
              hamb
                ? " transition-all px-4 py-2  duration-150 w-full h-screen"
                : " w-full h-screen  px-4 py-2   z-50 transition-all duration-150 "
            }
            style={{ backgroundColor: "#f2f3f8" }}
          >
            <Navbar hamb={hamb} setHamb={setHamb} userData={userData} />
            <div className="my-6 text-#000 h-[87%] wcomp overflow-y-auto">
              {" "}
              <Wcomponenet />
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default HOC;
