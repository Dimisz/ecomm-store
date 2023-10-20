import { Grid, Paper, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from "@mui/material";

interface Props {
  sortOptions: { value: string; label: string; }[];
  brands: string[];
  types: string[];
}

const FiltersPanelFullscreen = ({ sortOptions, brands, types }: Props) => {
  return(
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
  );
}

export default FiltersPanelFullscreen;