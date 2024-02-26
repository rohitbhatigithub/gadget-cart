import React from "react";
import Speeker from "../../assets//category/speeker.png";
import VR from "../../assets/category/VR.png";
import Headphone from "../../assets/category/headphobe.png";
import Button from "../shared/Button";
const Category2 = () => {
    return (
        <div className="p-4">
            <div className="container">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* first col */}
                    <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-start">
                        <div className="z-50">
                            <div className="mb-4">
                                <p className="mb-[2px] text-white">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">
                                    With
                                </p>
                                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                                    Laptop
                                </p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"}
                                />
                            </div>
                        </div>
                        <img
                            src={Speeker}
                            alt=""
                            className="w-[250px] absolute bottom-0 md:top-1/2 md:-translate-y-1/2 md:-right-0"
                        />
                    </div>
                    {/* second col */}
                    <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start">
                        <div className="z-10">
                            <div className="mb-4">
                                <p className="mb-[2px] text-white">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">
                                    With
                                </p>
                                <p className="text-2xl md:text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                                    Earphone
                                </p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-white"}
                                    textColor={"text-brandGreen"}
                                />
                            </div>
                        </div>
                        <img
                            src={VR}
                            alt=""
                            className="w-[300px] absolute bottom-0 "
                        />
                    </div>
                    {/* third col */}
                    <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start">
                        <div className="z-50">
                            <div className="mb-4">
                                <p className="mb-[2px] text-white">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">
                                    With
                                </p>
                                <p className="text-2xl md:text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                                    Gadget
                                </p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-white"}
                                    textColor={"text-brandBlue"}
                                />
                            </div>
                        </div>
                        <img
                            src={Headphone}
                            alt=""
                            className="w-[250px] absolute bottom-0 -right-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category2;
