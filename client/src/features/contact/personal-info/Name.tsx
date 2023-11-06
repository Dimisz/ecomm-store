import { Grid, Typography } from "@mui/material";

const Name = () => {
  const fontSize =  {xs: '1.4rem', sm: '2.5rem', md: '3rem'};
  return(
    <Grid item>
      <Typography align="left" sx={{ fontSize: fontSize }}>
        Vladimir Solovyov
      </Typography>
    </Grid>
  )
}

export default Name;