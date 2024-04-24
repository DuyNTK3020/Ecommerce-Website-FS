import React from "react";
import exclusive_image from './../../Assets/img/exclusive_image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export const Offers = () => {
    return <div className="offers">
        <div className="offers__inner container">
            <div className="offers__left">
                <h2>Exclusive Offer For You</h2>
                <span>ONLY ON BEST SELLERS PRODUCTS</span>
                <Link to='/' className="btn">
                    <p>Check Now</p>
                    <FontAwesomeIcon icon={faArrowRight} className="icon"/>
                </Link>
            </div>
            <div className="offers__right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    </div>;
};
