import { useEffect } from "react";

import ProductList from "./ProductList";
import Loader from '../../app/layout/Loader';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { fetchAllProductsAsync, fetchFiltersAsync, productSelectors } from './catalogSlice';
import { Box, Grid, Pagination, Typography, useMediaQuery, useTheme } from "@mui/material";
import FiltersPanelDesktop from "./filters/FiltersPanelDesktop";
import FiltersPanelMobile from "./filters/FiltersPanelMobile";

const sortOptions = [
  {value: 'name', label: 'Alphabetical'},
  {value: 'priceDesc', label: 'Price - High to low'},
  {value: 'price', label: 'Price - Low to high'}
]


const Catalog = () => {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, status, filtersLoaded, brands, types, productParams } = useAppSelector(state => state.catalog);

  const dispatch = useAppDispatch();

  const theme = useTheme();
  const greaterThanMd = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if(!productsLoaded) dispatch(fetchAllProductsAsync());
  }, [productsLoaded, dispatch]);

  useEffect(() => {
    if(!filtersLoaded) dispatch(fetchFiltersAsync());
  }, [filtersLoaded, dispatch]);

  if(status.includes('pending')) return <Loader message='Loading products...' />;
  return(
      <Grid container spacing={3}>
        { greaterThanMd
          ? 
          <FiltersPanelDesktop 
            sortOptions={sortOptions}
            brands={brands}
            types={types}
            orderBy={productParams.orderBy}
            checkedBrands={productParams.brands}
            checkedTypes={productParams.types}
          /> 
          :
          <FiltersPanelMobile
            sortOptions={sortOptions}
            brands={brands}
            types={types}
            orderBy={productParams.orderBy}
            checkedBrands={productParams.brands}
            checkedTypes={productParams.types}
          /> 
        }
        <Grid item xs={12} md={9} mt={{xs: -5, md: 0}}>
          <ProductList products={products} />
        </Grid>
        { greaterThanMd && <Grid item md={3}/>}
        <Grid item xs={12} md={9}>
          <Box 
            display='flex' 
            justifyContent='space-between' 
            alignItems='center' 
            mb={2} 
            flexDirection={{xs: 'column', md: 'row'}}>
            <Typography sx={{marginTop: {xs: -1}}}>
              Displaying 1-6 of 20 items
            </Typography>
            <Pagination
              color='secondary'
              size='large'
              count={5}
              page={2}
              sx={{marginTop: {xs: 1, md: 0}}}
            />
          </Box>
        </Grid>
    </Grid>
  );
}

export default Catalog;