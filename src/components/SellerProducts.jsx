import React, { useEffect, useState } from 'react';
import axios from "axios";

const SellerProducts = ({ sellerId }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get(`/seller/products`, {
        params: { sellerId },
      });
      setProducts(response.data);
    } catch (err) {
      setError('Error fetching products.');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axiosInstance.delete(`/seller/products/${id}`);
      fetchProducts();
    } catch (err) {
      setError('Error deleting product.');
    }
  };

  return (
    <div>
      <h1>Seller Products</h1>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price} 
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerProducts;
