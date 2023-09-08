import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import MobileHeader from "./MobileHeader";

const midSectionLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' }
];

const rightSectionLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
];

const renderLinks = (links: { title: string; path: string; }[], onClick?: () => void ) => {
  return links.map(({ title, path }) => {
    return(
      <ListItem
        component={NavLink}
        to={path}
        key={path}
        sx={{ my: 2, color: 'inherit', typography: 'h6', display: 'block' }}  
        onClick={onClick}
      >
        {title.toUpperCase()}
      </ListItem>
    );
  });
}

interface Props {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Header = ({ darkMode, toggleTheme }: Props) => {
  const renderedMidSectionLinks = renderLinks(midSectionLinks);
  const renderedRightSectionLinks = renderLinks(rightSectionLinks);

  return(
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography 
              variant='h6' 
              noWrap
              component={NavLink} 
              to='/'
              sx={{ color: 'inherit', textDecoration: 'none', display: { xs: 'none', md: 'flex' }, mr: 1 }}
            >
              E-KOMM
            </Typography>
            <IconButton 
              size='large' 
              onClick={toggleTheme} 
              sx={{ display: { xs: 'none', md: 'flex' }} }>
              { darkMode 
                ? 
                <LightMode titleAccess="Switch to light mode"/> 
                : 
                <DarkMode titleAccess="Switch to dark mode"/> 
              }
            </IconButton>
            
            {/* NavBar for small-screen devices extracted to a separate component */}
            <MobileHeader
              darkMode= {darkMode}
              toggleTheme={toggleTheme}
              renderLinks={renderLinks} 
              midSectionLinks={midSectionLinks} 
              rightSectionLinks={rightSectionLinks}
            />
          

          {/* displayed on large screens */}
          <List sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
           {renderedMidSectionLinks}
          </List>
          <IconButton size='large' edge='start' color='inherit' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Badge badgeContent='4' color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
           {renderedRightSectionLinks}
          </List>
        </Toolbar>
      </AppBar>
      {/* empty Toolbar below rendered to prevent overlay 
          of 'fixed' position AppBar over the main content
          as recommended in MUI docs
          * can use position='sticky' but IE doesn't render it
      */}
      <Toolbar />
    </>
  );
}

export default Header;