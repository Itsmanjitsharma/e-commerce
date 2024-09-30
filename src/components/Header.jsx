import React, { useState } from 'react';
import './Header.css';
import { FaShoppingCart, FaBell } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';  // Import useNavigate


const Header = () => {
  const navigate = useNavigate();  // Initialize navigate function

  const routeToPage = (link) => {
    navigate(link);  // Programmatically navigate to the desired route
  };

  const [categories,setCategories] = useState([
    {
      name:"TEES",
      link:"/tees"
    },
    {
      name:"SHIRTS & SHACKETS",
      link:"/shirtandshackets"
    },
    {
      name:"BOTTOMS",
      link:"/bottoms"
    }
    ,
    {
      name:"BAGS",
      link:"/bags"
    },
    {
      name:"SWEATSHIRTS",
      link:"/sweatshirts"
    },
    {
      name:"CONTACTS US",
      link:"/contactus"
    },
    {
      name:"RETURN & REFUNDS",
      link:"/returnandrefunds"
    }
  ])
  return (
    <header className="header">
      <div className="header-container">
      <div className="header-logo">
        <IoPersonOutline className='header-logo-icon'/>
      </div>
      <div onClick={()=>navigate('/')} className='headersLink'>
        <h1>OWR</h1>
        <span>ONE WHO RULE</span>
      </div>
      <div className="header-icons">
        <FaShoppingCart className="icon" />
      </div>
      </div>
      <div className='categories'>
        <ul>
          {
          categories.map((category)=>(
          <li onClick={()=>routeToPage(category.link)}>{category.name}</li>
          ))
          }
          </ul>
      </div>
    </header>
  );
};

export default Header;
