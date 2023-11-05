import { Box, Typography } from "@mui/material";
import JobSection from "./JobSection";
import { jobDescriptions } from "../data";

const renderedJobs = jobDescriptions.map((job) => {
  return(
    <JobSection job={job} key={job.companyName}/>
  );
})

const WorkExperienceDownloadable = () => {
  

  return(
    <Box pt={2} pb={2} pl={4} pr={4}>
      <Typography variant='h5'>Work Experience</Typography>
      <Box>
        {renderedJobs}
      </Box>
    </Box>
  )
}
export default WorkExperienceDownloadable;