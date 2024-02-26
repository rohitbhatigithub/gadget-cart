import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Category from "./components/category/Category";
import Category2 from "./components/category/Category2";
import Services from "./components/services/Services";
import Banner from "./components/banner/Banner";
import Products from "./components/products/Products";
import Blog from "./components/blog/Blog";
import Partners from "./components/partners/Partners";

import AOS from "aos";
import "aos/dist/aos.css";
// images
import Headphone from "./assets/category/headphobe.png";
import SmartWatch from "./assets/category/smart watch.png";
import Footer from "./components/footer/Footer";
import Popup from "./components/popup/Popup";
function App() {
    const BannerData = {
        discount: "30% OFF",
        title: "Fine Smile",
        date: "10 Jan to 28 Jan",
        image: Headphone,
        title2: "Air Solo Bass",
        title3: "Winter Sale",
        title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
        bgColor: "#f42c37",
    };

    const BannerData2 = {
        discount: "30% OFF",
        title: "Happy Hours",
        date: "14 Jan to 28 Jan",
        image: SmartWatch,
        title2: "Smart Solo",
        title3: "Winter Sale",
        title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
        bgColor: "#2dcc6f",
    };
    const [orderPopup, setOrderPopup] = useState(false);

    const handleOrderPopup = () => {
        setOrderPopup(!orderPopup);
    };

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
            offset: 100,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="w-full h-screen bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-auto">
            <Navbar handleOrderPopup={handleOrderPopup} />
            <Hero handleOrderPopup={handleOrderPopup} />
            <Category />
            <Category2 />
            <Services />
            <Banner data={BannerData} />
            <Products />
            <Banner data={BannerData2} />
            <Blog />
            <Partners />
            <Footer />
            <Popup
                orderPopup={orderPopup}
                handleOrderPopup={handleOrderPopup}
            />
        </div>
    );
}

export default App;
