import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import ProductCard from './ProductCard';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';  // Import useNavigate



const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state || {};  // Destructure the product from state

  const [detailOfProduct, setDetailOfProduct] = useState(product || {});
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [selectedImage, setSelectedImage] = useState("");
  const [recommandedProducts, setRecommandedProducts] = useState([]);


  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    if (detailOfProduct?.images?.length) {
      setSelectedImage(detailOfProduct.images[0].image); // Access the image property inside the array
    }
  }, [detailOfProduct]);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);
  const navigate = useNavigate();  // Initialize navigate function

  const handlePageNavigation = (product) => {
    navigate('/productdetails', { state: { product } });
  };

  const handleNevigateToCart = () => {
    navigate('/cart'); 
  }

  return (
    <div>
    <div className="container">
    <div className="left-column">
      <img src={selectedImage} alt="Main product" />
      <div className="thumbnail-row">
        {detailOfProduct.images.map((imageObj) => (
          <img
            src={imageObj.image}
            alt=""
            onClick={() => setSelectedImage(imageObj.image)}
          />
        ))}
      </div>
    </div>
    <div className="right-column">
      <h1>{detailOfProduct.name}</h1>
      <p className="price">{detailOfProduct.price}</p>
      <p className="description">
      {detailOfProduct.description}
      </p>
      <a href="#size-chart" className="size-chart">
        Size Chart
      </a>
      <div className="size">
        <span>Size: {selectedSize}</span>
      </div>
      <div className="size-options">
       {
        detailOfProduct.sizes.map((size)=>(
          <button onClick={()=>setSelectedSize(size)}>{size}</button>
        ))
       }
      </div>
      <div className="quantity-container">
      <div className="quantity">
        <button onClick={handleDecrement}>-</button>
        <input type="text" value={quantity}  />
        <button onClick={handleIncrement}>+</button>
      </div>

      <a href="/cart" className="add-to-cart" onClick={handleNevigateToCart}>
        Add to Cart
      </a>
      </div>
      
    </div>
  </div>
  <div className='product-description-size'>
  <h4>Description</h4>
  {Array.isArray(detailOfProduct.subdescription) && detailOfProduct.subdescription.length > 0 ? (
    detailOfProduct.subdescription.map((item, index) => (
      <p key={index}>{item.describe}</p>  // Access the 'describe' property
    ))
  ) : (
    <p>No description available.</p>  // Fallback if no descriptions exist
  )}
</div>
  <h3>Related Products</h3>
  <div className='related_product-container'>
      {
        detailOfProduct.relatedProducts.map((product) => (
                <div key={product.id} className="product-card" onClick={() => handlePageNavigation(product)}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">
                        <span className="offer-price">₹{product.price.toFixed(2)}</span>
                    </p>
                </div>
        ))
      }
    </div>
  </div>
  );
};

export default ProductDetail;



