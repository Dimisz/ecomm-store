import { Search } from "@mui/icons-material";
import { Grid, Paper, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";


interface Props {
  sortOptions: { value: string; label: string; }[];
  brands: string[];
  types: string[];
}

const FiltersPanelDesktop = ({ sortOptions, brands, types }: Props) => {
  return(
    <Grid item md={3}>
      {/* <Paper sx={{mb: 2, mt: 5 }}> */}
        <FormControl sx={{ mb: 2, mt: 5, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="search-products-field">Search Products</InputLabel>
          <OutlinedInput
            id="search-products-field"
            type="text"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search products"
                  // onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  <Search/>
                </IconButton>
              </InputAdornment>
            }
            label="Search Products"
          />
        </FormControl>
      {/* </Paper> */}
      {/* <Paper sx={{mb: 2, mt: 5 }}>
        <TextField
          variant='outlined'
          label='Search products'
          
          fullWidth
        />
      </Paper> */}
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
  );
}

export default FiltersPanelDesktop;