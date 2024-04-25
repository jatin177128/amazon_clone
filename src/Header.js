import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StateProvider';
function Header(){
    const [{basket}] = useStateValue(); 
    
  return (
    <nav className='navbar'>
        <Link to ='/'>
        <img className='Header_logo' src="data:image/png;base64,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" alt='amazon_logo'>

            </img>
        </Link>
        <div className='Header_search'>
        <input type='text' className='Header_searchInput'/>
        <SearchIcon className='Header_searchIcon'/>
        </div>
        <div className='Header_nav'>
            <Link to='/Login'className='Header_link'>
                <div className='Header_option'>
                    <span className='Header_optionLineOne'>Hello</span>
                    <span className='Header_optionLineTwo'>Sign In</span>
                </div>
            </Link>
            <Link to='/' className='Header_link'>
                <div className='Header_option'>
                    <span className='Header_optionLineOne'>Returns</span>
                    <span className='Header_optionLineTwo'>& Orders</span>
                </div>
            </Link>
            <Link to='/' className='Header_link'>
                <div className='Header_option'>
                    <span className='Header_optionLineOne'>Your</span>
                    <span className='Header_optionLineTwo'>Prime</span>
                </div>
            </Link>
            <Link to ='/Checkout'className='Header_link'>
                <div className='Header_optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className='Header_optionLineTwo Basket_count  '>{basket.length}</span>
                </div>
            </Link>
        </div>

        
         
    </nav>
  ) 
}

export default Header
