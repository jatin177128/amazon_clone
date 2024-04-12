import React from 'react';
import Product from './Product';
import "./Home.css";
const Home = () => {
  return (
    <div className='Home'>
        <img className='Home_image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'alt='banner'></img>
        <div className='home_row'>
        <Product
         id = "123456789"
         title = "The Lean Startup:How Constant Innovation Creates  Radically Successful Buisness Paperback"
         price = {339}
         rating = {5} 
         image = "https://thrivethinking.com/wp-content/uploads/2019/12/10BooksServiecDesign_10.jpg"
         />
         <Product
         id = "123456789"
         title = "Tresemme Keratin Smooth, Shampoo, 1L, for Straighter, Shinier Hair, with Keratin & Argan Oil, Nourishes Dry Hair, Controls Frizz , for Men & Women"
         price = {669}
         rating = {5}
         image = "https://m.media-amazon.com/images/I/516sCgFYvgL._SL1000_.jpg"
         />
        </div>
        <div className='home_row'>
        <Product
         id = "123456789"
         title = "ASIAN Men's Wonder-13 Sports Running Shoes…"
         price = {599}
         rating = {5}
         image = "https://m.media-amazon.com/images/I/61utX8kBDlL._SY695_.jpg"
         />
         <Product
         id = "123456789"
         title = "More & More Unisex-Adult Cotton Hooded Neck Printed Hoodie"
         price = {590}
         rating = {5}
         image = "https://m.media-amazon.com/images/I/51UUPx3H1yL._SX569_.jpg "
         />
         <Product
         id = "123456789"
         title = "Echo Dot 4th Gen with clock | Smart speaker with powerful bass, LED display and Alexa (Blue)"
         price = {5499}
         rating = {5}
         image = "https://m.media-amazon.com/images/I/81WaomQESKL._SY450_.jpg"
         />
        </div>
        <div className='home_row'>
        <Product
         id = "123456789"
         title = "Saregama Carvaan Premium Hindi - Portable Music Player with 5000 Preloaded Songs, FM/BT/AUX (Royal Blue)"
         price = {7090}
         rating = {4}
         image = "https://m.media-amazon.com/images/I/719xxeFg76L._SX522_.jpg"
         />
        </div>


        
    </div>
  )
}

export default Home