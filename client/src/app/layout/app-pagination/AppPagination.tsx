import { Box, Grid, Pagination, Typography } from "@mui/material";
import { MetaData } from "../../models/pagination";

interface Props {
  greaterThanMd: boolean;
  metaData: MetaData | null;
}

const AppPagination = ({greaterThanMd, metaData}: Props) => {
  return(
    <>
      { greaterThanMd && <Grid item md={3}/>}
        <Grid item xs={12} md={9}>
          <Box 
            display='flex' 
            justifyContent='space-between' 
            alignItems='center' 
            mb={2} 
            flexDirection={{xs: 'column', md: 'row'}}>
              <Typography sx={{marginTop: {xs: -1}}}>
                { metaData && metaData?.totalCount > 0 ? `Displaying 1-6 of ${metaData?.totalCount} items` : 'No products found'}
              </Typography>
            <Pagination
              color='secondary'
              size='large'
              count={metaData?.totalPages || 0}
              page={metaData?.currentPage || 0}
              sx={{marginTop: {xs: 1, md: 0}}}
            />
          </Box>
        </Grid>
    </>
  );
}

export default AppPagination;