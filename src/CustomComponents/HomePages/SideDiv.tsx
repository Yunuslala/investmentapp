'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Industries.module.css"; // Import CSS file for component styles
import { MoveRight } from 'lucide-react';
import { Industry } from "./IndustriesSector";
import "./Industries.module.css"
const SideDiv: React.FC<{ item: Industry; isOpen: boolean; onClose: () => void }> = ({ item, isOpen, onClose }) => {
    useEffect(() => {
        AOS.refresh(); // Refresh AOS animations when SideDiv is rendered
    }, [item]); 

    // Add dynamic class based on isOpen state to control transition
    const sideDivClass = isOpen ? `sideDiv open` : `sidediv`;

    return (
        <div className="scale-up-hor-right transform flex flex-col rounded-t-xl border-1 border-black w-[500px] h-[750px] ">
            <div className="w-full h-[530px]">
                <img className="w-full h-full object-cover animate-fadein bg-black rounded-t-xl " src={item.image} alt="sector-image" />
            </div>
            <div className="w-[80%] flex flex-col m-auto items-start justify-start">
                <p className="font-bold text-xl leading-6 text-center text-[#1E1E1E]">{item.name}</p>
                <p className="font-normal text-base leading-3.375 text-left text-[#1E1E1E]">{item.desc}</p>
                <div className="w-auto bg-[#1E1E1E] flex items-center justify-between px-3 h-[50px]">
                    <p className="font-bold w-[90%] text-xl leading-9 text-center text-[#FFFFFF] mx-3 mt-3">Explore {item.name}</p>
                    <MoveRight className="text-[#FFFFFF] w-[40px]"/>
                </div>
            </div>
        </div>
    );
};

export default SideDiv