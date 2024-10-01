
import React, { useState, useEffect } from 'react';
// import './App.css';

/**
 * The main App component
 */
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=4')
      .then((response) => response.json())

      // implement fetch interpretation
      

      // below is the rest of the code
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    // implement adding to cart
  };

  // FIXED removeFromCart function
  const removeFromCart = (id) => {
    // Filter out the product with the matching ID

    // implement updates from removing 
  };

  const getTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>

      {/* Product List */}
      <div className="product-list">
        <h2>Products for Sale</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Shopping Cart */}
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${getTotal()}</h3>
      </div>
    </div>
  );
}

export default App;
