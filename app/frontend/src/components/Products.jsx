import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/api';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const AllProducts = await getAllProducts();
      setProducts(AllProducts.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="products-background">
      { products.map((product) => (
        <li>
          key={ product.id }
          id={ product.id }
          name={ product.name }
          cost_price={ product.cost_price }
          sales_price={ product.sales_price }
        </li>)) }
    </div>
  );
}