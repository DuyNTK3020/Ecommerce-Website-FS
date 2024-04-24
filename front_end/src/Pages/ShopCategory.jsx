import React, { useContext } from "react";
import { ShopContext } from "./../Context/ShopContext";
import header_icons from './../Assets/icons/header_icons.js'
import { Item } from "../Components/Item/Item";

export const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className="shopcategory">
            <img className="shopcategory__banner" src={props.banner} alt="" />
            <div className="shopcategory__inner container">
                <div className="shopcategory__indexSort">
                    <p><span>Showing 1-12</span> out of 36 products</p>
                    <div className="shopcategory__sort">
                        Sort by <img src={header_icons.arrow_down} alt="" className="icon"/>
                    </div>
                </div>
                <div className="shopcategory__products row row-cols-4 row-cols-lg-2 row-cols-sm-1 g-3 gx-sm-4">
                    {all_product.map((item,i) => {       
                        if(props.category === item.category) {
                            return <Item key ={i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    );
};
