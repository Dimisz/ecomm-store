import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

import MobileHeader from "./MobileHeader";
import { useStoreContext } from "../context/StoreContext";

const midSectionLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' }
];

const rightSectionLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
];

interface Props {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Header = ({ darkMode, toggleTheme }: Props) => {
  const { cart } = useStoreContext();
  const itemsCount = cart?.items.reduce((totalQty, item) => {
    return totalQty + item.quantity; 
  }, 0);

  const renderLinks = (links: { title: string; path: string; }[], onClick?: () => void ) => {
    return links.map(({ title, path }) => {
      return(
        <ListItem
          component={NavLink}
          to={path}
          key={path}
          sx={{ 
            // my: 2, 
            color: 'inherit', 
            typography: 'h6', 
            display: 'block', 
            '&:hover': {
              color: 'grey.500'
            } ,
            '&.active': {
              color: darkMode ? 'secondary.main' : 'text.secondary'
            }
          }}  
          onClick={onClick}
        >
          {title.toUpperCase()}
        </ListItem>
      );
    });
  }
  const renderedMidSectionLinks = renderLinks(midSectionLinks);
  const renderedRightSectionLinks = renderLinks(rightSectionLinks);

  return(
    <>
      {/* full-screen navbar */}
      <AppBar position='sticky' >
        {/* NavBar for small-screen devices extracted to a separate component */}
        <MobileHeader
          darkMode= {darkMode}
          toggleTheme={toggleTheme}
          renderLinks={renderLinks} 
          midSectionLinks={midSectionLinks} 
          rightSectionLinks={rightSectionLinks}
        />
        <Toolbar sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
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
      </AppBar>
    </>
  );
}

export default Header;