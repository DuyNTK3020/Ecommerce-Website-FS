import React from "react";
import hero_image from './../../Assets/img/hero_image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export const Hero = () => {
    return <div className="hero">
        <div className="hero__inner container">
            <div className="hero__left">
                <h2>NEW ARRIVALS ONLY</h2>
                <span>NEW COLECTION FOR EVERYONE</span>
                <Link to='/' className="btn">
                    <p>Latest Collection</p>
                    <FontAwesomeIcon icon={faArrowRight} className="icon"/>
                </Link>
            </div>
            <div className="hero__right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    </div>;
};
