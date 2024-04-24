import React from 'react'
import new_collections from './../../Assets/img/new_collections';
import { Item } from './../Item/Item'

export const NewColections = () => {
  return (
    <section className="newcolections container">
        <h2 className='newcolections__title'>NEW COLLECTIONS</h2>
        <div className="row row-cols-4 row-cols-lg-2 row-cols-sm-1 g-3 gx-sm-4">
            {new_collections.map((item, i) => {
                return <Item key ={i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
            })}
        </div>
    </section>
  )
}
