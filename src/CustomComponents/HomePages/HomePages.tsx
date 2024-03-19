import dynamic from "next/dynamic"
import { FaqSimple } from "./FaqSimple";
import SignupDiv from "./SignupDiv";
const VideoCarousel=dynamic(()=>import("./VideoCarousl"));
const LeadershipCarousel=dynamic(()=>import("./Leadership"));
const Industries=dynamic(()=>import("./IndustriesSector"));
const Testimonails = dynamic(() => import("./Testimonails"));




export default function  HomePages(){
return(
    <div className="w-[100%]">
    <VideoCarousel  />
    <LeadershipCarousel />
    <Industries />
    <FaqSimple />
    <Testimonails />
    <SignupDiv />
    </div>
)
}