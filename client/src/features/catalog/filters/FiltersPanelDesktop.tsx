import { Grid, Paper } from "@mui/material";
import ProductSearch from "../search-field/ProductSearch";
import RadioButtonGroup from "../../../app/layout/radio-button-group/RadioButtonGroup";
import { useAppDispatch } from "../../../app/store/configureStore";
import { setProductParams } from "../catalogSlice";
import CheckboxButtonsGroup from "../../../app/layout/checkbox-buttons-group/CheckboxButtonsGroup";


interface Props {
  sortOptions: { value: string; label: string; }[];
  brands: string[];
  types: string[];
  orderBy: string;
  checkedBrands: string[];
  checkedTypes: string[];
}

const FiltersPanelDesktop = ({ sortOptions, brands, types, orderBy, checkedBrands, checkedTypes }: Props) => {
  const dispatch = useAppDispatch();
  
  return(
    <Grid item md={3}>
      <ProductSearch/>
      <Paper sx={{mb: 2, p: 2}}>
        <RadioButtonGroup
          selectedValue={orderBy}
          options={sortOptions}
          onChange={(event) => dispatch(setProductParams({orderBy: event.target.value}))}
        />
      </Paper>
      <Paper sx={{mb: 2, p: 2}}>
        <CheckboxButtonsGroup
          items={brands}
          checked={checkedBrands}
          onChange={(items: string[]) => dispatch(setProductParams({brands: items}))}
        />
      </Paper>
      <Paper sx={{mb: 2, p: 2}}>
        <CheckboxButtonsGroup
            items={types}
            checked={checkedTypes}
            onChange={(items: string[]) => dispatch(setProductParams({types: items}))}
          />
      </Paper>
      {/* <Button
        onClick={() => dispatch(resetProductParams())}
        variant='outlined'
        fullWidth
        // sx={{ m: 1, ml: 0 }}
      >Reset Filters
      </Button> */}
    </Grid>
  );
}

export default FiltersPanelDesktop;