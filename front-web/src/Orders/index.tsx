import './styles.css';
import React, { useState } from 'react';
import StepsHeaders from './StepsHeader';
import OrderLocation from "./OrderLocation";
import './styles.css';
import ProductsList from './ProductsList';
import { useEffect } from 'react';
import { Product, OrderLocationData } from './types';
import { fetchProducts } from '../api';


function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, []);


  return (
    <div className="orders-container">
      <StepsHeaders />
      <ProductsList products={products} />
      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
    </div>
  );
}
export default Orders;