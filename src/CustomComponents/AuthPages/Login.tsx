'use client'
import { Label } from '@/components/ui/label';
import { setLoggin } from '@/lib/Reducers/AuthSlice/AuthSlice';
import { UserLoginApi } from '@/lib/Reducers/api';
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

interface logindatatype {
    email?: string,
    password?: string
}


const Login = () => {
    const router=useRouter();
    const [formErrors, setFormErrors] = useState<Partial<logindatatype>>({});
    const [email, setemail] = useState<string>("");
    const [password, setpassword] = useState<string>("");
    const [isSubmit, setIsSubmit] = useState<Boolean>(false)
    const loginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const obj = {
            email, password
        }
        setFormErrors(validate(obj));
        setIsSubmit(true)
    }
    const SaveUserData = async () => {
        const UserData = await UserLoginApi({ email, password });
        console.log(UserData);
     
        if (UserData.success == true) {
            localStorage.setItem("UserToken",UserData.token)
            setLoggin(UserData.data)
            Store.addNotification({
                title: "Login Notification",
                message: UserData.msg,
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
            if(UserData.data.role=="user"){
                router.push("/MyAccount");

            }else{
                router.push("/RegisteredUsers");
            }
        }else{
            Store.addNotification({
                title: "Login Notification",
                message:UserData.response.data.msg,
                type: "danger",
                insert: "top",
                container: "top-center",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        }

    }
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            SaveUserData()

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

    return (
        <div className='w-[100%] py-[40px]'>
            <div className="w-[50%] flex flex-col  items-start justify-start mx-auto space-y-3">
                <div className="flex items-center justify-center w-[100%]">
                    <p className="font-heading  flex items-center text-3xl xs:text-6xl font-bold text-gray-900">Login</p>
                </div>
                <form className="flex flex-col items-start justify-start w-[50%] mx-auto space-y-6" onSubmit={loginSubmit}>
                    <div className="grid w-[100%] h-[120px] my-auto max-w-sm items-center gap-1.5">
                        <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="text">Email</Label>
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="email" name="FirstName" placeholder="john@gmail.com" onChange={(e) => setemail(e.target.value)} />
                        <p className="text-[#FF0000]">{formErrors?.email}</p>
                    </div>
                    <div className="grid w-[100%] h-[120px] my-auto max-w-sm items-center gap-1.5">
                        <Label className="font-bold text-[#1E1E1EB2] text-base pt-3 " htmlFor="text">Password</Label>
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#1D687F]" type="text" name="MiddleName" placeholder="*********" onChange={(e) => setpassword(e.target.value)} />
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
        </div>
    )
}

export default dynamic(() => Promise.resolve(Login))