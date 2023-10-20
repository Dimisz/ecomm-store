import { FilterListRounded } from "@mui/icons-material";
import { Grid, Paper, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, SwipeableDrawer, Button, Box, IconButton } from "@mui/material";
import { useState } from "react";

interface Props {
  sortOptions: { value: string; label: string; }[];
  brands: string[];
  types: string[];
}


const FiltersPanelMobile = ({ sortOptions, brands, types }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setIsOpen(open);
    };
  return(
    <Grid item xs={12}>
      <Box display='flex' alignItems='center'>
        <Paper sx={{m: 2, flexGrow: 1}}>
          <TextField
            variant='outlined'
            label='Search products'
            fullWidth
          />
        </Paper>
        <IconButton 
          size="large"
          aria-label="filtering controls"
          aria-controls="filter-controls"
          aria-haspopup="true"
          color="inherit"
          onClick={toggleDrawer(true)}
        >
          <FilterListRounded/>
        </IconButton>
      </Box>
      
      <SwipeableDrawer
        anchor='top'
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
      <Grid 
        item
        sx={{ width:  'auto' }}
        role="presentation"
        // onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
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
            <Button onClick={toggleDrawer(false)} variant='outlined'>Apply Filters</Button>
        </Paper>
      </Grid>
      </SwipeableDrawer>
    </Grid>
  );
}

export default FiltersPanelMobile;