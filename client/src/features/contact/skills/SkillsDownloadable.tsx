import { Box, Typography } from "@mui/material";
import SkillsSection from "./SkillsSection";
import { skills } from "../data";



const SkillsDownloadable = () => {
  const renderedSkills = skills.map((skill:{ title:string; skillsList:string[]; }) => {
    return(
      <SkillsSection skill={skill} key={skill.title}/>   
    )
  });
  return(
    <Box pt={2} pb={2} pl={4} pr={4}>
      <Typography variant='h5'>Skills</Typography>
      <Box>
        {renderedSkills}
      </Box>
    </Box>
  )
}

export default SkillsDownloadable;