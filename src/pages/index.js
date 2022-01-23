import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from '../components/Home'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Main() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Home/>
    </ThemeProvider>
  )
}
export default Main;