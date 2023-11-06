import { GitHub, LinkedIn } from "@mui/icons-material";
import { Grid } from "@mui/material";
import DownloadableLinksRow from "./DownloadableLinkRow";

const DownloadableLinks = () => {
  const links = [
    { label: 'GitHub', content: 'https://github.com/Dimisz' , icon: <GitHub/> },
    { label: 'LinkedIn', content: 'https://www.linkedin.com/in/vladimir-solovyov-6b7136222/' , icon: <LinkedIn /> },
  ];

  const renderedHeader = links.map((link) => {
    return(
      <DownloadableLinksRow 
        key={link.content}
        content={link.content} 
        label={link.label}
      />
    )
  })
  return(
    <Grid 
      container xs={12}
      display='flex' 
      flexDirection='column'
      alignContent='flex-start' 
      justifyContent='flex-start'
    >
      {renderedHeader}
    </Grid>
  );
}

export default DownloadableLinks;