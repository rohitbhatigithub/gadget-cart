import React from "react";
import { IoIosSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import DarkMode from "./DarkMode";
const Navbar = ({ handleOrderPopup }) => {
    const menuLink = [
        {
            id: 1,
            name: "Home",
            link: "/#",
        },
        {
            id: 2,
            name: "Shop",
            link: "/#shop",
        },
        {
            id: 3,
            name: "About",
            link: "/#about",
        },
        {
            id: 4,
            name: "Blogs",
            link: "/#blogs",
        },
    ];

    const DropdownLink = [
        {
            id: 1,
            name: "Trending Products",
            link: "/#",
        },
        {
            id: 2,
            name: "Best Selling",
            link: "/#",
        },
        {
            id: 3,
            name: "Top Rated",
            link: "/#",
        },
    ];
    return (
        <div className="w-full dark:bg-slate-800 ">
            <div className="px-8">
                <div className="flex items-center justify-between  py-4 gap-8">
                    <div className="flex items-center gap-8">
                        {/* web Name */}
                        <div className="text-primary text-2xl font-semibold">
                            ESHOP
                        </div>
                        {/* menuLink */}
                        <div className="hidden md:flex">
                            <ul className="   md:flex items-center gap-8">
                                {menuLink.map((menu, id) => {
                                    return (
                                        <li
                                            key={id}
                                            className="dark:text-white font-semibold text-lg text-gray-500"
                                        >
                                            <a href={menu.link}>{menu.name}</a>
                                        </li>
                                    );
                                })}
                                {/* Quick Link */}
                                <div className="flex flex-col items-center cursor-pointer relative group">
                                    <div className="flex items-center gap-2 group-hover:text-gray-900">
                                        <div className="text-gray-500 font-semibold text-lg dark:text-white">
                                            Quick Link
                                        </div>
                                        <div className="transform transition duration-300 ease-in-out group-hover:rotate-180">
                                            <IoMdArrowDropdown className="text-2xl text-gray-500 font-semibold dark:text-white" />
                                        </div>
                                    </div>

                                    <ul className="hidden group-hover:block w-full absolute top-6  left-4 bg-white shadow-md rounded-md z-40">
                                        {DropdownLink.map((item, id) => {
                                            return (
                                                <li key={id} className="">
                                                    <a
                                                        href={item.link}
                                                        className=" block py-2 px-4 hover:bg-primary/20 hover:text-gray-600 text-md font-medium"
                                                    >
                                                        {item.name}
                                                    </a>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 lg:gap-12">
                        {/* search bar */}
                        <div className="flex items-center border-2 p-1 rounded-full px-2 group">
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-0 group-hover:md:w-[200px] group-hover:w-[130px] duration-300 outline-none dark:bg-gray-600 rounded-full  dark:text-white"
                            />
                            <IoIosSearch className="dark:text-white" />
                        </div>
                        {/* cart */}
                        <div className="relative" onClick={handleOrderPopup}>
                            <button className="">
                                <FaCartShopping className="dark:text-white" />
                                <span className="w-4 h-4 rounded-full text-white font-medium bg-red-500 absolute text-center flex items-center justify-center bottom-5 left-2">
                                    4
                                </span>
                            </button>
                        </div>
                        {/* dark mode */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
