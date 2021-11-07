import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material'
import { FormBox } from '../FormBox'
import { FormControlContext } from '../../context/FormControlContext'
import { useNavigate } from 'react-router-dom'
import { FormBoxOwnArea } from '../FormBoxOwnArea'
import podworkoImage from '../../images/podworko.png'
import parkImage from '../../images/park.png'

export const Powierzchnia = () => {
  const navigate = useNavigate()
  const { formMenuItems, setFormItemValue } = useContext(FormControlContext)
  const [stepData, setStepData] = useState(formMenuItems.powierzchnia)

  useEffect(() => {
    // TODO: Get this name from URL
    setStepData(formMenuItems.powierzchnia)
  }, [formMenuItems])

  if (!stepData) {
    return <CircularProgress />
  }

  const formBoxOwnAreaHandler = (ownArea) => {
    setFormItemValue('powierzchnia', ownArea)
  }

  return (
    <>
      <Typography variant='h4'>Wybierz jak duża jest powierzchnia</Typography>
      <Grid container spacing={2} mt={5}>
        <Grid item xs={4} onClick={() => setFormItemValue('powierzchnia', stepData.options.podworko)}>
          <FormBox mainText='Podwórko' subText='< 100 m2' isActive={stepData?.options?.podworko === stepData?.value} image={podworkoImage} />
        </Grid>
        <Grid item xs={4} onClick={() => setFormItemValue('powierzchnia', stepData.options.park)}>
          <FormBox mainText='Park' subText='200 m2 - 600 m2' isActive={stepData?.options?.park === stepData?.value} image={parkImage} />
        </Grid>
        <Grid item xs={4}>
          <FormBoxOwnArea
            formBoxOwnAreaHandler={formBoxOwnAreaHandler}
            isActive={stepData?.value && stepData?.options?.park !== Number(stepData?.value) &&
                          stepData?.options?.podworko !== Number(stepData?.value)}
          />
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
