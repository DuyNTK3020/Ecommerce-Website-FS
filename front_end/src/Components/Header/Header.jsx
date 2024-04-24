import React, {useState, useContext} from 'react'
import header_icons from './../../Assets/icons/header_icons.js'
import arrow_left_icon from './../../Assets/icons/arrow_left.svg'
import avatar from './../../Assets/img/avatar.jpg'
import { Logo } from './../Logo/Logo.jsx';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [menu, setMenu] = useState("shop");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <section id='header' className="header">
      <div className="container">
        <div className="top-bar">
          {/* More */}
          <button className="top-bar__more d-none d-lg-block"  onClick={toggleNavbar}>
            <img src={header_icons.more} alt="" className='top-bar__more-icon icon'/>
          </button>

          {/* Logo */}
          <Logo/>

          {/* Navbar */}
          <div className={`navbar ${isNavbarOpen ? 'open' : ''}`}>
            <button className="navbar__close-btn"  onClick={toggleNavbar}>
              <img src={arrow_left_icon} alt="" className='icon'/>
            </button>

            <Link to='/' className="nav-btn d-none d-md-flex">
              <img src={header_icons.buy} alt="" className="nav-btn__icon icon" />
              <span className="nav-btn__title">Card</span>
              <span className='nav-btn__qnt'>3</span>
            </Link>

            <Link to='/' className="nav-btn d-none d-md-flex">
              <img src={header_icons.heart} alt="" className="nav-btn__icon icon" />
              <span className="nav-btn__title">Favorite</span>
              <span className='nav-btn__qnt'>3</span>
            </Link>

            <ul className='navbar__list js-dropdown-list'>
              <li className={`navbar__item ${menu === "shop" ? "active" : ""}`} onClick={() => {setMenu("shop")}}>
                <Link to ='/' className='navbar__link'>
                  Shop
                </Link>
              </li>
              <li className={`navbar__item ${menu === "men" ? "active" : ""}`} onClick={() => {setMenu("men")}}>
                <Link to ='/mens' className='navbar__link'>
                  Men
                </Link>
              </li>
              <li className={`navbar__item ${menu === "women" ? "active" : ""}`} onClick={() => {setMenu("women")}}>
                <Link to ='/womens' className='navbar__link'>
                  Women
                </Link>
              </li>
              <li className={`navbar__item ${menu === "kid" ? "active" : ""}`} onClick={() => {setMenu("kid")}}>
                <Link to ='/kids' className='navbar__link'>
                  Kid
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar__overlay" onClick={toggleNavbar}></div>

          {/* Actions */}
          <div className="top-act">
            <div className="top-act__group d-md-none">
              <button className="top-act__btn">
                <img src={header_icons.search} alt="" className="icon top-act__icon" />
              </button>
            </div>

            <div className="top-act__group d-md-none">
              <button className="top-act__btn">
                <img src={header_icons.heart} alt="" className="icon top-act__icon" />
                <span className='top-act__title'>03</span>
              </button>

              <div className="top-act__separate"></div>

              <Link className="top-act__btn" onClick={() => {setMenu("")}} to='/cart'>
                <img src={header_icons.buy} alt="" className="icon top-act__icon" />
                <span className='top-act__title'>$65.42</span>
              </Link>
            </div>

            <div className="top-act__user">
              <img src={avatar} alt="" className="top-act__avatar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
