import React from "react";
import Button from "../shared/Button";
import Earphone from "../../assets/category/earphone.png";
import Watch from "../../assets/category/smart watch.png";
import Mac from "../../assets/category/mac.png";
const Category = () => {
    return (
        <div className="p-4">
            <div className="container">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* first col */}
                    <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-start">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[2px] text-gray-400">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">
                                    With
                                </p>
                                <p className="text-2xl md:text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                                    Earphone
                                </p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"}
                                />
                            </div>
                        </div>
                        <img
                            src={Earphone}
                            alt=""
                            className="w-[320px] absolute bottom-0"
                        />
                    </div>
                    {/* second col */}
                    <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-start">
                        <div className="z-40">
                            <div className="mb-4">
                                <p className="mb-[2px] text-white">Enjoy</p>
                                <p className="text-2xl font-semibold mb-[2px]">
                                    With
                                </p>
                                <p className="text-2xl md:text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                                    Watch
                                </p>
                                <Button
                                    text="Browse"
                                    bgColor={"bg-white"}
                                    textColor={"text-brandYellow"}
                                />
                            </div>
                        </div>
                        <img
                            src={Watch}
                            alt=""
                            className="w-[320px] absolute bottom-0"
                        />
                    </div>
                    {/* third col */}
                    <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end md:items-start">
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
                                    bgColor={"bg-white"}
                                    textColor={"text-primary"}
                                />
                            </div>
                        </div>
                        <img
                            src={Mac}
                            alt=""
                            className="w-[250px] absolute bottom-0 md:top-1/2 md:-translate-y-1/2 md:-right-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Category;
