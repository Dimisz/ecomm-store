import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midSectionLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' }
];

const rightSectionLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
];

const renderLinks = (links: { title: string; path: string; }[]) => {
  return links.map(({ title, path }) => {
    return(
      <ListItem
        component={NavLink}
        to={path}
        key={path}
        sx={{ color: 'inherit', typography: 'h6' }}
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
            component={NavLink} 
            to='/'
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            E-KOMM
          </Typography>
          <IconButton size='large' onClick={toggleTheme}>
            { darkMode 
              ? 
              <LightMode titleAccess="Switch to light mode"/> 
              : 
              <DarkMode titleAccess="Switch to dark mode"/> 
            }
          </IconButton>
          <List sx={{display: 'flex'}}>
           {renderedMidSectionLinks}
          </List>
          <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
            <Badge badgeContent='4' color='secondary'>
              <ShoppingCart />
            </Badge>
          </IconButton>
          <List sx={{display: 'flex'}}>
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