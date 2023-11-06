import { Grid, Typography } from "@mui/material"

interface Props {
  label: string;
  content: string;
}

const PersonalInfoGridRow = ({label, content }: Props) => {
  const xs = 12;
  const justifyContent = {xs: 'space-between', sm: 'flex-start'};
  return(
    <Grid 
      item 
      xs={xs} sm={6}
      display='flex' 
      alignItems='center' 
      justifyContent={justifyContent}
    >
      <Typography variant='h6' align="left" pr={2}>
        {label}
      </Typography>
      <Typography>
        {content}
      </Typography>
    </Grid>
  );
}

export default PersonalInfoGridRow;