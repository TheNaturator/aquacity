import React, { createContext, useState } from 'react'

const initialMenuList = {
  powierzchnia: {
    label: 'Powierzchnia',
    name: 'powierzchnia',
    value: null,
    url: '/aquaform/powierzchnia',
    // TODO: Change for dynamics URLs
    prevUrl: '/',
    nextUrl: '/aquaform/zabudowa',
    options: {
      podworko: 100,
      park: 200,
      ownArea: null
    }
  },
  zabudowa: {
    label: 'Zabudowa',
    name: 'zabudowa',
    value: null,
    url: '/aquaform/zabudowa',
    prevUrl: '/aquaform/powierzchnia',
    nextUrl: '/aquaform/cel',
    options: {
      domy: 'domy',
      blokowiska: 'blokowiska',
      pustyTeren: 'pustyTeren'
    }
  },
  cel: {
    label: 'Cel',
    name: 'cel',
    value: null,
    url: '/aquaform/cel',
    prevUrl: '/aquaform/zabudowa',
    nextUrl: null
  }
}

const FORM_CONTROL_VALUE = {
  formMenuItems: {},
  setFormItemValue: () => {}
}

export const FormControlContext = createContext(FORM_CONTROL_VALUE)

const FormControlContextProvider = ({ children }) => {
  const [menuList, setMenuItem] = useState(initialMenuList)

  const setFormItemValue = (formItemName, newValue) => {
    const itemToChange = { ...menuList[formItemName], value: newValue }
    setMenuItem(prevState => { return { ...prevState, [formItemName]: itemToChange } })
  }

  const initialFormControlContext = () => {
    return {
      formMenuItems: menuList,
      setFormItemValue
    }
  }

  return <FormControlContext.Provider value={initialFormControlContext()}>{children}</FormControlContext.Provider>
}

export default FormControlContextProvider
