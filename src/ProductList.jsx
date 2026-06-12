import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ProductList.css'
import CartItem  from './CartItem'; 
import { addItem, selectQuantity } from './CartSlice';
function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const [addedToCart, setAddedToCart]= useState({});
    const dispatch = useDispatch();
    const totalQuantity = useSelector(selectQuantity);

    const plantsArray = [
        {
            category: "CPU",
            plants: [
                {
                    name: "AMD Ryzen 7 9800X3D",
                    image: "./img/CPU.jpg",
                    description: "AMD Ryzen 7 9800X3D.",
                    cost: "$90"
                },
                {
                    name: "AMD Ryzen 9 9950X",
                    image: "./img/CPU.jpg",
                    description: "AMD Ryzen 9 9950X",
                    cost: "$999"
                },
                {
                    name:  "Intel Core Ultra 7",
                    image: "../img/CPU.jpg",
                    description:  "Intel Core Ultra 7",
                    cost: "$180"
                },
                {
                    name:  "Intel Core Ultra 9",
                    image: "/img/cpu.jpg",
                    description:  "Intel Core Ultra 9",
                    cost: "$200"
                }
            ]
        },
        {
            category: "Motherboard",
            plants: [
                {
                    name: "ASUS ROG",
                    image: "/img/motherboard.jpg",
                    description: "ASUS ROG",
                    cost: "$200"
                },
                {
                    name: "ASUS ROG",
                    image: "/img/motherboard.jpg",
                    description: "ASUS ROG",
                    cost: "$250"
                }
            ]
        },
        {
            category: "RAM",
            plants: [
                {
                    name: "32GB DDR5",
                    image: "/img/RAM.jpg",
                    description: "32GB DDR5",
                    cost: "$120"
                },
                {
                    name: "64GB DDR5",
                    image: "/img/RAM.jpg",
                    description: "64GB DDR5",
                    cost: "$200"
                },
                {
                    name: "96GB DDR5",
                    image: "/img/RAM.jpg",
                    description: "96GB DDR5",
                    cost: "$250"
                }
            ]
        },
        {
            category: "Storage",
            plants: [
                {
                    name: "1TB NVMe SSD",
                    image: "/img/Storage.jpg",
                    description: "1TB NVMe SSD",
                    cost: "$200"
                },
                {
                    name: "2TB NVMe SSD",
                    image: "/img/Storage.jpg",
                    description: "2TB NVMe SSD",
                    cost: "$280"
                },
                {
                    name: "4TB NVMe SSD",
                    image: "/img/Storage.jpg",
                    description: "4TB NVMe SSD",
                    cost: "$320"
                }
            ]
        },
        {
            category: "Cooling",
            plants: [
                {
                    name: "Thermalright AXP90-X47",
                    image: "/img/Cooling.jpg",
                    description: "Description",
                    cost: "$200"
                },
                {
                    name: "Thermalright Phantom Spirit 120",
                    image: "/img/Cooling.jpg",
                    description: "Description",
                    cost: "$280"
                },
                {
                    name:  "Thermalright Peerless Assassin 120",
                    image: "/img/Cooling.jpg",
                    description: "Description",
                    cost: "$320"
                }
            ]
        },
        {
            category: "Case",
            plants: [
                {
                    name:  "Fractal Terra",
                    image: "/img/Case.jpg",
                    description: "Description",
                    cost: "$200"
                },
                {
                    name: "Cooler Master NR200P",
                    image: "/img/Case.jpg",
                    description: "Description",
                    cost: "$280"
                },
                {
                    name: "Lian Li A4-H2O",
                    image: "/img/Case.jpg",
                    description: "Description",
                    cost: "$320"
                }
            ]
        },
        {
            category: "GPU",
            plants: [
                {
                    name:  "RTX 5060",
                    image: "/img/GPU.jpg",
                    description: "Description",
                    cost: "$200"
                },
                {
                    name: "RTX 5070 Ti",
                    image: "/img/GPU.jpg",
                    description: "Description",
                    cost: "$280"
                },
                {
                    name: "RTX 5080",
                    image: "/img/GPU.jpg",
                    description: "Description",
                    cost: "$320"
                }
            ]
        }
    ];
    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff!important',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignIems: 'center',
        fontSize: '20px',
    }
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    }
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    }

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        e.preventDefault();
        setShowCart(false);
    };
    

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({...prevState, [plant.name]: true,}));
    }

    const handleCalculateTotalQuantity = () => {
        let quantity = 0;
        totalQuantity.payload.cart.items.forEach(element => {
            quantity += element.quantity;
        });
        return quantity;
    }
    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="/img/logo.jpg" />
                        <a href="/" onClick={(e) => handleHomeClick(e)}>
                            <div>
                                <h3 style={{ color: 'white' }}>ITX Expert</h3>
                                <i style={{ color: 'white' }}>Where Expert is Home</i>
                            </div>
                        </a>
                    </div>

                </div>
                <div style={styleObjUl}>
                    <div> <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>Products</a></div>
                    <div> <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}><h1 className='cart'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg>{handleCalculateTotalQuantity()}</h1></a></div>
                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
                        {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1><div>{category.category}</div></h1>
                            <div className='product-list'>
                                {category.plants.map((plant, plantIndex) => (
                                    <div className='product-card' key={plantIndex}>
                                        <img className='product-image' src={plant.image} alt={plant.name}/>
                                        <div className='product-title'>{plant.name}</div>
                                        <div className='product-description'>{plant.description}</div>
                                        <div className='product-price'>{plant.cost}</div>
                                        { !addedToCart[plant.name] === true
                                        ? <button  className="product-button" onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                                        : <button  className="product-button added-to-cart">Added to Cart</button>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
