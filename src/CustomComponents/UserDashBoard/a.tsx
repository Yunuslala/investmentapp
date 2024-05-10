'use client'
import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import HOC from '../Layout/HOC';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BankDetailProp } from '../AdminDashBoard/UsersPayOptions';
import { useDispatch } from 'react-redux';
import { UserPayoutOption } from '@/lib/Reducers/api';

import { setbankDetail } from '@/lib/Reducers/UserPayOption/PayOptionslice';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/Reducers/store';
import { SwipeableDrawer } from '@mui/material';
interface UpdateOptionDrawerProp {
    toggleDrawer: (open: boolean) => React.MouseEventHandler<HTMLDivElement> | undefined;
    isDrawerOpen: boolean

}
export type OptionCategory = string;

import { RxCrossCircled } from 'react-icons/rx';
interface bankdetailprop {
    Username?: string,
    accountNumber?: string,
    BankName?: string,
    BankAddress?: string,
    SwiftCode?: string,
    IfscCode?: string,
    ContactNumber?: string,
    PaypalLink?: string,
    otherPayoutLinks?: string,
    createdAt?: string
}


interface UserbankdetailProp {
    bankDetailData?: bankdetailprop
}
export function classNames(...classes: (string | boolean)[]): string {
    return classes.filter(Boolean).join(' ');
}

// 1.	Name of the Account Holder
// 2.	Account Number 
// 3.	Bank Name
// 4.	Bank Address
// 5.	SWIFT Code
// 6.	IFSC Code [If not then ignore]
// 7.	Mobile Number
// 8.	Your Address 



