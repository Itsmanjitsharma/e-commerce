import React from "react";
import './ProductList.css';
const products = [
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
    },
    {
        id: 6,
        name: "Summer Hat",
        price: 29.99,
        offerPrice: 19.99,
        imageUrl: "https://img.freepik.com/premium-photo/summer-hat-photo_728472-1212.jpg",
        rating: 5.0,
    },
    {
        id: 7,
        name: "Summer Hat",
        price: 29.99,
        offerPrice: 19.99,
        imageUrl: "https://img.freepik.com/premium-photo/summer-hat-photo_728472-1212.jpg",
        rating: 5.0,
    },
    {
        id: 8,
        name: "Summer Hat",
        price: 29.99,
        offerPrice: 19.99,
        imageUrl: "https://img.freepik.com/premium-photo/summer-hat-photo_728472-1212.jpg",
        rating: 5.0,
    },
    {
        id: 9,
        name: "Summer Hat",
        price: 29.99,
        offerPrice: 19.99,
        imageUrl: "https://img.freepik.com/premium-photo/summer-hat-photo_728472-1212.jpg",
        rating: 5.0,
    },
    {
        id: 10,
        name: "Summer Hat",
        price: 29.99,
        offerPrice: 19.99,
        imageUrl: "https://img.freepik.com/premium-photo/summer-hat-photo_728472-1212.jpg",
        rating: 5.0,
    }
    // Add more products as needed
];

const ProductList = () => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= rating ? "star filled" : "star"}>★</span>
            );
        }
        return stars;
    };

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.imageUrl} alt={product.name} className="product-image" />
                    <div className="product-details-list">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">
                        <span className="offer-price">${product.offerPrice.toFixed(2)}</span>
                        <span className="real-price">${product.price.toFixed(2)}</span>
                    </p>
                    </div>
                    <div className="product-details-list">
                    <div className="product-rating">{renderStars(product.rating)}</div>
                    <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
