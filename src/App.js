import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import HomePage from './components/HomePage';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { useState } from 'react';
import MainContent from './components/MainContent';

function App() {
  const [category,setCategory] = useState("Tees");
  const [teesProductList,setTeesProductList] = useState([
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
    },
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
    },
    {
        id:6,
        image:"https://owr.life/wp-content/uploads/2024/08/owr-va-edit-70-600x900.jpg",
        name:"Don’t Say My Name Tshirt",
        price:1899.00
    },
    {
        id:7,
        image:"https://owr.life/wp-content/uploads/2024/08/owr-va-edit-2-600x900.jpg",
        name:"Tatva Tshirt",
        price:1899.00
    }
])
const [shirtSackerProductList,setShirtSackerProductList] = useState([
  {
      id:1,
      image:"https://owr.life/wp-content/uploads/2024/07/off-white-shirt-13-600x900.jpg",
      name:"Alien Love Shacket",
      price:1999.00
  },
  {
      id:2,
      image:"https://owr.life/wp-content/uploads/2024/07/white-shirt-5-600x900.jpg",
      name:"Sad Bitch Shacket",
      price:2199.00
  },
  {
      id:3,
      image:"https://owr.life/wp-content/uploads/2024/07/owr-p-75-600x900.jpg",
      name:"The New Law Shacket",
      price:2199.00
  },
  {
      id:4,
      image:"https://owr.life/wp-content/uploads/2024/07/edit-10-600x900.jpg",
      name:"Voice Inside Shacket",
      price:2199.00
  },
  {
      id:5,
      image:"https://owr.life/wp-content/uploads/2024/04/wrpr-edit-13-600x900.jpg",
      name:"Sell The Soul Shacket",
      price:2199.00
  },
  {
      id:6,
      image:"https://owr.life/wp-content/uploads/2024/04/owr-p-59-600x900.jpg",
      name:"Speak of The Devil Shackets",
      price:2199.00
  }
])
const [sweetShirtProductList,setSweetShirtProductList] = useState([
  {
      id:1,
      image:"https://owr.life/wp-content/uploads/2023/12/Untitled-design-16-600x900.jpg",
      name:"The Beginning Hoodie",
      price:2799.00
  },
  {
      id:2,
      image:"https://owr.life/wp-content/uploads/2023/12/Untitled-design-14-600x900.jpg",
      name:"The Divine Fusion Hoodie",
      price:2799.00
  },
  {
      id:3,
      image:"https://owr.life/wp-content/uploads/2023/12/IMG_9164-600x900.jpeg",
      name:"Ahankaar Hoodie",
      price:2799.00
  },
  {
      id:4,
      image:"https://owr.life/wp-content/uploads/2023/12/Untitled-design-5-600x900.jpg",
      name:"The Maya Hoodie",
      price:2799.00
  },
  {
      id:5,
      image:"https://owr.life/wp-content/uploads/2023/12/IMG_9068-600x900.jpeg",
      name:"Mastishk Vikas Hoodie",
      price:2799.00
  },
  {
      id:6,
      image:"https://owr.life/wp-content/uploads/2023/12/IMG_9214-600x900.jpeg",
      name:"Ekaant Hoodie",
      price:2799.00
  }
])
const [bagProductList,setBagProductList] = useState([
  {
    id:1,
    image:"https://owr.life/wp-content/uploads/2024/02/DSC02774-1-600x900.jpg",
    name:"Blessed Tote Bag",
    price:999.00
}
])

const [bottomProductList,setBottomProductList] = useState([
  {
    id:1,
    image:"https://owr.life/wp-content/uploads/2024/08/owr-lw-2-600x900.jpg",
    name:"4X Power Denim Pants",
    price:2999.00
},{
  id:2,
  image:"https://owr.life/wp-content/uploads/2024/04/wrpr-edit-69-600x900.jpg",
  name:"Excess of Everything Rugged Denims",
  price:2999.00
},{
  id:3,
  image:"https://owr.life/wp-content/uploads/2024/04/wrpr-edit-43-600x900.jpg",
  name:"Exist Loudly Denims",
  price:2999.00
},{
  id:4,
  image:"https://owr.life/wp-content/uploads/2024/09/owr-p9-600x900.jpg",
  name:"It’s a Loop Cargo Denims",
  price:2999.00
}
])
  return (
    <div className="App">
     <MainContent/>
    </div>
  );
}

export default App;
