"use client";
import "./Video.css"
import 'bootstrap/dist/css/bootstrap.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from "reactstrap";
import React, { useState } from "react";

interface item {
    src: string,
    altText: string,
    caption: string,
    key: number,
    isVideo: boolean,
}



const items: item[] = [
    {
        src: "https://player.vimeo.com/progressive_redirect/playback/428015311/rendition/720p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=901c4fcc3b45430c5c6086c9d53352ccb3799ff29e7119abdcc0ecf7bcd75a03",
        altText: "Slide 1",
        caption: "Slide 1",
        key: 1,
        isVideo: true,
    },
    {
        src: "https://wallpaper.dog/large/20611380.jpg",
        altText: "Slide 2",
        caption: "Slide 2",
        key: 2,
        isVideo: false
    }
    
];
const VideoCarousel: React.FC = (args) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: number) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item?.src}
                className="w-[100%] border-t-1 border-[#1E1E1E]"
            >
                {item.isVideo ? (
                    <div className="w-[100%] ">
                        <video className="w-full h-[442px] rounded-lg" controls>
                            <source src="https://www.shutterstock.com/shutterstock/videos/1105565351/preview/stock-footage-african-american-financial-analyst-works-in-broker-agency-office-d-abstract-ai-animation-of-real.webm" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                ) : (
                    <div className="w-[100%]">
                        <img
                            className="w-full h-[442px] object-cover"
                            src={item?.src}
                            alt={item.altText}
                        />
                    </div>

                )}
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={20000}
            {...args}
            className="w-full carousel-parnet"
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
           
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
};

export default VideoCarousel;
