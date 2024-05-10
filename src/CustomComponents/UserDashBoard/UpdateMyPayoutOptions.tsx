'use client'
import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import HOC from '../Layout/HOC';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BankDetailProp } from '../AdminDashBoard/UsersPayOptions';
import { useDispatch } from 'react-redux';
import { UpdateUserPayoutOptions, UserPayoutOption } from '@/lib/Reducers/api';

import { setbankDetail } from '@/lib/Reducers/UserPayOption/PayOptionslice';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/Reducers/store';
import { SwipeableDrawer } from '@mui/material';
interface UpdateOptionDrawerProp {
    toggleDrawer: (open: boolean) => React.MouseEventHandler<HTMLDivElement> | undefined;
    isDrawerOpen: boolean;
    
    setUpdated: (updated: boolean) => void;

}
export type OptionCategory = string;

import { RxCrossCircled } from 'react-icons/rx';
interface bankdetailprop {
    UserName?: string,
    accountNumber?: string,
    BankName?: string,
    BankAddress?: string,
    SwiftCode?: string,
    IfscCode?: string,
    ContactNumber?: string,
    PaypalLink?: string,
    otherpayoutLinks?: string,
    createdAt?: string
}


interface UserbankdetailProp {
    bankDetailData?: bankdetailprop
}
export function classNames(...classes: (string | boolean)[]): string {
    return classes.filter(Boolean).join(' ');
}


const UpdateMyPayoutOptions: React.FC = () => {
    const {bankdetail}=useSelector((state:RootState)=>state.PayoutOptionSlice)
    const [updated,setUpdated]=useState<boolean>(false);
    const [payoutOptions, setpayoutOptions] = useState<bankdetailprop>({});
    const dispatch = useDispatch();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer open/close
    const toggleDrawer = (open: boolean) => () => {
        console.log("open", open)
        setIsDrawerOpen(open); // Set the state directly with boolean value
    };
    useEffect(() => {
        const getUserPayDetail = async () => {
            const token = localStorage.getItem("UserToken");
            const UserId = localStorage.getItem("UserId");
            if (token && UserId) {
                const { data, success } = await UserPayoutOption(token, UserId);
                setpayoutOptions(data);
                dispatch(setbankDetail(data));
                console.log("getuserpaydetail",data)
                if (success) {
                   
                }


            }
        }
        getUserPayDetail()
    }, [updated])


    const BankAccountDetails: React.FC<UserbankdetailProp> = ({ bankDetailData }) => {
        useEffect(()=>{
            console.log("objectbankdetaildat",bankDetailData)
        },[bankDetailData])
        return(
            <div className='flex flex-col items-start justify-start w-[100%] space-y-[15px] py-[20px]' >
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Account Holder Name</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankDetailData?.UserName}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Account Number</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankDetailData?.accountNumber}</span> </p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>IFSC Code</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankDetailData?.IfscCode}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Bank Name</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankDetailData?.BankName}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Swift Code</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankDetailData?.SwiftCode}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Mobile Number</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankDetailData?.ContactNumber}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>user Address</span> <span className='font-normal text-sm leading-tight text-left text-[#5F5F5f]'>{bankDetailData?.BankAddress}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Other Payout Links</span> <span className='font-normal text-sm leading-tight text-left text-[#37B6FF] cursor-pointer'>{bankDetailData?.otherpayoutLinks}</span></p>
            <p className='flex items-center justify-between w-[60%] mx-auto'><span className='font-bold text-lg leading-tight text-left text-[#1E1E1E]'>Paypal details</span> <span className='font-normal text-sm leading-tight text-left text-[#37B6FF] cursor-pointer'>{bankDetailData?.PaypalLink}</span></p>
        </div>
        )
    }
     



    return (
        <div className="w-[80%] bg-blue h-[100%] mx-auto flex flex-column">
            <div className='flex w-[100%] justify-end flex-end'>
                <div className='bg-[#FCB305]  cursor-pointer w-[200px] flex items-center justify-center rounded-[14px]' onClick={toggleDrawer(true)}>
                    <p className='font-sans text-xl font-normal leading-tight text-white mt-[10px]'>Update Your Details</p>
                </div>
                <SwipeableDrawer
                    className="w-[300px]"
                    anchor="right" // Set anchor to 'right'
                    open={isDrawerOpen} // Pass the boolean state variable here
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}>
                    <UpdateDetailDrawer isDrawerOpen={isDrawerOpen} setUpdated={setUpdated} toggleDrawer={toggleDrawer} />
                </SwipeableDrawer>

            </div>
            <div className="flex items-center w-[100%]">
                <div className="w-[90%] mx-auto flex flex-column">
                    <div className='w-[50%] mx-auto flex items-center justify-center' >
                        <p>
                            Your payment options Details
                        </p>
                    </div>
                    <div>
                        <BankAccountDetails bankDetailData={payoutOptions} />
                    </div>

                </div>

            </div>

            <ToastContainer />
        </div>
    );
};

