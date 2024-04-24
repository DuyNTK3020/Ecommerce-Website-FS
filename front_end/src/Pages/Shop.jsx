import React from 'react';
import { Hero } from './../Components/Hero/Hero';
import { Popular } from '../Components/Popular/Popular';
import { Offers } from '../Components/Offers/Offers';
import { NewColections } from '../Components/NewColections/NewColections';

export const Shop = () => {
  return (
    <div className='shop'>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewColections/>
    </div>
  )
}
