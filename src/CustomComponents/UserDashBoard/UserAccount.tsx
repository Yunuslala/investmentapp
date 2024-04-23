
"use client"
import dynamic from 'next/dynamic'
import HOC, { logUserType } from '../Layout/HOC'
import { Avatar } from '@mui/material'
// const HOC =dynamic(()=>import("../Layout/HOC"))
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import React, { useEffect, useState } from 'react'
import 'react-notifications-component/dist/theme.css'
import { ReactNotifications, Store } from 'react-notifications-component'
import { Label } from '@/components/ui/label';
import FlipCameraIosIcon from '@mui/icons-material/FlipCameraIos';
import "./Account.css"
import {  UpdateUserAvtar, UpdateUserPassword, UserProfile } from '@/lib/Reducers/api';
import { setLoggin } from '@/lib/Reducers/AuthSlice/AuthSlice';
import { useDispatch } from 'react-redux';
export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

export interface ProfileUserData  extends logUserType{
    avatar?:string,
    Status:string,
    Locality:string
}

interface logindatatype{
    password?:string,
    email?:string
}

const emails = ['username@gmail.com', 'user02@gmail.com'];
interface Props {
    pagetype?: string;
}

const UserAccount:React.FC<Props> = () => {
    const dispatch=useDispatch()
        const [open, setOpen] = React.useState(false);
        const [selectedValue, setSelectedValue] = React.useState(emails[1]);
        const [isHovered, setIsHovered] = useState<boolean>(false);
        const [loginuserData,setLoginUserData]=useState<ProfileUserData>({})
        const [storeFile,setStoreFile]=useState<File | null>()
        const handleClickOpen = () => {
            setOpen(true);
        };
        const handleClose = (value: string) => {
            setOpen(false);
            setSelectedValue(value);
        };
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const token = localStorage.getItem("UserToken");
                    if (token) {
                        const {data} = await UserProfile(token);
                        setLoginUserData(data);
                        console.log("profileUserData", data);
                    }
                } catch (error) {
                    console.error("Error fetching user profile:", error);
                }
            };
        
            fetchData();
        }, []);
        useEffect(()=>{

        },[loginuserData])
        function SimpleDialog(props: SimpleDialogProps) {
            const { onClose, selectedValue, open } = props;
            const [formErrors, setFormErrors] = useState<Partial<logindatatype>>({});
            const [email, setemail] = useState<string>("");
            const [password, setpassword] = useState<string>("");
            const [confirmPassword,setConfirmpassword]=useState<string>("");
            const [isSubmit, setIsSubmit] = useState<Boolean>(false)
            const loginSubmit = (e: React.FormEvent) => {
                e.preventDefault();
                const obj = {
                    email, password
                }
                setFormErrors(validate(obj));
                setIsSubmit(true)
            }
            useEffect(() => {
                if (Object.keys(formErrors).length === 0 && isSubmit) {
                    const payload:{
                        email: string;
                        password: string;
                        confirmPassword: string;
                    }={email,password,confirmPassword};
                    const fetchData = async () => {
                        try {
                            const token = localStorage.getItem("UserToken");
                            if (token) {

                                const {data,msg,success} = await UpdateUserPassword(payload,token);
                                if(success){
                                    Store.addNotification({
                                        title: "password-update",
                                        message: msg,
                                        type: "success",
                                        insert: "top",
                                        container: "top-center",
                                        animationIn: ["animate__animated", "animate__fadeIn"],
                                        animationOut: ["animate__animated", "animate__fadeOut"],
                                        dismiss: {
                                            duration: 5000,
                                            onScreen: true
                                        }
                                    });
                                    setLoginUserData(data);
                                    dispatch(setLoggin(data))
                                    console.log("profileUserData", data);
                                    handleClose()
                                }
                              
                            }
                        } catch (error) {
                            console.error("Error fetching user profile:", error);
                        }
                    };
                
                    fetchData();
                }
            }, [formErrors])
         
            const validate = (value: logindatatype) => {
                const errors: logindatatype = {};
                if (!value.email) {
                    errors.email = "Email is required";
                }
                if (!value.password || value.password.length <= 4) {
                    errors.password = "Password must be at least 4 characters"
                }
                return errors
            }
         
        
            const handleClose = () => {
                onClose(selectedValue);
            };
        
            const handleListItemClick = (value: string) => {
                onClose(value);
            };
        
            return (
                <Dialog onClose={handleClose} open={open}>
                    <div className="w-[600px] flex flex-col  items-start justify-start mx-auto space-y-3 py-[40px]">
                        <div>
        
                        </div>
                        <div className="flex items-start justify-start w-[50%] mx-auto">
                            <p className="font-heading  flex items-center text-2xl xs:text-6xl font-bold text-gray-900">Reset Password</p>
                        </div>
                        <form className="flex flex-col items-start justify-start w-[50%] mx-auto space-y-6" onSubmit={loginSubmit}>
                            <div className="grid w-[100%] h-[120px] my-auto max-w-sm items-center gap-1">
                                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="text">Email</Label>
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="email" name="FirstName" placeholder="john@gmail.com" onChange={(e) => setemail(e.target.value)} />
                                <p className="text-[#FF0000]">{formErrors?.email}</p>
                            </div>
                            <div className="grid w-[100%] h-[120px] my-auto max-w-sm items-center gap-1">
                                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="text">Password</Label>
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="text" name="MiddleName" placeholder="*********" onChange={(e) => setpassword(e.target.value)} />
                                <p className="text-[#FF0000]">{formErrors?.password}</p>
                            </div>
                            <div className="grid w-[100%] h-[120px] my-auto max-w-sm items-center gap-1">
                                <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="text">Confirm Password</Label>
                                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="password" name="MiddleName" placeholder="*********" onChange={(e) => setConfirmpassword(e.target.value)} />
                                <p className="text-[#FF0000]">{formErrors?.password}</p>
                            </div>
                            <div className="w-[100%] mx-auto mt-[15px]">
                                <input type='submit' value='submit' style={
                                    { borderRadius: "10px" }
                                } className="w-[100%] py-[10px]  flex justify-center text-[#FFFFFF]  items-center  bg-[#1D687F] hover:bg-[#FCB305] hover:text-[#1E1E1E] hover:border-none cursor-pointer" />
                            </div>
                        </form>
                        <ReactNotifications />
                    </div>
                </Dialog>
            );
        }
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const formdata=new FormData();
                    formdata.append("profile",storeFile?storeFile:"");
                    const token = localStorage.getItem("UserToken");
                    console.log("Token:", token); // Debugging message to check token
                    if (token && storeFile) {
                       
                        const { data, msg, success } = await UpdateUserAvtar(formdata, token);
                        if(success){
                            Store.addNotification({
                                title: "Login Notification",
                                message: msg,
                                type: "success",
                                insert: "top",
                                container: "top-center",
                                animationIn: ["animate__animated", "animate__fadeIn"],
                                animationOut: ["animate__animated", "animate__fadeOut"],
                                dismiss: {
                                    duration: 5000,
                                    onScreen: true
                                }
                            });
                            setLoginUserData(data);
                            dispatch(setLoggin(data))
                            console.log("profileUserData", data);
                        }
                    } else {
                        console.warn("Token not found in localStorage."); // Debugging message for missing token
                    }
                } catch (error) {
                    console.error("Error fetching user profile:", error);
                }
            };
        
            fetchData();
        }, [storeFile]);
        
        return (
            <div  className="w-[60%] shadow-lg  mx-auto mt-[80px]  bg-[#FCB305]">
                <div className='relative w-[100%] '>
                    <div className='absolute account-avtar top-[-30px] left-[45%]' onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
                        <div className="relative cursor-pointer">
                            <Avatar className="w-[90px] h-[90px] object-center object-cover" alt="Remy Sharp" src={loginuserData?.avatar?loginuserData.avatar:"https://randomuser.me/api/portraits/men/79.jpg"} />
                          <div>
                                <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: "none" }}
                                    onChange={(e) => {
                                        const files = e.target?.files;
                                        if (files && files.length > 0) {
                                            setStoreFile(files[0]);
                                        } else {
                                            setStoreFile(null);
                                        }
                                    }}
                                    
                                    className="mt-5"
                                />
                                <div
                                    onClick={() => {
                                        const fileInput = document.getElementById("fileInput");
                                        if (fileInput) {
                                            fileInput.click();
                                        }
                                    }
                                    }
                                    className={`flex w-full items-center justify-evenly space-x-3 ${isHovered ? "overlaycattwo" : "overlaycattwohide"} `}
                                >
                                    <FlipCameraIosIcon className='cursor-pointer' style={{ fontSize: "40px", color: 'white' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[45%] mx-auto flex flex-col space-y-[6px] items-center justify-center pt-[100px] pb-[40px]'>
                        <p className="font-bold text-center text-2xl leading-7 text-white">{loginuserData?.Status && loginuserData?.Status}</p>
                        <p className="font-bold text-center text-lg leading-7 text-white">{loginuserData && loginuserData?.FirstName+" "+loginuserData?.LastName}</p>
                        <p className="font-normal text-center text-sm leading-7 text-white">{loginuserData && loginuserData.Locality+","+loginuserData?.City+","+loginuserData?.State+","+loginuserData?.Country}</p>
                        <p className="font-normal text-center text-sm leading-7 text-white">{loginuserData && loginuserData?.email}</p>
                        <p className="font-normal text-center text-sm leading-7 text-white">{loginuserData && loginuserData?.Contact}</p>
                        <p className="font-normal text-center text-sm leading-7 text-white">{loginuserData && loginuserData?.createdAt?.toString()}</p>
                       <div className="w-[100%] mx-auto pt-[25px]" onClick={handleClickOpen}>
                            <input type='submit' value='Reset-Password' style={
                                { borderRadius: "10px" }
                            } className="w-[100%] py-[10px]  flex justify-center text-[#FFFFFF]  items-center  bg-[#1D687F]  cursor-pointer" />
                        </div>
                        <SimpleDialog
                            selectedValue={selectedValue}
                            open={open}
                            onClose={handleClose}
                        />
                    </div>
                    <ReactNotifications />
                </div>

            </div>
        )
    
    
}



export default HOC(UserAccount)

