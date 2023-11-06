import { GitHub, Launch } from "@mui/icons-material";
import { Box, Divider, Link, Paper, Typography } from "@mui/material";


const AboutPage = () => {
  
  return(
    <Paper sx={{p: 5}}>
      <Typography gutterBottom variant='h5' align="center">
        Tech Stack:
      </Typography>
      <Box
        display='flex' 
        flexDirection={{xs: 'column', sm: 'row'}}
        justifyContent='space-between'
      >
        <Box>
          <Typography variant='h6'>
            API:
          </Typography>
          <Typography variant='body1' fontStyle='italic'>
            C#, ASP.NET, Entity, Identity
          </Typography>
        </Box>
        <Box>
          <Typography variant='h6'>
            Client Side:
          </Typography>
          <Typography variant='body1' fontStyle='italic'>
            Typescript, React, Redux, RTQ, Material UI
          </Typography>
        </Box>
        <Link 
          display='flex' alignItems='center' justifyContent='flex-start'
          href='https://github.com/Dimisz/ecomm-store'
          target='_blank'
          rel='noopener'
          aria-label='Visit GitHub repo to see the source code of the project'
          underline='none'
          color='inherit'
        >
          <Typography variant='h6' pr={2}>
              View Source Code
          </Typography>
          <GitHub/>
        </Link>
      </Box>
      <Divider/>


      <Typography gutterBottom variant='h5' align="center" pt={3}>
        Testing:
      </Typography>
      <Typography variant='h6'>Signing In & Signing Up</Typography>
      <Typography variant='body1' align='justify' pb={1}>Only signed in users are able to test payment functionality. However in order to check filtering, sorting, and cart-management creating an account is not required. Anonymous cart is created which later is transfered to a user upon signing-in.</Typography>
      <Typography variant='body1' align='justify'>Any email address (e.g. test@mail.com) will suffice to create an account and log in.</Typography>
      <Divider/>
      <Typography variant='h6' pt={2}>Payments</Typography>
      <Link 
          pt={1}
          display='flex' alignContent='center'
          href='https://stripe.com/docs/testing#use-test-cards'
          target='_blank'
          rel='noopener'
          aria-label='View Stripe guidelines for testing payments'
          underline='none'
          color='inherit'
        >
        <Typography variant='body1' align='justify'>
          Please, follow Stripe guidelines to test payments integration.
        </Typography> 
        <Launch/>
      </Link> 
      <Divider/>
      <Link 
          pt={1}
          display='flex' alignContent='center'
          href='https://stripe.com/docs/testing#declined-payments'
          target='_blank'
          rel='noopener'
          aria-label='View Stripe guidelines for testing declined payments'
          underline='none'
          color='inherit'
        >
        <Typography variant='body1' align='justify'>
          Please, use the test banking cards listed here to test declined payments.
        </Typography> 
        <Launch/>
      </Link> 
      <Divider/>
      <Typography variant='h6' pt={2}>Admin Mode</Typography>
      <Typography variant='body1' align='justify' pt={1}>Please, contact me at dimishenz@gmail.com and I'll provide the appropriate credentials to test the administrator mode.</Typography>
      <Divider/>
    </Paper>
  );
}

export default AboutPage;