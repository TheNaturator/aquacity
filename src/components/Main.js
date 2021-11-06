import React from 'react'
import { Button, Typography } from '@mui/material'
import { PageLayout } from './PageLayout'

export const Main = () => {
  return (
    <PageLayout>
      <Typography variant='h3' mb={3}>
        Zwiększ retencje w swoim mieście
      </Typography>

      <Typography variant='h5' mb={10}>
        Zaadoptuj swoje miasto do zmienającego się klimatu
      </Typography>

      <Button variant='contained'>
        PRZEJDŹ DO APLIKACJI
      </Button>
    </PageLayout>
  )
}
