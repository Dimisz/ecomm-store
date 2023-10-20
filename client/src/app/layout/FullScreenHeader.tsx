import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { Badge, Box, IconButton, List, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

interface Props {
  darkMode: boolean;
  toggleTheme: () => void;
  renderedMidSectionLinks:  React.ReactNode[];
  renderedRightSectionLinks: React.ReactNode[];
  itemsCount: number | undefined;
}

const FullScreenHeader = ({
  darkMode, 
  toggleTheme,
  renderedMidSectionLinks,
  renderedRightSectionLinks,
  itemsCount
 }: Props) => {
  return(
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo section */}
          <Box display='flex' alignItems='center'>
            <Typography
                variant='h6'
                noWrap
                component={NavLink}
                to='/'
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                E-KOMM
              </Typography>
              <IconButton
                size='large'
                onClick={toggleTheme}
              >
                { darkMode
                  ?
                  <LightMode titleAccess="Switch to light mode"/>
                  :
                  <DarkMode titleAccess="Switch to dark mode"/>
                }
              </IconButton>
          </Box>
          {/* middle section */}
          <List sx={{ display: 'flex' }}>
           {renderedMidSectionLinks}
          </List>
          {/* right hand section */}

          <Box display='flex' alignItems='center'>
            <IconButton 
              component={Link}
              to='/cart'
              size='large' 
              edge='start' 
              color='inherit'
            >
              <Badge badgeContent={itemsCount} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
            <List sx={{ display: 'flex' }}>
             {renderedRightSectionLinks}
            </List>
          </Box>
        </Toolbar>
  );
}

export default FullScreenHeader;