import React from 'react'
import { Link } from 'react-router-dom';
import header_icons from './../../Assets/icons/header_icons.js'

export const Item = (props) => {
  return (
    <div className="col">
        <article className='item'>
            <div className="item__img-wrap">
            <Link to={`/product/${props.id}`}>
                <img src={props.image} alt="" className='item__thumb'/>
            </Link>
            <button className='like-btn like-btn--liked'>
                <img src={header_icons.heart} alt="" className='like-btn__icon'/>
            </button>
            </div>
            <h3 className="item__title">
                <Link to={`/product/${props.id}`}>{props.name}</Link>
            </h3>
            <div className="item__row">
                <p className="item__type">{props.category} a</p>
                <span className='item__price-old'>${props.old_price}</span>
            </div>
            <div className="item__row">
                <img src={header_icons.star} alt="" className='item__star'/>
                <span className='item__score'>4.3</span>
                <span className='item__price-new'>${props.new_price}</span>
            </div>
        </article>
    </div>
  )
}
