import { ClearOutlined, Search } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, debounce } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/store/configureStore";
import { setProductParams } from "../catalogSlice";
import { useMemo, useState } from "react";

const ProductSearch = () => {
  const { productParams } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  const [searchTerm, setSerchTerm] = useState(productParams.searchTerm || '');

  // const debouncedSearch = debounce((event: any) => {
  //   dispatch(setProductParams({searchTerm: event.target.value}));
  // }, 1000);
  const debouncedSearch = useMemo(
    () =>
      debounce((event: any) => {
        dispatch(setProductParams({ searchTerm: event.target.value }));
      }, 1000),
    [dispatch]
  );

  return(
    <FormControl 
      sx={{ 
        mb: {xs: 0, md: 2}, 
        mt: {xs: 2, md: 5}, 
        width: '100%' 
      }} 
      variant="outlined">
      <InputLabel htmlFor="search-products-field">Search Products</InputLabel>
      <OutlinedInput
        id="search-products-field"
        type="text"
        value={searchTerm}

        onChange={(event: any) => {
          setSerchTerm(event.target.value);
          // debouncedSearch func will send requests to API 
          // 1 second after the user stops typing
          // here will also use the onClick event 
          debouncedSearch(event); 
        }}
        endAdornment={
          <InputAdornment position="end">
            {
              searchTerm && searchTerm !== ''
              ?
              <IconButton
                onClick={() => setSerchTerm('')}
                aria-label="reset search input"
                edge="end"
              >
                  <ClearOutlined/>
              </IconButton>
              :
              // <IconButton
              //   // onClick={() => dispatch(setProductParams({searchTerm: searchTerm}))}
              //   aria-label="search products"
              //   edge="end"
              // >
                <Search/>
              // </IconButton>
            }

          </InputAdornment>
        }
        label="Search Products"
      />
    </FormControl>
  );
}

export default ProductSearch;