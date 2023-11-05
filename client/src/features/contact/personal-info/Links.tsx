import { GitHub, LinkedIn } from "@mui/icons-material";
import { Grid } from "@mui/material";
import LinksRow from "./LinksRow";

interface Props {
  isDownloadable?: boolean;
}

const Links = ({isDownloadable=false}: Props) => {
  const links = [
    { label: 'GitHub', content: 'https://github.com/Dimisz' , icon: <GitHub/> },
    { label: 'LinkedIn', content: 'https://www.linkedin.com/in/vladimir-solovyov-6b7136222/' , icon: <LinkedIn /> },
  ];

  const alignContent = isDownloadable ? 'left' : 'center';
  const justifyContent = isDownloadable ? 'left' : 'right';
  const sm = isDownloadable ? 12 : 4 ;

  const renderedHeader = links.map((link) => {
    return(
      <LinksRow 
        key={link.content}
        content={link.content} 
        label={link.label}
        icon={link.icon} 
        isDownloadable={isDownloadable}
      />
    )
  })
  return(
    <Grid 
      container xs={12} sm={sm}
      display='flex' 
      alignContent={alignContent} 
      justifyContent={justifyContent}
    >
      {renderedHeader}
    </Grid>
  );
}

export default Links;