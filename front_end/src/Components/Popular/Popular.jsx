import React from 'react'
import { Item } from './../Item/Item'
import data_product from './../../Assets/img/data'

export const Popular = () => {
  return (
        <section className="popular container">
            <h2 className='popular__title'>POPULAR IN WOMEN</h2>
            <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 g-3 gx-sm-4">
                {data_product.map((item, i) => {
                    return <Item key ={i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
                })}
            </div>
        </section>
    )
}
