import { Box, Typography } from "@mui/material";
import CertificationLink from "./CertificationLink";
import { certifications } from "../../data";


const CertificationsDownloadable = () => {
  const renderedLinks = certifications.map((cert) => {
    return(
      <CertificationLink key={cert.content} title={cert.title} content={cert.content} isDownloadable={true}/>
    )
  })
  
  return(
    <Box pt={1} pb={2} pl={4} pr={4}>
      <Typography variant='h5'>Courses & Certifications</Typography>
      <Box>
        {renderedLinks}
      </Box>
    </Box>
  )
}
export default CertificationsDownloadable;