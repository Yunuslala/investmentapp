
import dynamic from "next/dynamic";
const Signup =dynamic(()=>import("../../CustomComponents/AuthPages/Signup"))

export default function page(){
    return(
        <>
        <Signup />
        </>
    )
}