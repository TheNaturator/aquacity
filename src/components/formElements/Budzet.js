import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, CircularProgress, Grid, Slider, Typography } from '@mui/material'
import { FormBox } from '../FormBox'
import { useNavigate } from 'react-router-dom'
import { FormControlContext } from '../../context/FormControlContext'

export const Budzet = () => {
  const navigate = useNavigate()
  const { formMenuItems, setFormItemValue } = useContext(FormControlContext)
  const [stepData, setStepData] = useState(formMenuItems.budzet)

  useEffect(() => {
    // TODO: Get this name from URL
    setStepData(formMenuItems.budzet)
  }, [formMenuItems])

  if (!stepData) {
    return <CircularProgress />
  }

  const marks = [
    {
      value: 0,
      label: '0 PLN'
    },
    {
      value: 100000,
      label: '100 000+ PLN'
    }
  ]

  return (
    <>
      <Typography variant='h4'>Jaki jest budżet inwestycji?</Typography>
      <Box container spacing={2} mt={5}>
        <Slider
          aria-label='BudgetSlider'
          value={formMenuItems.budzet.value}
          onChange={(event) => setFormItemValue('budzet', event.target.value)}
          step={10000}
          valueLabelDisplay='auto'
          marks={marks}
          max={100000}
        />
      </Box>
      <Box flexDirection='row' style={{ width: '20vw' }} justifyContent='space-evenly' sx={{ display: 'flex' }} mt={10}>
        <Button size='large' variant='outlined' onClick={() => navigate(stepData.prevUrl)}>
          WRÓĆ
        </Button>
        <Button variant='contained' size='large' onClick={() => navigate(stepData.nextUrl)} disabled={!stepData?.value}>
          DALEJ
        </Button>
      </Box>
    </>
  )
}