const UpdateMyPayoutOptions: React.FC = () => {
    // const {bankdetail}=useSelector((state:RootState)=>state.PayoutOptionSlice)
    // const [updated,setUpdated]=useState<boolean>(false);
    // const [payoutOptions, setpayoutOptions] = useState<bankdetailprop>({});
    // const dispatch = useDispatch();
    // const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer open/close
    // const toggleDrawer = (open: boolean) => () => {
    //     console.log("open", open)
    //     setIsDrawerOpen(open); // Set the state directly with boolean value
    // };
    // useEffect(() => {
    //     const getUserPayDetail = async () => {
    //         const token = localStorage.getItem("UserToken");
    //         const UserId = localStorage.getItem("UserId");
    //         if (token && UserId) {
    //             const { data, success } = await UserPayoutOption(token, UserId);
    //             if (success) {
    //                 // setpayoutOptions(data);
    //                 dispatch(setbankDetail(data));
    //             }


    //         }
    //     }
    //     getUserPayDetail()
    // }, [])

    const [UserName, setUserName] = useState<string>("");
    const [accountNumber, setaccountNumber] = useState<string>("");
    const [BankName, setBankName] = useState<string>("");
    const [BankAddress, setBankAddress] = useState<string>("");
    const [SwiftCode, setSwiftCode] = useState<string>("");
    const [IfscCode, setIfscCode] = useState<string>("");
    const [Number, setNumber] = useState<string>("");
    const [PaypalLink, setPaypalLink] = useState<string>("");
    const [otherpayoutLinks, setotherpayoutLinks] = useState<string>("")
    const handleUpdatesPayaPal = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Your logic here...
    };

    // Component code...

  

    const BankAccountDetails: React.FC<UserbankdetailProp> = ({ bankDetailData }) => (
        <div className='flex flex-col items-start justify-start w-[100%] space-y-[15px] py-[20px]' >
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Account Holder Name</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankDetailData?.Username}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Account Number</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankDetailData?.accountNumber}</span> </p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>IFSC Code</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankDetailData?.IfscCode}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Bank Name</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankDetailData?.BankName}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Swift Code</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankDetailData?.SwiftCode}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Mobile Number</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankDetailData?.ContactNumber}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>user Address</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankDetailData?.BankAddress}</span></p>
            <p className='flex items-center justify-between w-[50%] m-auto py-[20px]'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Other Payout Links</span> <span className='font-normal text-sm leading-tight text-left text-[#37B6FF] cursor-pointer'>{bankDetailData?.otherPayoutLinks}</span></p>
            <p className='flex items-center justify-between w-[50%] m-auto py-[20px]'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Paypal details</span> <span className='font-normal text-sm leading-tight text-left text-[#37B6FF] cursor-pointer'>{bankDetailData?.PaypalLink}</span></p>

        </div>
    );


    return (
        <div className="w-[80%] bg-blue h-[100%] mx-auto flex flex-column">
            <div className='flex w-[100%] justify-end flex-end'>
                <div className='bg-[#FCB305]  cursor-pointer w-[200px] flex items-center justify-center rounded-[14px]' >
                    <p className='font-sans text-xl font-normal leading-tight text-white mt-[10px]'>Update Your Details</p>
                </div>
                {/* <SwipeableDrawer
                    className="w-[300px]"
                    anchor="right" // Set anchor to 'right'
                    open={isDrawerOpen} // Pass the boolean state variable here
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}>
                    <UpdateDetailDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
                </SwipeableDrawer> */}

            </div>
            <div className="flex items-center w-[100%]">
                <div className="w-[90%] mx-auto flex flex-column">
                    <div className='w-[50%] mx-auto flex items-center justify-center' >
                        <p>
                            Your payment options Details
                        </p>
                    </div>
                    <div>
                    <form className="w-[60%] p-4 m-auto"  onSubmit={(e:React.FormEvent<HTMLFormElement>)=>handleUpdatesPayaPal(e)}>
                    <input className='mb-4' id='form5Example1' placeholder={'Account Holder Name'} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} />
                    <input className='mb-4' id='form5Example2' placeholder={accountNumber ? accountNumber : 'Account Number'} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setaccountNumber(e.target.value)} />
                    <input className='mb-4' id='form5Example1' placeholder={BankName ? BankName : 'Bank Name'} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setBankName(e.target.value)} />
                    <input className='mb-4' id='form5Example2' placeholder={SwiftCode ? SwiftCode : 'SWIFT Code'} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSwiftCode(e.target.value)} />
                    <input className='mb-4' id='form5Example1' placeholder={IfscCode ? IfscCode : 'IFSC Code'} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setIfscCode(e.target.value)} />
                    <input className='mb-4' id='form5Example2' placeholder={Number ? Number : 'Mobile Number'} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNumber(e.target.value)} />
                    <input className='mb-4' id='form5Example2' placeholder={BankAddress ? BankAddress : 'Bank Address'} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setBankAddress(e.target.value)} />
                    <input className='mb-4' id='form5Example1' placeholder={PaypalLink ? PaypalLink : 'Paypal Details'} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPaypalLink(e.target.value)} />
                    <input className='mb-4' id='form5Example1' placeholder={otherpayoutLinks ? otherpayoutLinks : 'Other Payout Links'} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setotherpayoutLinks(e.target.value)} />
                    <input type='submit' />


                </form>
                    </div>

                </div>

            </div>

            <ToastContainer />
        </div>
    );
};

export default HOC(UpdateMyPayoutOptions);

