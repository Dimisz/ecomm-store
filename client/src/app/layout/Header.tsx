import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Badge, Box, IconButton, List, ListItem, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from 'react';

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
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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


            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {
                  renderLinks(midSectionLinks, handleCloseNavMenu)
                }
              </Menu>
            </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Typography
              variant='h6'
              component={NavLink}
              to='/'
              sx={{
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              E-KOMM
            </Typography>
          </Box>
          
          

          {/* displayed on large screens */}
          <List sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
           {renderedMidSectionLinks}
          </List>
          <IconButton 
            size='large' 
            onClick={toggleTheme} 
            sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' } }>
            { darkMode 
              ? 
              <LightMode titleAccess="Switch to light mode"/> 
              : 
              <DarkMode titleAccess="Switch to dark mode"/> 
            }
          </IconButton>
          <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
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