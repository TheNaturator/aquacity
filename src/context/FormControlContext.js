import React, { createContext } from 'react'

const menuList = [
  {
    label: 'Powierzchnia',
    name: 'powierzchnia',
    value: null,
    url: '/powierzchnia'
  },
  {
    label: 'Zabudowa',
    name: 'zabudowa',
    value: null,
    url: '/zabudowa'
  },
  {
    label: 'Cel',
    name: 'cel',
    value: null,
    url: '/zabudowa'
  }
]

const FORM_CONTROL_VALUE = {
  formMenuItems: {}
}

export const FormControlContext = createContext(FORM_CONTROL_VALUE)

const FormControlContextProvider = ({ children }) => {
  const initialFormControlContext = () => {
    return {
      formMenuItems: menuList
    }
  }

  return <FormControlContext.Provider value={initialFormControlContext()}>{children}</FormControlContext.Provider>
}

export default FormControlContextProvider
