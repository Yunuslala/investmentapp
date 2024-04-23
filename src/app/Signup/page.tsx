
import dynamic from "next/dynamic";
import { Suspense } from "react";
const Signup = dynamic(() => import("../../CustomComponents/AuthPages/Signup"))

export default function page() {
    return (

        <Suspense fallback={<div>Loading...</div>}><Signup /></Suspense>


    )
}