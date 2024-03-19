import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import playstore from "../../../public/images/playstore.png";
import appstore from "../../../public/images/appstore.png";
import qrimage from "../../../public/images/qrimage.png";

const SignupDiv = () => {
    return (
        <div className='signupdiv w-[100%]  '>
            <div className='w-[95%] m-auto flex justify-between items-center py-4'>
            <div className="flex w-[40%] justify-between items-start">
          <div >
                    <div className="w-[20%] justify-center items-center mx-auto mt-[30px]">
                        <Button style={{ borderRadius: "10px" }} className="w-[200px] text-[#FFFFFF] border-none bg-[#FCB305] hover:bg-[#1D687F] hover:text-[#1E1E1E] hover:border-none px-4">Sign Up Now</Button>
                    </div>
                </div>
          </div>
          <div  style={{ color: "white" }} className="flex w-[50%] flex-col space-y-2 justify-start items-start" >
            <div>
              <p className="font-bold  text-xl leading-7 font-helvetica">
                Download Lorem Application
              </p>
            </div>
            <div>
              <p className="font-normal text-base leading-5 text-left font-helvetica">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                erat nisl, finibus quis purus et, semper pharetra nisi. Praesent
                quis euismod sem. Morbi non lectus vitae odio ultricies aliquam
                ut ac metus.
              </p>
            </div>
            <div className="flex w-full justify-between items-center">
              <div>
                <Image src={playstore} alt="Play Store" />
              </div>
              <div>
                <Image src={appstore} alt="playstore" />
              </div>
              <div className="w-70 h-[80px] border-4">
                
              </div>
              <div>
                <Image src={qrimage} alt="playstore" />
              </div>
              <div>
                <p className="font-bold text-base leading-5 text-right font-helvetica">
                  SCAN CODE
                </p>
              </div>
            </div>
          </div>
            </div>
     
        </div>
    );
}

export default SignupDiv;