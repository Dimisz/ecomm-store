import { Launch } from "@mui/icons-material";
import { Box, Divider, Link, Typography } from "@mui/material";

interface Props {
  title: string;
  content: string;
}

const CertificationLink = ({ title, content }:Props) => {
  return(
    <>
          <Link
            href={content}
            rel='noopener'
            target='_blank'
            underline="none"
            color='inherit'
            align="left"
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            pt={1}
          >
            <Typography variant='h6'>
              {title}
            </Typography>
            <Launch />
          </Link>
        <Divider/>
    </>
  )
}

export default CertificationLink;