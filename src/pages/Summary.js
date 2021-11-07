import React, { useContext, useState } from 'react'
import { PageLayout } from '../components/PageLayout'
import { Box, Container, Grid, Typography } from '@mui/material'
import { SummaryBox } from '../components/SummaryBox'
import { FormControlContext } from '../context/FormControlContext'
import { SummaryModalOgrod } from '../components/SummaryModal'
import ogrodDeszczowyImage from '../images/ogrodDeszczowy.png'
import zbiornikImage from '../images/zbiornik.png'
import dachZielonyImage from '../images/dachZielony.png'

export const Summary = () => {
  const { getTextBasedOnValue } = useContext(FormControlContext)
  const [openModal, setOpenModal] = useState(false)

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
            <SummaryBox mainTitle='Ogród deszczowy' amount='od 2000 PLN' openModal={() => setOpenModal(true)} image={ogrodDeszczowyImage} />
          </Grid>
          <Grid item xs={3}>
            <SummaryBox mainTitle='Zbiornik na wodę opadową' amount='od 6000 PLN' openModal={() => setOpenModal(true)} image={zbiornikImage} />
          </Grid>
          <Grid item xs={3}>
            <SummaryBox mainTitle='Dach zielony' amount='od 6000 PLN' openModal={() => setOpenModal(true)} image={dachZielonyImage} />
          </Grid>
        </Grid>
      </Container>
      <SummaryModalOgrod open={openModal} handleClose={() => setOpenModal(false)} />
    </PageLayout>
  )
}
