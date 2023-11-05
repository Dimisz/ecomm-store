import { GitHub, LinkedIn } from "@mui/icons-material";
import { Grid } from "@mui/material";
import LinksRow from "./LinksRow";


const Links = () => {
  const links = [
    { label: 'GitHub', content: 'https://github.com/Dimisz' , icon: <GitHub/> },
    { label: 'LinkedIn', content: 'https://www.linkedin.com/in/vladimir-solovyov-6b7136222/' , icon: <LinkedIn /> },
  ];
  
  const renderedHeader = links.map((link) => {
    return(
      <LinksRow 
        content={link.content} 
        icon={link.icon} 
      />
    )
  })
  return(
    <Grid 
      container xs={12} sm={6}
      display='flex' 
      alignContent='center' 
      justifyContent='right'>
      {renderedHeader}
    </Grid>
  );
}

export default Links;