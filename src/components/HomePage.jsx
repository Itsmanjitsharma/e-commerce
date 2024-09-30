import React, { useState } from "react";
import './HomePage.css';
import ProductList from "./ProductList";
const HomePage = ()=>{
    const [launchingsoon,setLaunchingsoon] = useState([
        {
            image:"https://owr.life/wp-content/uploads/2024/09/O-scaled.jpg",
            title:"SPIRITUALITY",
            description:"Get ready for the new season with exclusive collection of exclusive products. We are launching soon."
        },
        {
            image:"https://owr.life/wp-content/uploads/2024/08/42-scaled.jpg",
            title:"REALITY",
            description:"Get ready for the new season with exclusive collection of exclusive products. We are launching soon."
        },{
            image:"https://owr.life/wp-content/uploads/2024/09/O-scaled.jpg",
            title:"MODERNITY",
            description:"Get ready for the new season with exclusive collection of exclusive products. We are launching soon."
        }
    ])
    return(
        <div className="home-page">
        <img src="https://owr.life/wp-content/uploads/2024/08/OWR-UI-Desktop-2-2048x1024.jpg" alt=""/>
        <div className="LaunchingSoon">
            {
                launchingsoon.map((launching)=>(
                    <img src={launching.image} alt=""/>
                ))
            }
        </div>
        <div className="banners">
            <img src="https://owr.life/wp-content/uploads/2024/08/Untitled-design-2048x1365.jpg" alt=""/>
        </div>
        </div>
    )
}
export default HomePage;