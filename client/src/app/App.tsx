import { useState } from 'react';
// import my components
import Header from "./layout/Header";
// import ResponsiveAppBar from './layout/ResponsiveHeader';
// mui imports
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => {
    setDarkMode((m) => !m);
  }

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#121212' : '#eaeaea' 
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer 
        position='bottom-right'
        hideProgressBar
        theme='colored'
      />
      <CssBaseline />
      
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  )
}

export default App
