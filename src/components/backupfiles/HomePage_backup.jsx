import React, { useState } from "react";
import './HomePage.css';
import ProductList from "./ProductList";
const HomePage = ()=>{

    const [section,setSection] = useState([
        {
            id:1,
            title:"New Arrivals",
            prodcuts:[
                   { 
                        id: 1,
                        name: "Leather Handbag",
                        price: 49.99, // Real price
                        offerPrice: 39.99, // Offer price
                        imageUrl: "https://tse1.mm.bing.net/th?id=OIP.ExhBOVjLw4-vX-wn8HxKPwHaGJ&pid=Api&P=0&h=180", // Replace with actual image URL
                        rating: 4.5,
                    },
                    {
                        id: 2,
                        name: "Classic Sunglasses",
                        price: 19.99,
                        offerPrice: 14.99,
                        imageUrl: "https://tse3.mm.bing.net/th?id=OIP.0g4DoZvvGbDLGcPeFSImMQHaE5&pid=Api&P=0&h=180",
                        rating: 4.0,
                    },
                    {
                        id: 3,
                        name: "Stylish Sneakers",
                        price: 39.99,
                        offerPrice: 29.99,
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Black_Converse_sneakers.JPG/1200px-Black_Converse_sneakers.JPG",
                        rating: 3.5,
                    },
                    {
                        id: 4,
                        name: "Summer Hat",
                        price: 29.99,
                        offerPrice: 19.99,
                        imageUrl: "https://img.freepik.com/premium-photo/summer-hat-photo_728472-1212.jpg",
                        rating: 5.0,
                    },
                    {
                        id: 5,
                        name: "Summer Hat",
                        price: 29.99,
                        offerPrice: 19.99,
                        imageUrl: "https://img.freepik.com/premium-photo/summer-hat-photo_728472-1212.jpg",
                        rating: 5.0,
                    }
                
            ]
        },
        {
            id:1,
            title:"Best Sellers",
            prodcuts:[
                   { 
                        id: 1,
                        name: "Leather Handbag",
                        price: 49.99, // Real price
                        offerPrice: 39.99, // Offer price
                        imageUrl: "https://tse1.mm.bing.net/th?id=OIP.ExhBOVjLw4-vX-wn8HxKPwHaGJ&pid=Api&P=0&h=180", // Replace with actual image URL
                        rating: 4.5,
                    },
                    {
                        id: 2,
                        name: "Classic Sunglasses",
                        price: 19.99,
                        offerPrice: 14.99,
                        imageUrl: "https://tse3.mm.bing.net/th?id=OIP.0g4DoZvvGbDLGcPeFSImMQHaE5&pid=Api&P=0&h=180",
                        rating: 4.0,
                    },
                    {
                        id: 3,
                        name: "Stylish Sneakers",
                        price: 39.99,
                        offerPrice: 29.99,
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Black_Converse_sneakers.JPG/1200px-Black_Converse_sneakers.JPG",
                        rating: 3.5,
                    },
                    {
                        id: 4,
                        name: "Summer Hat",
                        price: 29.99,
                        offerPrice: 19.99,
                        imageUrl: "https://img.freepik.com/premium-photo/summer-hat-photo_728472-1212.jpg",
                        rating: 5.0,
                    },
                    {
                        id: 5,
                        name: "Summer Hat",
                        price: 29.99,
                        offerPrice: 19.99,
                        imageUrl: "https://img.freepik.com/premium-photo/summer-hat-photo_728472-1212.jpg",
                        rating: 5.0,
                    }
                
            ]
        },
        {
            id:1,
            title:"Top Rated",
            prodcuts:[
                   { 
                        id: 1,
                        name: "Leather Handbag",
                        price: 49.99, // Real price
                        offerPrice: 39.99, // Offer price
                        imageUrl: "https://tse1.mm.bing.net/th?id=OIP.ExhBOVjLw4-vX-wn8HxKPwHaGJ&pid=Api&P=0&h=180", // Replace with actual image URL
                        rating: 4.5,
                    },
                    {
                        id: 2,
                        name: "Classic Sunglasses",
                        price: 19.99,
                        offerPrice: 14.99,
                        imageUrl: "https://tse3.mm.bing.net/th?id=OIP.0g4DoZvvGbDLGcPeFSImMQHaE5&pid=Api&P=0&h=180",
                        rating: 4.0,
                    },
                    {
                        id: 3,
                        name: "Stylish Sneakers",
                        price: 39.99,
                        offerPrice: 29.99,
                        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Black_Converse_sneakers.JPG/1200px-Black_Converse_sneakers.JPG",
                        rating: 3.5,
                    },
                    {
                        id: 4,
                        name: "Summer Hat",
                        price: 29.99,
                        offerPrice: 19.99,
                        imageUrl: "https://img.freepik.com/premium-photo/summer-hat-photo_728472-1212.jpg",
                        rating: 5.0,
                    },
                    {
                        id: 5,
                        name: "Summer Hat",
                        price: 29.99,
                        offerPrice: 19.99,
                        imageUrl: "https://img.freepik.com/premium-photo/summer-hat-photo_728472-1212.jpg",
                        rating: 5.0,
                    }
                
            ]
        }
        
    ]);
    return(
        <div>
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title">Welcome to Our Store</h1>
                <p className="home-description">
                    Explore the best deals and discover amazing products at unbeatable prices!
                </p>
            </div>
        </div>
        {
           section.map((sect)=>(
            <div>
                <h1>{sect.title}</h1>
                <ProductList products={sect.prodcuts}/>
            </div>
           ))
        }
        </div>
    )
}
export default HomePage;