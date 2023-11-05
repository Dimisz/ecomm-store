import { Button, Paper, useMediaQuery, useTheme } from "@mui/material";
import { usePDF } from "react-to-pdf";
import DesktopHeader from "./header/DesktopHeader";
import MobileHeader from "./header/MobileHeader";
import EducationAccordion from "./education/EducationAccordion";
import LanguagesProficiency from "./languages/LanguagesProficiency";
import Certifications from "./education/certifications-links/Certifications";
import WorkExperience from "./experience/WorkExperience";
import Skills from "./skills/Skills";
import DownloadableCV from "./downloadable-cv/DownloadableCV";
import { useState } from "react";



const ContactPage = () => {
  const { toPDF, targetRef } = usePDF({filename: 'cv.pdf'});
  const theme = useTheme();
  const greaterThanSm = useMediaQuery(theme.breakpoints.up("sm"));
  
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => console.log('Downloading...'), 1000);
    toPDF();
    setIsDownloading(false);
  }

  return(
    <>
      <Paper ref={targetRef} sx={{ pt: 2, position: 'fixed', bottom: 1000 }}>
        <DownloadableCV/>
      </Paper>
      
      <Paper sx={{ pt: 2 }}>
        {
          greaterThanSm
          ?
          <DesktopHeader/>
          :
          <MobileHeader/>
        }
        <EducationAccordion/>
        <Certifications/>
        <LanguagesProficiency/>
        <WorkExperience />
        <Skills/>
      </Paper>
      <Button
        onClick={handleDownload}
        variant='outlined'
        fullWidth
      >
        Download as PDF
      </Button>
    </>
  );
}

export default ContactPage;