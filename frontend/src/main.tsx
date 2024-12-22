import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.tsx';
import {Toaster} from "react-hot-toast";
import axios from "axios";

const backendUrl = "https://phoenix-sps-backend-0-0-1.onrender.com/api/v1";

axios.defaults.baseURL = backendUrl;
axios.defaults.withCredentials = true;

const theme = createTheme({
  typography:{
    fontFamily:"Roboto Slab,serif",
    allVariants:{color:"white"},
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(

  <AuthProvider>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Toaster position="top-center"/>
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </AuthProvider>

)
