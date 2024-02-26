import React from "react";
import { FaCarSide, FaWallet } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
const Services = () => {
    const ServiceData = [
        {
            id: 1,
            icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
            title: "Free Shipping",
            description: "Free Shipping On All Order",
        },
        {
            id: 2,
            icon: (
                <FaCheckCircle className="text-4xl md:text-5xl text-primary" />
            ),
            title: "Safe Money ",
            description: "30 Days Money Back",
        },
        {
            id: 3,
            icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
            title: "Secure Payment",
            description: "All Payment Secure",
        },
        {
            id: 4,
            icon: (
                <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />
            ),
            title: "Online Supoort 24/7",
            description: "Technical Support 24/7",
        },
    ];
    return (
        <div className="p-8">
            <div className="container mt-2 md:mt-10 ">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                    {ServiceData.map((data) => {
                        return (
                            <div
                                className="flex flex-col items-start sm:flex-row gap-4"
                                key={data.id}
                            >
                                {data.icon}
                                <div>
                                    <h1 className="lg:text-xl font-bold">
                                        {data.title}
                                    </h1>
                                    <h1 className="text-gray-400 text-sm">
                                        {data.description}
                                    </h1>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;