const UpdateDetailDrawer: React.FC<UpdateOptionDrawerProp> = ({ toggleDrawer, }) => {
    const [UserName, setUserName] = useState<string>("");
    const [accountNumber, setaccountNumber] = useState<string>("");
    const [BankName, setBankName] = useState<string>("");
    const [BankAddress, setBankAddress] = useState<string>("");
    const [SwiftCode, setSwiftCode] = useState<string>("");
    const [IfscCode, setIfscCode] = useState<string>("");
    const [Number, setNumber] = useState<string>("");
    const [PaypalLink, setPaypalLink] = useState<string>("");
    const [otherpayoutLinks, setotherpayoutLinks] = useState<string>("")
    const handleUpdatesPayaPal = async (e: any) => {
        e.preventDefault()
        const token = localStorage.getItem("UserToken");

        if (token) {
            const payload = {
                PaypalLink: PaypalLink ? PaypalLink : "",
                BankName: BankName ? BankName : "",
                accountNumber: accountNumber ? accountNumber : "",
                UserName: UserName ? UserName : "",
                BankAddress: BankAddress ? BankAddress : "",
                Number: Number ? Number : "",
                IfscCode: IfscCode ? IfscCode : "",
                otherpayoutLinks: otherpayoutLinks ? otherpayoutLinks : "",
                SwiftCode: SwiftCode ? SwiftCode : "",


            }
            const data = await UpdateMyPayoutOptions(payload, token);
            console.log(data)

            // if(success==true){
            //     setUpdated(true)
            //     const ErrorToast = () => {
            //         toast.success(msg, {
            //           position:"top-center",
            //           autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
            //           hideProgressBar: false, // Show the progress bar
            //           className: "custom-toast", // Custom class for styling
            //         });
            //       };
            //       ErrorToast();

            // }
            // else{
            //     const ErrorToast = () => {
            //         toast.error("error in updating options details please fill credentials carefully", {
            //           position:"top-center",
            //           autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
            //           hideProgressBar: false, // Show the progress bar
            //           className: "custom-toast", // Custom class for styling
            //         });
            //       };
            //       ErrorToast();
            // }


        }


    }
    return (
        <div className='w-[200px] py-[20px]'>
            <div className='w-[80%] m-auto'>
                <div className="flex w-[60%] justify-between  items-center">
                    <div
                        onClick={toggleDrawer(false)}
                        className="cursor-pointer"
                    >
                        <RxCrossCircled style={{ color: " #37B6FF", fontSize: "25px" }} />
                    </div>
                    <div className=''>
                        <p className="font-bold text-center text-xl leading-7 tracking-tight text-gray-900 mt-[5px]">Add Investment</p>
                    </div>
                </div>
                <form className="w-[60%] p-4 m-auto" onSubmit={handleUpdatesPayaPal}>
                    <input className='mb-4' id='form5Example1' placeholder={'Account Holder Name'} onChange={(e: any) => setUserName(e.target.value)} />
                    <input className='mb-4' id='form5Example2' placeholder={accountNumber ? accountNumber : 'Account Number'} onChange={(e: any) => setaccountNumber(e.target.value)} />
                    <input className='mb-4' id='form5Example1' placeholder={BankName ? BankName : 'Bank Name'} onChange={(e: any) => setBankName(e.target.value)} />
                    <input className='mb-4' id='form5Example2' placeholder={SwiftCode ? SwiftCode : 'SWIFT Code'} onChange={(e: any) => setSwiftCode(e.target.value)} />
                    <input className='mb-4' id='form5Example1' placeholder={IfscCode ? IfscCode : 'IFSC Code'} onChange={(e: any) => setIfscCode(e.target.value)} />
                    <input className='mb-4' id='form5Example2' placeholder={Number ? Number : 'Mobile Number'} onChange={(e: any) => setNumber(e.target.value)} />
                    <input className='mb-4' id='form5Example2' placeholder={BankAddress ? BankAddress : 'Bank Address'} onChange={(e: any) => setBankAddress(e.target.value)} />
                    <input className='mb-4' id='form5Example1' placeholder={PaypalLink ? PaypalLink : 'Paypal Details'} onChange={(e: any) => setPaypalLink(e.target.value)} />
                    <input className='mb-4' id='form5Example1' placeholder={otherpayoutLinks ? otherpayoutLinks : 'Other Payout Links'} onChange={(e: any) => setotherpayoutLinks(e.target.value)} />
                    <input type='submit' />


                </form>
            </div>

            <ToastContainer />
        </div>




    )
}


<MDBInput className='mb-4' id='form5Example1' label={'Account Holder Name'}  />
<MDBInput className='mb-4'  id='form5Example2' label={accountNumber?accountNumber:'Account Number'} onChange={(e:any)=>setaccountNumber(e.target.value)} />
<MDBInput className='mb-4' id='form5Example1' label={BankName?BankName:'Bank Name'} onChange={(e:any)=>setBankName(e.target.value)} />
<MDBInput className='mb-4'  id='form5Example2' label={SwiftCode?SwiftCode:'SWIFT Code'} onChange={(e:any)=>setSwiftCode(e.target.value)} /> 
<MDBInput className='mb-4' id='form5Example1' label={IfscCode?IfscCode:'IFSC Code'} onChange={(e:any)=>setIfscCode(e.target.value)} />
<MDBInput className='mb-4'  id='form5Example2' label={Number?Number:'Mobile Number'} onChange={(e:any)=>setNumber(e.target.value)}  />
<MDBInput className='mb-4'  id='form5Example2' label={BankAddress?BankAddress:'Bank Address'} onChange={(e:any)=>setBankAddress(e.target.value)} />