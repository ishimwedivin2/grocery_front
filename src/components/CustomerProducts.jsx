import React, { useEffect, useState } from 'react';
import axios from "axios";

const CustomerProducts = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axiosInstance.get('/customer/products');
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerProducts;
