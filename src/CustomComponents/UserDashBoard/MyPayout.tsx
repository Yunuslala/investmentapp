"use client"
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import HOC from '../Layout/HOC';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/Reducers/store';
import { GetuserPayoutDetails } from '@/lib/Reducers/api';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', width: 70 },
    { field: 'CategoryOfInvestemnt', headerName: 'Category Of Investemnt', width: 230 },
    { field: 'DateofPayoutIssued', headerName: 'Date of Payout Issued', width: 230 },
    {
        field: 'AmountTransfered',
        headerName: 'Amount Transfered INR',
        type: 'number',
        width: 230,
    },
    {
        field: 'TransactionType',
        headerName: 'TransactionType',
        width: 160,
    },
    {
        field: 'CurrentReturnRate',
        headerName: 'Current Return Rate %',
         type: 'number',
        width: 160,
    },
];

const rows = [
    { id: 1, DateofPayoutIssued: '25/03/2024', CategoryOfInvestemnt: 'Facility Management', AmountTransfered: 3500, TransactionType: "Payapl", CurrentReturnRate: 8 },
    { id: 2, DateofPayoutIssued: '26/03/2024', CategoryOfInvestemnt: 'Coverage', AmountTransfered: 4200, TransactionType: "Payapl", CurrentReturnRate: 12 },
    { id: 3, DateofPayoutIssued: '27/03/2024', CategoryOfInvestemnt: 'Education', AmountTransfered: 4500, TransactionType:  "Payapl", CurrentReturnRate: 14 },
    { id: 4, DateofPayoutIssued: '28/03/2024', CategoryOfInvestemnt: 'Engineering', AmountTransfered: 1600, TransactionType: "Wise", CurrentReturnRate: 21 },
    { id: 5, DateofPayoutIssued: '29/03/2024', CategoryOfInvestemnt: 'Technology', AmountTransfered: 2000, TransactionType: "Bnak Transfer", CurrentReturnRate: 8 },
    { id: 6, DateofPayoutIssued: '30/03/2024', CategoryOfInvestemnt: 'Coverage', AmountTransfered: 14000, TransactionType: "Wise", CurrentReturnRate: 22 },
    { id: 7, DateofPayoutIssued: '01/04/2024', CategoryOfInvestemnt: 'Engineering', AmountTransfered: 4040, TransactionType: "Bank Transfer", CurrentReturnRate: 14 },
    { id: 8, DateofPayoutIssued: '02/04/2024', CategoryOfInvestemnt: 'Education', AmountTransfered: 36040, TransactionType: "Bank Transfer", CurrentReturnRate: 21 },
    { id: 9, DateofPayoutIssued: '03/04/2024', CategoryOfInvestemnt: 'Engineering', AmountTransfered: 6500, TransactionType: "Wise", CurrentReturnRate: 25 },
];



const MyPayout = () => {
    const {UserLogin}=useSelector((store:RootState)=>store.AuthSlice);
    const [Payoutdata,setPayoutData]=useState()
    useEffect(()=>{
        const paydetails=async()=>{
            const token=localStorage.getItem("UserToken");
            const id=localStorage.getItem("UserId");

            if(token && id){
              
                const {data}=await GetuserPayoutDetails(id,token);
                

            }
        }
        paydetails()
    },[])
    return (
        <div className='shadow-md w-[100%] pt-[50px]'>
            <div className='flex flex-col w-[100%] items-start justtify-start '>
                <div>

                </div>
                <div style={{ height: 600, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 10 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
            </div>

        </div>
    )
}

export default HOC(MyPayout)