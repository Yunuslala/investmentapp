import React, { useEffect, useState } from 'react'
import { InvestCategoryType, InvestIdType, InvestOptionIdType, InvestPortData, InvestPortfollioOptionType, InvestUserType } from '../UserDashBoard/Portfollio'
interface cardprop {
  carddata: InvestPortData
}
interface InvestmentOption {
  InvestId: InvestIdType;
  isActivated: boolean;
  paidMoney: string;
  CategoryId: InvestCategoryType;
  createdAt: string;
  _id: string;
  _v: number;
}

interface Company {
  InvestId: string;
  AboutCompany: string;
  CategoryId: string;
  CompanyName: string;
  Documents: string;
  HashTags: string;
  InvestmentSizeMax: string;
  InvestmentSizeMin: string;
  LockingPeriod: string;
  Logo: string;
  Payouts: string;
  ReturnRateMax: string;
  ReturnRateMin: string;
  VideoMessage: string;
  WebsiteLink: string;
  createdAt: string;
  isDeleted: boolean;
  __v: number;
  _id: string;
}

interface Transaction {
  createdAt: string;
  isActivated: boolean;
  paidMoney: string;
  _id: string;
}

interface User {
  UserId: string;
  City: string;
  Contact: string;
  Country: string;
  FirstName: string;
  IdCard: string;
  Intrests: string[]; // You can specify the type of interests here
  LastName: string;
  Locality: string;
  MiddleName: string;
  State: string;
  Status: string;
  createdAt: string;
  email: string;
  role: string;
  zip: string;
  __v: number;
  _id: string;
}

interface Carddatatype {
  InvestOptionId: InvestmentOption;
  UserId: InvestUserType;
  _id: string;
  _v: number;
}
// Now you can use these interfaces wherever you need to define the types of objects with similar structure.

const AlertCard: React.FC<cardprop> = ({ carddata }) => {
  const [data, setdata] = useState<Carddatatype[]>([]);;
  useEffect(() => {
    if (carddata) {
      const updatedData:any = carddata.InvestOptionId.map((item: InvestOptionIdType) => {
        // Ensure InvestId structure
        const InvestId = item.InvestId;
        // Validate InvestId structure here

        // Ensure CategoryId structure
        const CategoryId = item.CategoryId;
        // Validate CategoryId structure here

        // Validate other properties if needed

        return {
          InvestOptionId: {
            InvestId,
            isActivated: item.isActivated,
            paidMoney: item.paidMoney,
            CategoryId,
            createdAt: item?.createdAt,
            _id: item._id
          },
          UserId: carddata.UserId,
          _id: carddata._id,
          __v: carddata.__v
        };
      });
      console.log("objectofupdatedata", updatedData);
      setdata(updatedData)
    }
  }, [carddata]);

  return (
    <>
      {data && data?.map((item) => (
        <div style={{ border: "1px solid #1D687F" }} className='w-[100%] rounded-[10px] shaddow-lg bg-white p-3 border-1 border-[#1D687F]'>
          <div className='w-[90%] mx-auto flex flex-col items-start justify-start'>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'> Client Name</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{item?.UserId?.FirstName+ " " + item?.UserId?.LastName}</span></p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'> Client Id</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{item?.UserId?._id}</span> </p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Start Date</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{new Date(item?.InvestOptionId?.createdAt).toLocaleDateString('en-US')}</span></p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Email</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{item?.UserId?.email}</span></p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Payment Mode</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>paypal</span></p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Mobile Number</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{item?.UserId?.Contact}</span></p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Payout Mode for Returns</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>Paypal</span></p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Investment Value</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{item?.InvestOptionId?.paidMoney}INR</span></p>
            <p className='flex items-center justify-between w-[100%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Time Period</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{item?.InvestOptionId?.InvestId?.LockingPeriod}</span></p>
          </div>

        </div>
      ))}
    </>

  )
}

export default AlertCard