export default HOC(UpdateMyPayoutOptions);

const UpdateDetailDrawer: React.FC<UpdateOptionDrawerProp> = ({ toggleDrawer,setUpdated }) => {
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
            console.log("payload",payload)
            const data = await UpdateUserPayoutOptions(payload, token);
            setUpdated(false);
            toggleDrawer(false);

        //     // if(success==true){
        //     //     setUpdated(true)
        //     //     const ErrorToast = () => {
        //     //         toast.success(msg, {
        //     //           position:"top-center",
        //     //           autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
        //     //           hideProgressBar: false, // Show the progress bar
        //     //           className: "custom-toast", // Custom class for styling
        //     //         });
        //     //       };
        //     //       ErrorToast();

        //     // }else{
        //     //     const ErrorToast = () => {
        //     //         toast.error("error in updating options details please fill credentials carefully", {
        //     //           position:"top-center",
        //     //           autoClose: 3000, // Auto-close the toast after 5000 milliseconds (5 seconds)
        //     //           hideProgressBar: false, // Show the progress bar
        //     //           className: "custom-toast", // Custom class for styling
        //     //         });
        //     //       };
        //     //       ErrorToast();
        //     // }


        }


    }
    return (
        <div className='w-[400px] py-[20px]'>
            <div className='w-[80%] m-auto'>
                <div className="flex w-[60%] justify-between  items-center">
                    <div
                        onClick={toggleDrawer(false)}
                        className="cursor-pointer"
                    >
                        <RxCrossCircled style={{ color: " #37B6FF", fontSize: "25px" }} />
                    </div>
                    <div className=''>
                        <p className="font-bold text-center text-xl leading-7 tracking-tight text-gray-900 mt-[5px]">Update Details</p>
                    </div>
                </div>
                <form className="w-[100%] p-4 m-auto" onSubmit={handleUpdatesPayaPal}>
                <MDBInput className='mb-4' id='form5Example1' label={'Account Holder Name'}  onChange={(e: any) => setUserName(e.target.value)} />
                <MDBInput className='mb-4'  id='form5Example2' label={accountNumber?accountNumber:'Account Number'}  onChange={(e: any) => setaccountNumber(e.target.value)} />
                <MDBInput className='mb-4' id='form5Example1' label={BankName?BankName:'Bank Name'} onChange={(e: any) => setBankName(e.target.value)} />
                <MDBInput className='mb-4'  id='form5Example2' label={SwiftCode?SwiftCode:'SWIFT Code'}  onChange={(e: any) => setSwiftCode(e.target.value)} />
                <MDBInput className='mb-4' id='form5Example1' label={IfscCode?IfscCode:'IFSC Code'} onChange={(e: any) => setIfscCode(e.target.value)} />
                <MDBInput className='mb-4'  id='form5Example2' label={Number?Number:'Mobile Number'} onChange={(e: any) => setNumber(e.target.value)} />
                <MDBInput className='mb-4'  id='form5Example2' label={BankAddress?BankAddress:'Bank Address'} onChange={(e: any) => setBankAddress(e.target.value)} />
                <MDBInput className='mb-4' id='form5Example1' label={PaypalLink?PaypalLink:'Paypal Details'}  onChange={(e: any) => setPaypalLink(e.target.value)} />
                <MDBInput className='mb-4' id='form5Example1' label={otherpayoutLinks?otherpayoutLinks:'Other Payout Links'}  onChange={(e: any) => setotherpayoutLinks(e.target.value)} />
                <MDBBtn type='submit' block >
                Update
            </MDBBtn>
</form>
            </div>

            <ToastContainer />
        </div>




    )
}
