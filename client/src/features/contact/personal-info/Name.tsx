import { Grid, Typography } from "@mui/material";

interface Props {
  isDownloadable? :boolean; 
}

const Name = ({isDownloadable = true}:Props) => {
  const fontSize = isDownloadable ? '2rem' : {xs: '1.4rem', sm: '2.5rem', md: '3rem'};
  return(
    <Grid item>
      <Typography align="left" sx={{ fontSize: fontSize }}>
        Vladimir Solovyov
      </Typography>
    </Grid>
  )
}

export default Name;