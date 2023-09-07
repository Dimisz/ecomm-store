import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Header = ({ darkMode, toggleTheme }: Props) => {
  return(
    <>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6'>
            E-KOMM
          </Typography>
          <IconButton onClick={toggleTheme} sx={{ ml: 'auto' }}>
            { darkMode 
              ? 
              <LightMode titleAccess="Switch to light mode"/> 
              : 
              <DarkMode titleAccess="Switch to dark mode"/> 
            }
          </IconButton>
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