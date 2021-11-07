import React, { createContext, useEffect, useState } from 'react'

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
  },
  budzet: {
    label: 'Budżet',
    name: 'budzet',
    value: undefined,
    url: '/aquaform/budzet',
    prevUrl: '/aquaform/cel',
    nextUrl: '/aquaform/zarzadzanie'
  },
  zarzadzanie: {
    label: 'Zarządzanie',
    name: 'zarzadzanie',
    value: null,
    url: '/aquaform/zarzadzanie',
    prevUrl: '/aquaform/budzet',
    nextUrl: '/podsumowanie',
    options: {
      prywatnie: 'prywatnie',
      zpomoca: 'zpomoca'
    }
  }
}

const FORM_CONTROL_VALUE = {
  formMenuItems: {},
  setFormItemValue: () => {},
  checkIfValueExistCel: () => {},
  setFormItemValueCel: () => {},
  getTextBasedOnValue: () => {},
  checkIsValuesExist: () => {}
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

  const checkIsValuesExist = () => {
    return menuList?.powierzchnia.value && menuList?.zabudowa.value && checkIfValueExistCel() && menuList?.budzet.value && menuList?.zarzadzanie.value
  }

  const getTextBasedOnValue = (formItemName) => {
    const currentValue = menuList[formItemName].value
    // Boże co ja robię...
    // TODO: better texts
    if (formItemName === 'powierzchnia') {
      if (currentValue === 100) {
        return 'mniej niż 100m2'
      } else if (currentValue === 200) {
        return 'mniej niż 200m2'
      } else if (currentValue && (currentValue !== 100 && currentValue !== 200)) {
        return `${currentValue} m2`
      }
    } else if (formItemName === 'zabudowa') {
      if (currentValue === 'domy') {
        return 'domy'
      } else if (currentValue === 'blokowiska') {
        return 'blokowiska'
      } else if (currentValue === 'pustyTeren') {
        return 'pusty teren'
      }
    } else if (formItemName === 'zabudowa') {
      if (currentValue === 'domy') {
        return 'domy'
      } else if (currentValue === 'blokowiska') {
        return 'blokowiska'
      } else if (currentValue === 'pustyTeren') {
        return 'pusty teren'
      }
    } else if (formItemName === 'zarzadzanie') {
      if (currentValue === 'prywatnie') {
        return 'chcesz zarządzać instalacją'
      } else if (currentValue === 'zpomoca') {
        return 'nie chcesz zarządzać instalacją'
      }
    } else if (formItemName === 'budzet') return currentValue
  }

  // useEffect(() => {
  //   console.log('menuList', menuList.budzet)
  // }, [menuList])

  const initialFormControlContext = () => {
    return {
      formMenuItems: menuList,
      setFormItemValue,
      checkIfValueExistCel,
      setFormItemValueCel,
      getTextBasedOnValue,
      checkIsValuesExist
    }
  }

  return <FormControlContext.Provider value={initialFormControlContext()}>{children}</FormControlContext.Provider>
}

export default FormControlContextProvider
