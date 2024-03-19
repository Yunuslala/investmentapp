'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./Industries.module.css"; // Import CSS file for component styles
import { MoveRight } from 'lucide-react';
import SideDiv from "./SideDiv";

export interface Industry {
    name: string;
    image: string;
    typename: string;
    desc: string;
}

export default function IndustriesSector() {
    const [sideData, setSideData] = useState<Industry | null>(
        {
            name: "BioGas Energy",
            image: "https://uploads.wefunder.com/home-2023/explore-by-category/restaurant-gageandtollner.webp",
            typename: "Energy",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus erat, elementum vitae accumsan quis, eleifend id est. "
        }
    ); // Initialize sideData as null
    const [isSideDivOpen, setIsSideDivOpen] = useState(false); // Track whether SideDiv is open or closed

    const handleSectorClick = (item: Industry) => {
        setSideData(item);
        setIsSideDivOpen(true); // Set isSideDivOpen to true when SideDiv is opened
        AOS.refresh(); // Refresh AOS animations
    };


// B2B Trading
// Food [QSR]
// Entertainment
    const industries: Industry[] = [
        {
            name: "BioGas Energy",
            image: "https://uploads.wefunder.com/home-2023/explore-by-category/restaurant-gageandtollner.webp",
            typename: "Energy",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus erat, elementum vitae accumsan quis, eleifend id est. "
        },
        {
            name: "Technology Lorem",
            image: "https://uploads.wefunder.com/home-2023/explore-by-category/restaurant-gageandtollner.webp",
            typename: "Technology",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus erat, elementum vitae accumsan quis, eleifend id est. "
        },
        {
            name: "Facility Management",
            image: "https://uploads.wefunder.com/home-2023/explore-by-category/restaurant-gageandtollner.webp",
            typename: "Facility Management",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus erat, elementum vitae accumsan quis, eleifend id est. "
        },
        {
            name: "Engineering Collages",
            image: "https://uploads.wefunder.com/home-2023/explore-by-category/restaurant-gageandtollner.webp",
            typename: "Engineering",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus erat, elementum vitae accumsan quis, eleifend id est. "
        },
        {
            name: "Harley Davidson",
            image: "https://uploads.wefunder.com/home-2023/explore-by-category/restaurant-gageandtollner.webp",
            typename: "Automobiles",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus erat, elementum vitae accumsan quis, eleifend id est. "
        }
    ]
    const EnterTain:Industry[]= [
        {
            name: "Stanford School",
            image: "https://uploads.wefunder.com/home-2023/explore-by-category/restaurant-gageandtollner.webp",
            typename: "Education",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus erat, elementum vitae accumsan quis, eleifend id est. "
        },
        {
            name: "Skin Products",
            image: "https://uploads.wefunder.com/home-2023/explore-by-category/restaurant-gageandtollner.webp",
            typename: "Beauty & Wellness",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus erat, elementum vitae accumsan quis, eleifend id est. "
        },
        {
            name: "Media Schools",
            image: "https://uploads.wefunder.com/home-2023/explore-by-category/restaurant-gageandtollner.webp",
            typename: "Media",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus erat, elementum vitae accumsan quis, eleifend id est. "
        },
        {
            name: "Trradings in",
            image: "https://uploads.wefunder.com/home-2023/explore-by-category/restaurant-gageandtollner.webp",
            typename: "B2B Trading",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus erat, elementum vitae accumsan quis, eleifend id est. "
        },
        {
            name: "Needed Foody",
            image: "https://uploads.wefunder.com/home-2023/explore-by-category/restaurant-gageandtollner.webp",
            typename: "Food",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus erat, elementum vitae accumsan quis, eleifend id est. "
        },
        {
            name: "Dramas School",
            image: "https://uploads.wefunder.com/home-2023/explore-by-category/restaurant-gageandtollner.webp",
            typename: "Entertainment",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus erat, elementum vitae accumsan quis, eleifend id est. "
        }
    ]
    useEffect(() => {
        AOS.init({ once: true }); // Initialize AOS only once
    }, []);

    return (
        <div className="bg-[#fedbce] w-[100%] py-[50px] ">
 <div className="w-[90%] flex mx-auto flex-col ">
            {/* Header */}
            <div className="w-[60%] m-auto items-center justify-center flex flex-col">
                <p className="font-bold text-[#181414] text-2xl leading-4 tracking-normal text-left">Explore Our Sectors And Industries</p>
                <div className="flex items-center justify-center w-[50%]">
                    <p className="font-light text-[#5F5F5F] text-base leading-4 tracking-normal text-center">Invest to bring founders’ dreams to life, strengthen local communities, build a portfolio of long-term angel investments, or all of the above.</p>

                </div>
            </div>
            {/* Main Content */}
            <div className="flex w-[100%] mx-auto justify-between items-center mt-[20px]">
                {/* Sidebar */}
                <div className="flex w-[40%] h-[750px] flex-col justify-start items-start space-y-6">
                    <div className="flex w-[100%]  flex-col justify-start items-start">
                        <div className="flex w-[50%] justify-start my-2 ">
                            <p className="font-light text-[#5F5F5F] text-base leading-4 tracking-normal text-left">Browse by Industry</p>
                        </div>
                        <div className="flex gap-2 md:gap-4 flex-wrap">
                            {industries.map((item, i) => (
                                <button
                                    key={i}
                                    className="py-1.5 md:py-2 px-3 md:px-4 rounded-lg bg-white border-2 transition-all hover:border-gray-400 text-sm md:text-base focus-visible:border-black font-medium"
                                    onClick={() => handleSectorClick(item)}
                                >
                                    {item.typename}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex w-[100%]  flex-col justify-start items-start">
                        <div className="flex w-[50%] justify-start my-2 ">
                            <p className="font-light text-[#5F5F5F] text-base leading-4 tracking-normal text-left">Browse by Others</p>
                        </div>
                        <div className="flex gap-2 md:gap-4 flex-wrap">
                            {EnterTain?.map((item, i) => (
                                <button
                                    key={i}
                                    className="py-1.5 md:py-2 px-3 md:px-4 rounded-lg bg-white border-2 transition-all hover:border-gray-400 text-sm md:text-base focus-visible:border-black font-medium"
                                    onClick={() => handleSectorClick(item)}
                                >
                                    {item.typename}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>


                {sideData && (
                    <SideDiv
                        item={sideData}
                        isOpen={isSideDivOpen}
                        onClose={() => setIsSideDivOpen(false)} // Close SideDiv when needed
                    />
                )}
            </div>
        </div>
        </div>
       
    );
}



