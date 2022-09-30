import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useStore} from '../Components/Store'

import { Link, useNavigate } from 'react-router-dom'
 
function Navbar() {
    const Navigate = useNavigate()
    const {card}= useStore()
  return (
    <>
    <div className='WrapperDiv flex items-center justify-between px-12 py-5  '>
    <div className='LeftDiv'>
        <button onClick={()=>Navigate(-1)} className='font-semibold text-2xl'><span className='text-purple-400'>Shop</span> <span className='text-gray-700'>lane</span> </button>
    </div> 

    <div className='MiddleDiv flex items-center gap-5 justify-evenly'>
      <h1 className='text-xl hover:text-purple-400 font-mono uppercase cursor-pointer ' >Home</h1>
      <h1 className='text-xl hover:text-purple-400 font-mono uppercase cursor-pointer ' >Clothings</h1>
      <h1 className='text-xl hover:text-purple-400 font-mono uppercase cursor-pointer ' >Accessories</h1>
    </div>


   
    <div className='RightDiv gap-5 flex items-center justify-evenly'>

     <h1 className='text-xl hover:text-purple-500' > <SearchIcon />   </h1>

     <Link to='/AddtoCard'>
       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={card.length} color="error">
          <ShoppingCartIcon  />
          </Badge>
        </IconButton> 
     </Link>

    

     <h1 className='text-xl hover:text-purple-500' > <AccountCircleIcon/></h1>
   
    </div>
    </div>

    <hr className='border h-1 bg-black shadow-sm'/>
      
    </>
  )
}

export default Navbar
