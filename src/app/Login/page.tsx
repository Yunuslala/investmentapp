import dynamic from "next/dynamic"

const Login=dynamic(()=>import("../../CustomComponents/AuthPages/Login"))
export default function page(){
    return(
        <>
        <Login />
        </>
    )
}