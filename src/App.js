import React, { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, createTheme, Switch } from '@mui/material';

export default function App() {
  const [dark, setDark] = useState(true);
  const [themeLabel, setThemeLabel] = useState('Thème Dark')

  const handleChange = () => {
    dark ? setDark(false) : setDark(true)
    themeLabel === 'Thème Dark' ? setThemeLabel('Thème Light'): setThemeLabel('Thème Dark')
  }

  // log test
  useEffect(() => {
    console.log('dark: ', dark);
    console.log('label theme: ', themeLabel)
  }, [dark, themeLabel])

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Switch 
      defaultChecked 
      value={themeLabel} 
      label={themeLabel} 
      onClick={handleChange}
      />
      {themeLabel}
    </ThemeProvider>
  )
}

const darkTheme = createTheme({
  palette: {
    background: {
      paper: '#007be0',
      default: '#001e3c'
    },
    primary: {
      main: '#033a75'
    },
    secondary: {
      main: '#007be0'
    },
    text: {
      primary: '#fff'
    }
  }
})

const lightTheme = createTheme({
  palette: {
    background: {
      paper: '#84848c',
      default: '#c8def5',
    },
    primary: {
      main: '#e1e4ea',
    },
    secondary: {
      main: '#84848c'
    },
    text: {
      primary: "#000"
    }
  }
})
