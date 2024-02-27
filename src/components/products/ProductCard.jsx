import React from "react";
import Button from "../shared/Button";

const ProductCard = ({ data }) => {
    return (
        <div className="mb-10  ">
            <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 place-items-center">
                {/* card section */}
                {data.map((data) => (
                    <div className="group" key={data.id}>
                        <div className="relative bg-gradient-to-r from-gray-300/80 to-gray-100">
                            <img
                                src={data.img}
                                alt=""
                                className="h-[170px] md:h-[220px] w-[200px] md:w-[250px] object-scale-down md:object-content rounded-md"
                            />
                            {/* hover button */}
                            <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-300 rounded-md">
                                <Button
                                    text={"Add to cart"}
                                    bgColor={"bg-primary"}
                                    textColor={"text-white"}
                                />
                            </div>
                        </div>
                        <div className="leading-7">
                            <h2 className="font-semibold">{data.title}</h2>
                            <h2 className="font-bold">${data.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
