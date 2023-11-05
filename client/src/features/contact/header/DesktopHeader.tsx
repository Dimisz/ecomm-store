import { Avatar, Box, Divider, Grid } from "@mui/material"
import PersonalInfoGrid from "../personal-info/PersonalInfoGrid"
import Name from "../personal-info/Name"
import Links from "../personal-info/Links"

const DesktopHeader = () => {
  return(
    <Grid container spacing={6} pl={2} pr={2}>
          <Grid item sm={2}>
            <Avatar
              alt="Vladimir Solovyov"
              src="https://avatars.githubusercontent.com/u/53788781?s=400&u=fd4ba406c620cb21c2a6f444312b5e022d0b5e4f&v=4"
              style={{ height: '8rem', width: '8rem'}}
            />
          </Grid>
          <Grid item sm={10}>
            <Box display='flex' justifyContent='space-between'>
              <Name/>
              <Links/>
            </Box>
            <Divider/>
            <PersonalInfoGrid />
          </Grid>
      </Grid>
  )
}

export default DesktopHeader;