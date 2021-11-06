import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material'
import { FormBox } from '../FormBox'
import { useNavigate } from 'react-router-dom'
import { FormControlContext } from '../../context/FormControlContext'

export const Zabudowa = () => {
  const navigate = useNavigate()
  const { formMenuItems, setFormItemValue } = useContext(FormControlContext)
  const [stepData, setStepData] = useState(formMenuItems.zabudowa)

  useEffect(() => {
    // TODO: Get this name from URL
    setStepData(formMenuItems.zabudowa)
  }, [formMenuItems])

  if (!stepData) {
    return <CircularProgress />
  }

  return (
    <>
      <Typography variant='h4'>Czy teren jest zabudowany?</Typography>
      <Grid container spacing={2} mt={5}>
        <Grid item xs={4} onClick={() => setFormItemValue('zabudowa', stepData.options.domy)}>
          <FormBox mainText='Domy' isActive={stepData?.options?.domy === stepData?.value} />
        </Grid>
        <Grid item xs={4} onClick={() => setFormItemValue('zabudowa', stepData.options.blokowiska)}>
          <FormBox mainText='Blokowiska' isActive={stepData?.options?.blokowiska === stepData?.value} />
        </Grid>
        <Grid item xs={4} onClick={() => setFormItemValue('zabudowa', stepData.options.pustyTeren)}>
          <FormBox mainText='Pusty Teren' isActive={stepData?.options?.pustyTeren === stepData?.value} />
        </Grid>
      </Grid>
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
