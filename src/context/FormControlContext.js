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
    value: {
      retencja: false,
      stworzenie: false,
      niewidoczne: false,
      cena: false
    },
    url: '/aquaform/cel',
    prevUrl: '/aquaform/zabudowa',
    nextUrl: null,
    options: {
      retencja: 'retencja',
      stworzenie: 'stworzenie',
      niewidoczne: 'niewidocznea',
      cena: 'cena'
    }
  }
}

const FORM_CONTROL_VALUE = {
  formMenuItems: {},
  setFormItemValue: () => {},
  checkIfValueExistCel: () => {},
  setFormItemValueCel: () => {}
}

export const FormControlContext = createContext(FORM_CONTROL_VALUE)

const FormControlContextProvider = ({ children }) => {
  const [menuList, setMenuItem] = useState(initialMenuList)

  const setFormItemValue = (formItemName, newValue) => {
    const itemToChange = { ...menuList[formItemName], value: newValue }
    setMenuItem(prevState => { return { ...prevState, [formItemName]: itemToChange } })
  }

  const setFormItemValueCel = (valueName, newValue) => {
    const itemToChange = { ...menuList.cel, value: { ...menuList.cel.value, [valueName]: newValue } }
    setMenuItem(prevState => { return { ...prevState, cel: itemToChange } })
  }

  const checkIfValueExistCel = () => {
    return menuList?.cel.value.retencja || menuList?.cel.value.stworzenie || menuList?.cel.value.niewidoczne || menuList?.cel.value.cena
  }

  const initialFormControlContext = () => {
    return {
      formMenuItems: menuList,
      setFormItemValue,
      checkIfValueExistCel,
      setFormItemValueCel
    }
  }

  return <FormControlContext.Provider value={initialFormControlContext()}>{children}</FormControlContext.Provider>
}

export default FormControlContextProvider
