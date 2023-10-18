import { useEffect } from "react";

import ProductList from "./ProductList";
import Loader from '../../app/layout/Loader';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { fetchAllProductsAsync, fetchFiltersAsync, productSelectors } from './catalogSlice';

const Catalog = () => {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, status, filtersLoaded } = useAppSelector(state => state.catalog);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if(!productsLoaded) dispatch(fetchAllProductsAsync());
  }, [productsLoaded, dispatch]);

  useEffect(() => {
    if(!filtersLoaded) dispatch(fetchFiltersAsync());
  }, [filtersLoaded, dispatch]);

  if(status.includes('pending')) return <Loader message='Loading products...' />;
  return <ProductList products={products}/>;
}

export default Catalog;