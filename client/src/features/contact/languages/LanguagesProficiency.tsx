import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Typography } from "@mui/material";
import { useState } from "react";

const LanguagesProficiency = () => {
  const [expanded, setExpanded] = useState(true);
  const titleVariant = 'h6';
  return(
    <Accordion expanded={expanded}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="education-content"
          id="education-header"
          onClick={() => setExpanded(!expanded)}
        >
          <Typography variant={titleVariant}>Languages Proficiency</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box display='flex' justifyContent='space-between'>
              <Typography variant={titleVariant}>
              Ukranian, Belarusian, Russian
              </Typography>
              <Typography variant={titleVariant}>
                Native
              </Typography>
            </Box>
            <Divider/>
            <Box display='flex' justifyContent='space-between' pt={1}>
              <Typography variant={titleVariant}>
              English
              </Typography>
              <Typography variant={titleVariant} display={{xs: 'none', sm:'block'}}>
                Fluent (TOEFL Score 115)
              </Typography>
              <Typography variant={titleVariant} display={{sm: 'none'}}>
                Fluent
              </Typography>
            </Box>
            <Divider/>
            <Box display='flex' justifyContent='space-between' pt={1}>
              <Typography variant={titleVariant}>
              Arabic
              </Typography>
              <Typography variant={titleVariant}>
                Intermediate
              </Typography>
            </Box>
            <Divider/>
            <Box display='flex' justifyContent='space-between' pt={1}>
              <Typography variant={titleVariant}>
              Mandarin
              </Typography>
              <Typography variant={titleVariant}>
                Beginner
              </Typography>
            </Box>

        </AccordionDetails>
      </Accordion>
  )
}
export default LanguagesProficiency;
