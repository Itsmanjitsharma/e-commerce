import React, { useEffect, useState } from "react";
import './ProductList.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const products = [
    {
        id:1,
        image:"https://owr.life/wp-content/uploads/2023/05/DSC02650-1-600x900.jpg",
        name:"THE BEGINNING TEE",
        price:1899.00,
        description:"In one corner of that never-ending sky, He, who rules all beings, created a cloud. In its shadow, he brought into being a great ocean. The water of that ocean was quite unlike the water of this world. It is from that ocean that this world was made, so it is called the waters of creation. In the coolness of its waters He, who rules, lay down to sleep. While he slept, submerged in the water, he began to breathe deep, regular breaths. Time came into being. Aeons passed",
        subdescription:[
          {
            describe:"100% Cotton Terry Fabric. Premium quality Fabric, 270 gsm."
          },{
            describe:"Back- Puff Printing."
          },{
            describe:"Front- High-Density Printing"
          },{
            describe:"Garment Care: Hand wash in cold water or dry clean only."
          },{
            describe:"Color: Black"
          }
        ],
        sizes:[
          'S','M','L','XL','XXL','3XL'
        ],
        images:[{
          image:"https://owr.life/wp-content/uploads/2023/05/DSC02650-1.jpg"
        },{
          image:"https://owr.life/wp-content/uploads/2023/05/DSC02623-1.jpg"
        },{
          image:"https://owr.life/wp-content/uploads/2023/05/DSC02631-1.jpg"
        },{
          image:"https://owr.life/wp-content/uploads/2023/05/DSC02632-1.jpg"
        },{
          image:"https://owr.life/wp-content/uploads/2023/05/DSC02632-1.jpg"
        },{
          image:"https://owr.life/wp-content/uploads/2023/05/DSC02645-1.jpg"
        },{
          image:"https://owr.life/wp-content/uploads/2023/05/DSC02636-1.jpg"
        },{
          image:"https://owr.life/wp-content/uploads/2023/05/DSC02637-1.jpg"
        },{
          image:"https://owr.life/wp-content/uploads/2023/05/DSC02674-1.jpg"
        },{
          image:"https://owr.life/wp-content/uploads/2023/05/DSC02671-1.jpg"
        },{
          image:"https://owr.life/wp-content/uploads/2023/05/DSC02680-1.jpg"
        }
        ],
        relatedProducts:[
          {
            id:2,
            image:"https://owr.life/wp-content/uploads/2023/08/DSC02570-1-600x900.jpg",
            name:"THE MAYA TEE",
            price:1899.00
        },
        {
            id:3,
            image:"https://owr.life/wp-content/uploads/2023/08/DSC02570-1-600x900.jpg",
            name:"THE MAYA TEE",
            price:1899.00
        },
        {
            id:4,
            image:"https://owr.life/wp-content/uploads/2024/08/owr-va-edit-28-600x900.jpg",
            name:"Alternate Reality Tshirt",
            price:1899.00
        },
        {
            id:5,
            image:"https://owr.life/wp-content/uploads/2024/02/DSC02810-1-600x900.jpg",
            name:"AHANKAAR T-SHIRT",
            price:1998.00
        }
        ]
    }
];

const ProductList = ({category}) => {
    const navigate = useNavigate();  // Initialize navigate function


    const [productList,setProductList] = useState([]);
    useEffect(() => {
       /* axios.get(`http://localhost:5555/getProductList/${category}`)
        .then((response) => setProductList(response.data))
        .catch((error) => console.log("An exception occurred", error));*/

        setProductList(products);
    }, []);

    const handlePageNavigation = (product) => {
        navigate('/productdetails', { state: { product } });
      };

    return (
        <div className="product-list-container">
             <h1>{category}</h1>
        
        <div className="product-list">
            {productList.map(product => (
                <div key={product.id} className="product-card" onClick={() => handlePageNavigation(product)}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">
                        <span className="offer-price">₹{product.price.toFixed(2)}</span>
                    </p>
                </div>
            ))}
          </div>
        </div>
    );
};

export default ProductList;
