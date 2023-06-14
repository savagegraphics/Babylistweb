"use client";

import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';



export default function LabelBottomNavigation() {
  const [ bnValue, setBNValue ] = useState(0);
  const navigate = useNavigate();


  return (
    <BottomNavigation
      showLabels={ true }
      sx={ { width: 500, bottom: 0 } }
      className='fixed z-50 w-full h-16 p-8 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-0 left-1/2 dark:bg-gray-700 dark:border-gray-600'
      value={ bnValue }
      onChange={ (event, value) => setBNValue(value) }>
      <BottomNavigationAction
        label="Home"
        value="home"
        onClick={ () => navigate("/") }
        icon={ <HomeIcon /> }
      />
      <BottomNavigationAction
        label="Registry"
        value="about"
        onClick={ () => navigate("/about") }
        icon={ <ListOutlinedIcon /> }
      />
      <BottomNavigationAction
        label="Guides"
        value="services"
        onClick={ () => navigate("/services") }
        icon={ <DescriptionOutlinedIcon /> }
      />
      <BottomNavigationAction
        label="Shop"
        value="hero"
        onClick={ () => navigate("/hero") }
        icon={ <AddShoppingCartOutlinedIcon /> } />
    </BottomNavigation>
  );
}