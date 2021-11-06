import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './components/Main'
import { AquaForm } from './pages/AquaForm'
import { ThemeProvider } from '@mui/material'
import theme from './theme'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/aquaform' element={<AquaForm />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
