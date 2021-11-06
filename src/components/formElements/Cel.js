import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, Checkbox, CircularProgress, FormControlLabel, FormGroup, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FormControlContext } from '../../context/FormControlContext'

export const Cel = () => {
  const navigate = useNavigate()
  const { formMenuItems, setFormItemValue, checkIfValueExistCel, setFormItemValueCel } = useContext(FormControlContext)
  const [stepData, setStepData] = useState(formMenuItems.cel)

  useEffect(() => {
    // TODO: Get this name from URL
    setStepData(formMenuItems.cel)
  }, [formMenuItems])

  if (!stepData) {
    return <CircularProgress />
  }

  const setFormItemValueCelHandler = (event, checkboxName) => {
    setFormItemValueCel(checkboxName, !stepData.value[checkboxName])
  }

  return (
    <>
      <Typography variant='h4'>Jakie są cele inwestycji?</Typography>
      <Box container spacing={2} mt={5}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox
              checked={stepData.value.retencja}
              onChange={(event) => setFormItemValueCelHandler(event, 'retencja')}
                     />}
            label='Retencja wody'
          />
          <FormControlLabel control={<Checkbox checked={stepData.value.stworzenie} onChange={(event) => setFormItemValueCelHandler(event, 'stworzenie')} />} label='Stworzenie przestrzeni dla mieszkańców' />
          <FormControlLabel control={<Checkbox checked={stepData.value.niewidoczne} onChange={(event) => setFormItemValueCelHandler(event, 'niewidoczne')} />} label='Niewidoczne rozwiązania' />
          <FormControlLabel control={<Checkbox checked={stepData.value.cena} onChange={(event) => setFormItemValueCelHandler(event, 'cena')} />} label='Cena / Jakość' />
        </FormGroup>
      </Box>
      <Box flexDirection='row' style={{ width: '20vw' }} justifyContent='space-evenly' sx={{ display: 'flex' }} mt={10}>
        <Button size='large' variant='outlined' onClick={() => navigate(stepData.prevUrl)}>
          WRÓĆ
        </Button>
        <Button variant='contained' size='large' onClick={() => navigate(stepData.nextUrl)} disabled={!checkIfValueExistCel()}>
          DALEJ
        </Button>
      </Box>
    </>
  )
}
