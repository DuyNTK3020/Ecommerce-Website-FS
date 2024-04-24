import React from "react";
import header_icons from "./../../Assets/icons/header_icons.js";

export const Breadcrum = (props) => {
    const { product } = props;

    return (    
        <div className="breadcrum">
           SHOP{" "}
            <img src={header_icons.arrow_right} alt="" className="icon"/>
            {product.category}{" "}
            <img src={header_icons.arrow_right} alt="" className="icon"/> {product.name}
        </div>
    );
};
