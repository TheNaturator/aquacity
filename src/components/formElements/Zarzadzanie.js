import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material'
import { FormBox } from '../FormBox'
import { useNavigate } from 'react-router-dom'
import { FormControlContext } from '../../context/FormControlContext'

export const Zarzadzanie = () => {
  const navigate = useNavigate()
  const { formMenuItems, setFormItemValue, checkIsValuesExist } = useContext(FormControlContext)
  const [stepData, setStepData] = useState(formMenuItems.zarzadzanie)

  useEffect(() => {
    // TODO: Get this name from URL
    setStepData(formMenuItems.zarzadzanie)
  }, [formMenuItems])

  if (!stepData) {
    return <CircularProgress />
  }

  return (
    <>
      <Typography variant='h4'>Czy teren jest zabudowany?</Typography>
      <Grid container spacing={2} mt={5}>
        <Grid item xs={4} onClick={() => setFormItemValue('zarzadzanie', stepData.options.prywatnie)}>
          <FormBox mainText='Prywatnie' isActive={stepData?.options?.prywatnie === stepData?.value} />
        </Grid>
        <Grid item xs={4} onClick={() => setFormItemValue('zarzadzanie', stepData.options.zpomoca)}>
          <FormBox mainText='Z Pomocą' isActive={stepData?.options?.zpomoca === stepData?.value} />
        </Grid>
      </Grid>
      <Box flexDirection='row' style={{ width: '20vw' }} justifyContent='space-evenly' sx={{ display: 'flex' }} mt={10}>
        <Button size='large' variant='outlined' onClick={() => navigate(stepData.prevUrl)}>
          WRÓĆ
        </Button>
        <Button variant='contained' size='large' onClick={() => navigate(stepData.nextUrl)} disabled={!checkIsValuesExist()}>
          DALEJ
        </Button>
      </Box>
    </>
  )
}
