import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useState } from "react";
import CertificationLink from "./CertificationLink";

const certifications = [
  { 
    title: 'Meta Front-End Developer Professional Certificate', 
    content: 'https://www.credly.com/badges/e15938ad-6ff2-44bf-a855-c3f5ce403d09/linked_in_profile'
  },
  {
    title: 'Tensorflow Developer',
    content: 'https://www.credential.net/f8ae20ad-08ad-4ce1-8ca4-33dc64626f7b#gs.1hvna8'
  },
  {
    title: 'The Modern React Bootcamp (Hooks, Context, NextJS, Router)',
    content: 'https://www.udemy.com/certificate/UC-e159c055-d0c7-4f38-a75c-10fb3076aead/'
  },
  {
    title: 'C# Fundamentals (Microsoft + freeCodeCamp)',
    content: 'https://www.freecodecamp.org/certification/fcc4ed15b8e-7c76-4d43-94c7-364d12f3c284/foundational-c-sharp-with-microsoft'
  },
  {
    title: 'Java Programming and Software Engineering (Duke University)',
    content: 'https://www.coursera.org/account/accomplishments/specialization/certificate/ZBBHEL4PRBJL'
  },
  {
    title: 'Intro to OOP with Java (GATech)',
    content: 'https://credentials.edx.org/credentials/dfaedfafe47044de958b10d9d95c5c47/'
  },
  {
    title: 'Programming in Java (Codio + Coursera)',
    content: 'https://www.coursera.org/account/accomplishments/specialization/certificate/Q9BEG7ZM7GRH'
  },
  {
    title: 'Programming in Python (Codio + Coursera)',
    content: 'https://www.coursera.org/account/accomplishments/specialization/certificate/82CGBLRZ94Y5'
  },
  {
    title: 'Intro to Programming with Python and Java (University of Pennsylvania)',
    content: 'https://www.coursera.org/account/accomplishments/specialization/certificate/MFR8JXNCKJTZ'
  },
  {
    title: 'DeepLearning.AI TensorFlow Developer',
    content: 'https://www.coursera.org/account/accomplishments/professional-cert/RTSH7GTD7PBM?utm_product=prof'
  },
  {
    title: 'Python Programming (GATech)',
    content: 'https://credentials.edx.org/credentials/57a9c67472f84f049f89d651fe1bc403/'
  }
]

const Certifications = () => {
  const [expanded, setExpanded] = useState(true);
  const renderedLinks = certifications.map((cert) => {
    return(
      <CertificationLink key={cert.content} title={cert.title} content={cert.content}/>
    )
  })
  
  return(
    <Accordion expanded={expanded}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="education-content"
          id="education-header"
          onClick={() => setExpanded(!expanded)}
        >
          <Typography variant='h6'>Courses & Certifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {renderedLinks}
        </AccordionDetails>
      </Accordion>
  )
}
export default Certifications;