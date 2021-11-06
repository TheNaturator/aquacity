import React from 'react'
import { Grid } from '@mui/material'
import { FormBox } from '../FormBox'

export const Cel = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormBox isActive />
        </Grid>
        <Grid item xs={4}>
          <FormBox />
        </Grid>
        <Grid item xs={4}>
          <FormBox />
        </Grid>
      </Grid>
    </>
  )
}
