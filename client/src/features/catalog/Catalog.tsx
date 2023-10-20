import { useEffect } from "react";

import ProductList from "./ProductList";
import Loader from '../../app/layout/Loader';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { fetchAllProductsAsync, fetchFiltersAsync, productSelectors } from './catalogSlice';
import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Pagination, Paper, Radio, RadioGroup, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";

const sortOptions = [
  {value: 'name', label: 'Alphabetical'},
  {value: 'priceDesc', label: 'Price - High to low'},
  {value: 'price', label: 'Price - Low to high'}
]


const Catalog = () => {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, status, filtersLoaded, brands, types } = useAppSelector(state => state.catalog);

  const dispatch = useAppDispatch();

  const theme = useTheme();
  const greaterThanSm = useMediaQuery(theme.breakpoints.up("sm"));
  
  useEffect(() => {
    if(!productsLoaded) dispatch(fetchAllProductsAsync());
  }, [productsLoaded, dispatch]);

  useEffect(() => {
    if(!filtersLoaded) dispatch(fetchFiltersAsync());
  }, [filtersLoaded, dispatch]);

  if(status.includes('pending')) return <Loader message='Loading products...' />;
  return(
      <Grid container spacing={3}>
        {greaterThanSm && (
          <Grid item md={3}>
            <Paper sx={{mb: 2, mt: 5 }}>
              <TextField
                variant='outlined'
                label='Search products'
                
                fullWidth
              />
            </Paper>
            <Paper sx={{mb: 2, p: 2}}>
              <FormControl component='fieldset'>
                <FormLabel component='legend'>Sort By</FormLabel>
                <RadioGroup
                  aria-label='sorting options'
                  defaultValue='name'
                  name='radio-buttons-group'
                >
                  {sortOptions.map((option) => {
                    return(
                      <FormControlLabel 
                        key={option.value}
                        value={option.value} 
                        control={<Radio/>} label={option.label} />
                    )
                  })}
                </RadioGroup>
              </FormControl>
            </Paper>
            <Paper sx={{mb: 2, p: 2}}>
              <FormGroup>
                {brands.map((brand) => {
                  return(
                    <FormControlLabel control={<Checkbox />} label={brand} key={brand} />
                  );
                })}
              </FormGroup>
            </Paper>
            <Paper sx={{mb: 2, p: 2}}>
                <FormGroup>
                  {types.map((type) => {
                    return(
                      <FormControlLabel control={<Checkbox />} label={type} key={type} />
                    );
                  })}
                </FormGroup>
              </Paper>
          </Grid>
          )
          }
      <Grid item md={9}>
        <ProductList products={products}/>
      </Grid>
      {greaterThanSm && <Grid item md={3}/>}
      <Grid item xs={12} md={9}>
        <Box display='flex' justifyContent='space-between' alignItems='center' mb={2} flexDirection={{xs: 'column', md: 'row'}}>
          <Typography>
            Displaying 1-6 of 20 items
          </Typography>
          <Pagination
            color='secondary'
            size='large'
            count={5}
            page={2}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Catalog;