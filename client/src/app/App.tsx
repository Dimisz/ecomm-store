import { useEffect, useState } from 'react';
// import my components
import Header from "./layout/Header";
// import ResponsiveAppBar from './layout/ResponsiveHeader';
// mui imports
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStoreContext } from './context/StoreContext';
import Loader from './layout/Loader';
import { getCookie } from './util/util';
import agent from './api/agent';

const App = () => {
  const { setCart } = useStoreContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if(buyerId){
      agent.Cart.get()
        .then((cart) => setCart(cart))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
    else {
      setLoading(false);
    }
  }, [setCart]);

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

  if(loading) return <Loader message='Intializing app...'/>;

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
