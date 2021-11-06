import React, { useContext } from 'react'
import { PageLayout } from '../components/PageLayout'
import { Box, Container, Grid, Typography } from '@mui/material'
import { SummaryBox } from '../components/SummaryBox'
import { FormControlContext } from '../context/FormControlContext'

export const Summary = () => {
  const { getTextBasedOnValue } = useContext(FormControlContext)

  return (
    <PageLayout withoutMenu>
      <Container>
        <Typography variant='h4' mb={6}>Propozycje rozwiązań</Typography>
        <Box flexDirection='row' justifyContent='flex-start' sx={{ display: 'flex' }} style={{ width: '30vw' }} flexWrap='wrap'>
          <Typography mr={1}>
            Jeśli masz
          </Typography>
          <Typography fontWeight='bold' mr={1}>{getTextBasedOnValue('powierzchnia')}, {getTextBasedOnValue('zabudowa')},</Typography>
          <Typography mr={1}>
            budżet to
          </Typography>
          <Typography fontWeight='bold' mr={1}>{getTextBasedOnValue('budzet')} PLN i {getTextBasedOnValue('zarzadzanie')}</Typography>
          <Typography mr={1}>
            to najlepsze rozwiązania to:
          </Typography>
        </Box>
        <Grid container spacing={2} mt={5}>
          <Grid item xs={3}>
            <SummaryBox />
          </Grid>
          <Grid item xs={3}>
            <SummaryBox />
          </Grid>
        </Grid>
      </Container>
    </PageLayout>
  )
}
