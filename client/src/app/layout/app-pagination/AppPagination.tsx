import { Box, Grid, Pagination, Typography } from "@mui/material";
import { MetaData } from "../../models/pagination";

interface Props {
  greaterThanMd: boolean;
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

const AppPagination = ({greaterThanMd, metaData, onPageChange}: Props) => {
  const paginationSize = greaterThanMd ? 'large' : 'medium';
   
  const {currentPage, totalCount, totalPages, pageSize} = metaData;
  return(
    <>
      { greaterThanMd && <Grid item md={3}/>}
        <Grid item xs={12} md={9}>
          <Box 
            mt={{ xs: 2, md: 1 }}
            mb={2}
            display='flex' 
            justifyContent='space-between' 
            alignItems='center' 
            flexDirection={{xs: 'column', md: 'row'}}>
              <Typography>
                Displaying {(currentPage - 1) * pageSize + 1}-
                {currentPage*pageSize > totalCount 
                ? totalCount 
                : currentPage * pageSize} of {totalCount} items
              </Typography>
            <Pagination
              color='secondary'
              size={paginationSize}
              count={totalPages || 0}
              page={currentPage || 0}
              sx={{marginTop: { xs: 1 }, marginBottom: { xs: 1}}}
              onChange={(_, page) => onPageChange(page)}
            />
          </Box>
        </Grid>
    </>
  );
}

export default AppPagination;