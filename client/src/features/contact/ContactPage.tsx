import { Avatar, Box, Button, ButtonGroup, Grid, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import { usePDF } from "react-to-pdf";
import DesktopHeader from "./header/DesktopHeader";
import MobileHeader from "./header/MobileHeader";
import EducationAccordion from "./education/EducationAccordion";
import LanguagesProficiency from "./languages/LanguagesProficiency";
import Certifications from "./education/certifications-links/Certifications";


const ContactPage = () => {
  const { toPDF, targetRef } = usePDF({filename: 'cv.pdf'});
  const theme = useTheme();
  const greaterThanSm = useMediaQuery(theme.breakpoints.up("sm"));
  
  return(
    <>
      <Paper ref={targetRef} sx={{ pt: 2 }}>
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
      </Paper>
      <Button
      onClick={() => toPDF()}
      variant='outlined'
        >
      Donload as PDF
        </Button>
    </>
  );
}

export default ContactPage;