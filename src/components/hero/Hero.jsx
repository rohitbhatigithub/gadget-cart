import React, { useState } from "react";
import Slider from "react-slick";
import Headphone from "../../assets/category/headphobe.png";
import Earphone from "../../assets/category/earphone.png";
import Gamming from "../../assets/category/gamming.png";
import Mac from "../../assets/category/mac.png";
import Watch from "../../assets/category/simple watch.png";
import SmartWatch from "../../assets/category/smart watch.png";
import Speeker from "../../assets/category/speeker.png";
import VR from "../../assets/category/VR.png";
import Button from "../shared/Button";

const HeroData = [
    {
        id: 1,
        img: Headphone,
        subtitle: "Beats Solo",
        title1: "Wireless",
        title2: "HPhone",
    },
    {
        id: 2,
        img: Gamming,
        subtitle: "Beats Solo",
        title1: "Wireless",
        title2: "Virtual",
    },
    {
        id: 3,
        img: Mac,
        subtitle: "Beats Solo",
        title1: "Branded",
        title2: "Laptop",
    },
    {
        id: 4,
        img: SmartWatch,
        subtitle: "Beats Solo",
        title1: "Wireless",
        title2: "StWatch",
    },
    {
        id: 5,
        img: VR,
        subtitle: "Beats Solo",
        title1: "Wireless",
        title2: "VR",
    },
    {
        id: 6,
        img: Watch,
        subtitle: "Beats Solo",
        title1: "Wireless",
        title2: "Watch",
    },
    {
        id: 7,
        img: Speeker,
        subtitle: "Beats Solo",
        title1: "Wireless",
        title2: "Speeker",
    },
];

const Hero = ({ handleOrderPopup }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
        afterChange: (current) => setCurrentSlide(current),
    };

    const customPaging = (i) => {
        return (
            <div
                className={`h-3 w-3 rounded-full ${
                    currentSlide === i ? "bg-slate-400" : "bg-gray-300"
                }`}
            />
        );
    };

    return (
        <div className="w-full p-4">
            <div className="overflow-hidden p-4 bg-gradient-to-r from-gray-300/80 to-gray-100 dark:from-gray-900 dark:to-gray-800 dark:text-white rounded-xl max-h-[530px] md:min-h-[400px]">
                <div className="container">
                    <Slider {...settings} customPaging={customPaging}>
                        {HeroData.map((data) => {
                            return (
                                <div key={data.id} className="grid grid-cols-1">
                                    <div className="flex flex-col md:flex-row items-center justify-between sm:order-1 md:order-2">
                                        {/* text content section */}
                                        <div className="flex flex-col md:justify-center gap-4 text-left relative z-0">
                                            <h1
                                                data-aos="zoom-out"
                                                data-aos-duration="500"
                                                data-aos-once="true"
                                                className="text-2xl font-bold sm:text-6xl lg:text-7xl"
                                            >
                                                {data.subtitle}
                                            </h1>
                                            <h1
                                                data-aos="zoom-out"
                                                data-aos-duration="500"
                                                data-aos-once="true"
                                                className="text-5xl sm:text-2xl lg:text-7xl font-bold "
                                            >
                                                {data.title1}
                                            </h1>
                                            <h1
                                                data-aos="zoom-out"
                                                data-aos-duration="500"
                                                data-aos-once="true"
                                                className="text-4xl uppercase text-white dark:text-white/5  md:text-[100px] xl-text-[150px] font-bold z-0"
                                            >
                                                {data.title2}
                                            </h1>
                                            <Button
                                                handler={handleOrderPopup}
                                                text="Shop Now"
                                                bgColor="bg-primary"
                                                textColor="text-white"
                                                width="w-[12rem]"
                                                mdWidth="w-[22rem]"
                                            />
                                        </div>

                                        {/* img  section */}
                                        <div className="sm:order-2 md:order-1 my-3 relative ">
                                            <div
                                                data-aos="zoom-in"
                                                data-aos-once="true"
                                                className="flex items-center justify-center"
                                            >
                                                <img
                                                    className="w-[300px] h-[260px] scale-110 object-contain mx-auto drop-shadow-md pr-6 z-40 "
                                                    src={data.img}
                                                    alt={data.subtitle}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Hero;
