import React from "react";
import "./ProductCard.css";

const ProductCard = ({key,prod}) => {
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
        <div key={key} className="card-product-card">
                    <img src={prod.imageUrl} alt={prod.name} className="card-product-image" />
                    <div className="product-details-list">
                    <h3 className="card-product-name">{prod.name}</h3>
                    <p className="card-product-price">
                        <span className="card-offer-price">${prod.offerPrice.toFixed(2)}</span>
                        <span className="card-real-price">${prod.price.toFixed(2)}</span>
                    </p>
                    </div>
                    <div className="card-product-details-list">
                    <div className="card-product-rating">{renderStars(prod.rating)}</div>
                    <button className="card-add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
    )
}
export default ProductCard;