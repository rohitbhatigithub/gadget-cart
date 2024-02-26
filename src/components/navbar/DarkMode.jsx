import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
const DarkMode = () => {
    const [theme, setTheme] = useState(false);
    const hendleDarkMode = () => setTheme(!theme);
    const element = document.documentElement;
    console.log(element);

    useEffect(() => {
        if (theme) {
            element.classList.add("dark");
            element.classList.add("dark");
        } else {
            element.classList.remove("light");
            element.classList.remove("dark");
        }
    }, [element.classList, theme]);
    return (
        <div className="w-full">
            {theme ? (
                <MdOutlineDarkMode
                    className="cursor-pointer text-xl dark:text-white"
                    onClick={hendleDarkMode}
                />
            ) : (
                <MdDarkMode
                    className="cursor-pointer text-xl "
                    onClick={hendleDarkMode}
                />
            )}
        </div>
    );
};

export default DarkMode;
