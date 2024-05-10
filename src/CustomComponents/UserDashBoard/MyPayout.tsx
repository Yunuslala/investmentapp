"use client"
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import HOC from '../Layout/HOC';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/Reducers/store';
import { GetUserReturnPayouts, GetuserPayoutDetails } from '@/lib/Reducers/api';


interface Row {
    id: number;
    DateofPayoutIssued: string;
    CategoryOfInvestemnt: string;
    AmountTransfered: number;
    TransactionType: string;
    CurrentReturnRate: number;
}
interface Transaction {
    _id: string;
    UserId: string;
    AmountTransfered: string;
    TransactionType: string;
    CurrentReturnRate: string;
    CategoryId: {
        _id: string;
        name: string;
        createdAt: string;
        __v: number;
    };
    createdAt: string;
    __v: number;
}
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





const MyPayout = () => {
    const {UserLogin}=useSelector((store:RootState)=>store.AuthSlice);
    const [Payoutdata,setPayoutData]=useState();
    const [rows,setrows]=useState<Row[]>([])
    useEffect(()=>{
        const paydetails=async()=>{
            const token=localStorage.getItem("UserToken");
            const id=localStorage.getItem("UserId");

            if(token && id){
              
                const {data}=await GetUserReturnPayouts(id,token);
               const rowdata= convertToRows(data);
               setrows(rowdata);

            }
        }
        paydetails()
    },[])
    function convertToRows(transactions: Transaction[]): Row[] {
        return transactions.map((transaction, index) => ({
            id: index + 1,
            DateofPayoutIssued: formatDate(transaction.createdAt),
            CategoryOfInvestemnt: transaction.CategoryId.name,
            AmountTransfered: parseInt(transaction.AmountTransfered),
            TransactionType: transaction.TransactionType,
            CurrentReturnRate: parseInt(transaction.CurrentReturnRate)
        }));
    }
    
    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString();
        return `${day}/${month}/${year}`;
    }
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