import { useState } from 'react';
// import my components
import Catalog from "../features/catalog/Catalog";
import Header from "./layout/Header";
// mui imports
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

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
      <CssBaseline />
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  )
}

export default App
