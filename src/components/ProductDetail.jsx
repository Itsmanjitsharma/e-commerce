import React, { useState } from 'react';
import './ProductDetail.css';
import ProductCard from './ProductCard';

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState('S');
  const [quantity, setQuantity] = useState(2);
  const [selectedImage, setSelectedImage] = useState("https://i0.wp.com/www.fashionunlock.com/wp-content/uploads/2019/05/affordable.jpg?w=640&ssl=1");
  const images = [
    "https://www.fashionhombre.com/wp-content/uploads/2019/08/Best-Chinos-And-Shirt-Combinations-For-Men-1-1.jpg",
    "https://tse1.mm.bing.net/th?id=OIP.wTtIOP92UdFm_MNRCpE_wwHaJ4&pid=Api&P=0&h=180",
    "https://cdna.lystit.com/photos/96d9-2015/04/16/asos-warmgrey-skinny-chinos-in-ankle-grazer-product-2-709332563-normal.jpeg",
    "https://i.pinimg.com/736x/1e/62/40/1e6240045fb7b5a532997951908518a4.jpg",
    "https://modone.com/eng_pl_Mens-pants-chinos-P891-light-grey-15236_3.jpg",
    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1556814994-chinos-8-1556814933.jpg?crop=1xw:1xh;center,top"
  ];

  const [recommandedProducts, setRecommandedProducts] = useState([
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
]);


  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

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
    <div className="container">
      <div className="product-sub-details">     
        <div className="product-details-image">
            {/* Image Thumbnails Section */}
        <div className="image-thumbnails">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleImageClick(image)}
              className={selectedImage === image ? "active-thumbnail" : ""}
            />
          ))}
        </div>
          <img
            src={selectedImage}
            alt="Men's Polo T-shirt"
          />
        </div>
        <div className="product-sub-cart-details">
          <h2>Men's Polo T-shirt</h2>
          <div className="reviews">
            <div className="product-rating">{renderStars(4.5)}</div>
          </div>
          <div className="description">
            Investigaciones demonstraverunt lectores legere me lius quod ii legunt saepius.
          </div>
          <div className="price">
            <span className="old-price">$99.99</span> $69.00
          </div>
          <div className="size">
            <span>Size:</span>
            {['S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? 'active' : ''}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="quantity">
            <span>Qty:</span>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className='productdetail-buttons'>
          <button className="add-to-cart">ADD TO CART</button>
          <button className="add-to-cart">Buy Now</button>
          </div>
        </div>
      </div>
       {/* Recommended Products Section */}
      <div className="recommended-products">
        <h2>Recommended Products</h2>
        <div className="recommended-products-container">
          {recommandedProducts.map((prod) => (
            <ProductCard key={prod.id} prod={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
