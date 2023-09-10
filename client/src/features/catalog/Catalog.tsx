import { useState, useEffect } from 'react';
import agent from '../../app/api/agent';

import { Product } from "../../app/models/product";
// custom components
import ProductList from "./ProductList";
import Loader from '../../app/layout/Loader';

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => setProducts(products))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, []);

  if(loading) return <Loader message='Loading products...' />;
  return <ProductList products={products}/>;
}

export default Catalog;