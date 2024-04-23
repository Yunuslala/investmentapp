'use client'
import { useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import HOC from '../Layout/HOC';
import { MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { bankprop } from '../AdminDashBoard/UsersPayOptions';
import { useDispatch } from 'react-redux';
import { UserPayoutOption } from '@/lib/Reducers/api';
import { User } from 'lucide-react';
import { setbankDetail } from '@/lib/Reducers/UserPayOption/PayOptionslice';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/Reducers/store';
export type OptionCategory = string;
interface UserbankdetailProp{
    bankDetail?:bankprop
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
    const {bankdetail}=useSelector((state:RootState)=>state.PayoutOptionSlice)
    const [selectedTab, setSelectedTab] = useState<OptionCategory>('Paypal');
   
    const [updated,setUpdated]=useState<boolean>(false);
    const [payoutOptions,setpayoutOptions]=useState<bankprop>({});
    const dispatch=useDispatch();
    useEffect(()=>{
        const getUserPayDetail=async()=>{
        const token=localStorage.getItem("UserToken");
        const UserId=localStorage.getItem("UserId");
        if(token && UserId){
                const {data,success}=await UserPayoutOption(token,UserId);
                if(success){
                    setpayoutOptions(data);
                    dispatch(setbankDetail(data));
                }
          

        }
    }
    getUserPayDetail()
    },[updated])
   
   
    const BankAccountDetails:React.FC<UserbankdetailProp> = ({bankDetail}) => {
        const [UserName,setUserName]=useState<string>(bankdetail?.Username?bankdetail?.Username:"");
        const [accountNumber,setaccountNumber]=useState<string>(bankdetail?.accountNumber?bankdetail?.accountNumber:"");
        const [BankName,setBankName]=useState<string>(bankdetail?.BankName?bankdetail?.BankName:"");
        const [BankAddress,setBankAddress]=useState<string>(bankdetail?.BankAddress?bankdetail?.BankAddress:"");
        const [SwiftCode,setSwiftCode]=useState<string>(bankdetail?.SwiftCode?bankdetail?.SwiftCode:"");
        const [IfscCode,setIfscCode]=useState<string>(bankdetail?.IfscCode?bankdetail?.IfscCode:"");
        const [Number,setNumber]=useState<string>(bankdetail?.ContactNumber?bankdetail?.ContactNumber:"");
         const handleUpdates=async(e:any)=>{
        e.preventDefault()
        const token=localStorage.getItem("UserToken");

        if(token){
            const payload={
                Username:UserName?UserName:"",
                accountNumber:accountNumber?accountNumber:"",
                BankName:BankName?BankName:"",
                BankAddress:BankAddress?BankAddress:"",
                SwiftCode: SwiftCode? SwiftCode:"",
                IfscCode:IfscCode?IfscCode:"",
                Number:Number?Number:"",
            }
            const data=await UpdateMyPayoutOptions(payload,token);
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
                 
            // }else{
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
            <form className="w-[60%] p-4 m-auto" >
            <MDBInput className='mb-4' id='form5Example1' label={'Account Holder Name'}  />
            <MDBInput className='mb-4'  id='form5Example2' label={accountNumber?accountNumber:'Account Number'} onChange={(e:any)=>setaccountNumber(e.target.value)} />
            <MDBInput className='mb-4' id='form5Example1' label={BankName?BankName:'Bank Name'} onChange={(e:any)=>setBankName(e.target.value)} />
            <MDBInput className='mb-4'  id='form5Example2' label={SwiftCode?SwiftCode:'SWIFT Code'} onChange={(e:any)=>setSwiftCode(e.target.value)} /> 
            <MDBInput className='mb-4' id='form5Example1' label={IfscCode?IfscCode:'IFSC Code'} onChange={(e:any)=>setIfscCode(e.target.value)} />
            <MDBInput className='mb-4'  id='form5Example2' label={Number?Number:'Mobile Number'} onChange={(e:any)=>setNumber(e.target.value)}  />
            <MDBInput className='mb-4'  id='form5Example2' label={BankAddress?BankAddress:'Bank Address'} onChange={(e:any)=>setBankAddress(e.target.value)} />
            <MDBCheckbox
                wrapperClass='d-flex justify-content-center mb-4'
                id='form5Example3'
                label='I have read and agree to the terms'
                defaultChecked
            />
            <MDBBtn type='submit' block onClick={(e:any)=>handleUpdates(e)}>
                Update
            </MDBBtn>
            </form>
        )


    }
      

    const PayPal:React.FC<UserbankdetailProp> = ({bankDetail}) => {
    const [PaypalLink,setPaypalLink]=useState<string>(bankdetail?.PaypalLink?bankdetail?.PaypalLink:"");
    const handleUpdatesPayaPal=async(e:any)=>{
        e.preventDefault()
        const token=localStorage.getItem("UserToken");

        if(token){
            const payload={
                PaypalLink:PaypalLink?PaypalLink:"",
           
            }
            const data=await UpdateMyPayoutOptions(payload,token);
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
                 
            // }else{
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
            <form className="w-[60%] p-4 m-auto" >
            <MDBInput className='mb-4' id='form5Example1' label={PaypalLink?PaypalLink:'Paypal Details'} onChange={(e:any)=>setPaypalLink(e.target.value)} />
            <MDBCheckbox
                wrapperClass='d-flex justify-content-center mb-4'
                id='form5Example3'
                label='I have read and agree to the terms'
                defaultChecked
            />
    
            <MDBBtn type='submit' block onClick={(e:any)=>handleUpdatesPayaPal(e)}>
                Update
            </MDBBtn>
        </form>
        )
    }
    

    
    const OtherPayoutLinks:React.FC<UserbankdetailProp> = ({bankDetail}) => {
    const [otherpayoutLinks,setotherpayoutLinks]=useState<string>(bankdetail?.otherPayoutLinks?bankdetail?.otherPayoutLinks:"");
    const handleUpdatesother=async(e:any)=>{
        e.preventDefault()
        const token=localStorage.getItem("UserToken");

        if(token){
            const payload={
                otherpayoutLinks:otherpayoutLinks?otherpayoutLinks:""
            }
            const data=await UpdateMyPayoutOptions(payload,token);
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
                 
            // }else{
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
<form className="w-[60%] p-4 m-auto" >
            <MDBInput className='mb-4' id='form5Example1' label={otherpayoutLinks?otherpayoutLinks:'Other Payout Links'} onChange={(e:any)=>setotherpayoutLinks(e.target.value)} />
            <MDBCheckbox
                wrapperClass='d-flex justify-content-center mb-4'
                id='form5Example3'
                label='I have read and agree to the terms'
                defaultChecked
            />
    
            <MDBBtn type='submit' block onClick={(e:any)=>handleUpdatesother(e)}>
                Update
            </MDBBtn>
        </form>
        )
    }

    const categories: Record<OptionCategory, React.FC> = {
        Paypal: PayPal,
        'Bank Account Details': BankAccountDetails,
        'Other Payout Links': OtherPayoutLinks,
    };
    return (
        <div className="w-[80%] bg-blue h-[100%] mx-auto">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {Object.keys(categories).map((category: string) => (
                        <Tab
                            key={category}
                            className={({ selected }: { selected: boolean }) =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-[#1D687F]',
                                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                    selected
                                        ? 'bg-white text-blue-700 shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                            onClick={() => setSelectedTab(category)}
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2 ">
                    {Object.entries(categories).map(([category, Component]: [OptionCategory, React.FC<UserbankdetailProp>]) => (
                        <Tab.Panel
                            key={category}
                            className={classNames(
                                'rounded-xl bg-white p-3',
                                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                            )}
                            hidden={selectedTab !== category}
                        >
                            <Component bankDetail={bankdetail} />
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
            <ToastContainer />
        </div>
    );
};

export default HOC(UpdateMyPayoutOptions);
