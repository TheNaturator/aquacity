import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { Grid } from '@mui/material'
import { FormBox } from '../components/FormBox'

export const AquaForm = () => {
  return (
    <PageLayout>
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
    </PageLayout>
  )
}
