import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './components/Main'
import { AquaForm } from './pages/AquaForm'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import FormControlContextProvider from './context/FormControlContext'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <FormControlContextProvider>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/aquaform' element={<AquaForm />} />
          </Routes>
        </FormControlContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
