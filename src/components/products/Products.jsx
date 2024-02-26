import React from "react";
import Heading from "../shared/Heading";
import ProductCard from "./ProductCard";
import Img1 from "../../assets/products/img1.png";
import Img2 from "../../assets/products/img2.png";
import Img3 from "../../assets/products/img3.png";
import Img4 from "../../assets/products/img4.png";
import Img5 from "../../assets/products/img5.png";
import Img6 from "../../assets/products/img6.png";
import Img7 from "../../assets/products/img7.png";
import Img8 from "../../assets/products/img8.png";
const Products = () => {
    const ProductsData = [
        {
            id: 1,
            img: Img1,
            title: "Boat Headphone",
            price: "120",
            aosDelay: "0",
        },
        {
            id: 2,
            img: Img2,
            title: "Rocky Mountain",
            price: "420",
            aosDelay: "200",
        },
        {
            id: 3,
            img: Img3,
            title: "Goggles",
            price: "320",
            aosDelay: "400",
        },
        {
            id: 4,
            img: Img4,
            title: "Printed ",
            price: "220",
            aosDelay: "600",
        },
    ];
    const ProductsData2 = [
        {
            id: 1,
            img: Img5,
            title: "Boat Headphone",
            price: "120",
            aosDelay: "0",
        },
        {
            id: 2,
            img: Img6,
            title: "Rocky Mountain",
            price: "420",
            aosDelay: "200",
        },
        {
            id: 3,
            img: Img7,
            title: "Goggles",
            price: "320",
            aosDelay: "400",
        },
        {
            id: 4,
            img: Img5,
            title: "Printed ",
            price: "220",
            aosDelay: "600",
        },
    ];
    return (
        <div className="p-4">
            <div className="container">
                {/* header section*/}
                <Heading
                    title={"Our Products"}
                    subtitle={"Explore Our Products"}
                />
                {/* body section */}
                <ProductCard data={ProductsData} />
                <ProductCard data={ProductsData2} />
            </div>
        </div>
    );
};

export default Products;
