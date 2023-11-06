import { Box, Link, Typography } from "@mui/material"

interface Props {
  content: string;
  label: string;
}

const DownloadableLinksRow = ({ content, label }: Props) => {
  const align = 'left';
  const pl = 0 ;
  const pr = 2;
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
          <Box display='flex' alignItems='flex-start' flexDirection='column' justifyContent='center'>
            <Typography variant='h6' pr={pr}>{label}:</Typography>
            <Typography variant='body1' fontStyle='italic'>{content}</Typography>
          </Box>
        </Link>

  );
}

export default DownloadableLinksRow;