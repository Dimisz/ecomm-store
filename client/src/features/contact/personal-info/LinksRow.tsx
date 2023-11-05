import { Box, Link, Typography } from "@mui/material"
import { ReactNode } from "react";

interface Props {
  content: string;
  label: string;
  icon: ReactNode | null;
  isDownloadable?: boolean;
}

const LinksRow = ({ content, label, icon, isDownloadable=false }: Props) => {
  const align = isDownloadable ? 'left' : 'right';
  const pl = isDownloadable ? 0 : 3;
  const pr = isDownloadable ? 2 : 0;
  return(
        <Link 
          href={content} 
          rel='noopener' 
          target='_blank' 
          underline="none" 
          color='inherit' 
          align={align}
          pl={pl}
          aria-label={`View ${label} profile`}
        >
          {
            isDownloadable
            ?
            <Box display='flex' alignItems='center'>
              <Typography variant='h6' pr={pr}>{label}:</Typography>
              <Typography variant='body1' fontStyle='italic'>{content}</Typography>
            </Box>
            :
            <>{ icon }</>
          }
        </Link>

  );
}

export default LinksRow;