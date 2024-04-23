'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Industries.module.css"; // Import CSS file for component styles
import { MoveRight } from 'lucide-react';
import { Avatar } from "@mui/material";
import { IndustryCategory } from "./PortfolioPannel";
import { InvestPortfollioOptionType } from "./Portfollio";

const PortfollioCard: React.FC<{ isOpen: boolean;carddata:InvestPortfollioOptionType; onClose: () => void }> = ({  isOpen, onClose,carddata }) => {
  useEffect(() => {

  }, [carddata]);

  // Add dynamic class based on isOpen state to control transition
  const sideDivClass = isOpen ? `sideDiv open` : `sidediv`;

  return (
    <div className="shadow-lg bg-[#cc3399] w-[350px] h-[350px] py-[30px] rounded-[20px]">
      <div className="flex w-[80%] m-auto flex-col items-start space-y-[10px]">
        <div className="flex w-[100%] items-center justif-between space-x-3 mb-[40px]">

          <Avatar className="w-[60px] h-[60px]" src={carddata?.InvestOptionId?.Logo} alt="" />
          <h4 className="font-bold text-center text-xl leading-7 text-white">
           {carddata?.InvestOptionId?.CompanyName}
          </h4>
        </div>
        <div className="flex gap-2 h-[40px]">
          <p className="font-bold text-center text-xl leading-7 text-white">
            Invested Money:
          </p>
          <p className="font-bold text-center text-lg leading-7 text-white">${carddata?.paidMoney}</p>
        </div>
        <div className="gap-3">
        <div className="flex gap-2 h-[40px]">
          <p className="font-bold text-center text-xl leading-7 text-white">
            time period:
          </p>
          <p className="font-bold text-center text-lg leading-7 text-white">{carddata?.InvestOptionId?.LockingPeriod}</p>
        </div>
        <div className="flex gap-2 h-[40px]">
          <p className="font-bold text-center text-xl leading-7 text-white">
            start date:
          </p>
          <p className="font-bold text-center text-lg leading-7 text-white">{new Date(carddata?.createdAt).toLocaleDateString('en-US')}</p>
        </div>
        </div>
      
      </div>

    </div>
  );
};

export default PortfollioCard