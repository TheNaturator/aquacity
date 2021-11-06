import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './components/Main'
import { AquaForm } from './pages/AquaForm'
import { ThemeProvider } from '@mui/material'
import theme from './theme'
import FormControlContextProvider from './context/FormControlContext'
import { Zabudowa } from './components/formElements/Zabudowa'
import { Powierzchnia } from './components/formElements/Powierzchnia'
import { Cel } from './components/formElements/Cel'
import { Budzet } from './components/formElements/Budzet'
import { Zarzadzanie } from './components/formElements/Zarzadzanie'
import { Summary } from './pages/Summary'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <FormControlContextProvider>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='aquaform' element={<AquaForm />}>
              <Route path='zabudowa' element={<Zabudowa />} />
              <Route path='powierzchnia' element={<Powierzchnia />} />
              <Route path='cel' element={<Cel />} />
              <Route path='budzet' element={<Budzet />} />
              <Route path='zarzadzanie' element={<Zarzadzanie />} />
            </Route>
            <Route path='/podsumowanie' element={<Summary />} />
          </Routes>
        </FormControlContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
