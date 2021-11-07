import React from 'react'
import { Box, Button, Grid, ListItem, ListItemText, List, Modal, Typography } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export const SummaryModalOgrod = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography id='modal-modal-title' variant='h4' fontWeight='bold' component='h2'>
          Ogród deszczowy
        </Typography>
        <Box flexDirection='column' justifyContent='space-between' sx={{ display: 'flex', height: '80%' }}>
          <Grid container spacing={3} mt={2}>
            <Grid item xs={8}>
              <Typography id='modal-modal-description'>
                Ogród deszczowy to połączenie estetyki i funkcjonalności. Z jednej strony jest on formą zielonej dekoracji ogrodowej, z drugiej zaś wywiera pozytywny wpływ pod względem ekologicznym. Ogrody deszczowe:
                -poprawiają jakość odprowadzanych wód opadowych z okolicy.
                -Zgromadzona woda deszczowa może być wykorzystywana do nawadniania zieleni, co pozwala obniżyć koszty utrzymania terenów zielonych w mieście.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography fontWeight='bold' color='#41A33F'>
                Korzystnie wpływa
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary='1. Obecnosć gruntów przepuszczalnych'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='2. Zabudowa zwarta'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='3. Zabudowa rozproszona'
                  />
                </ListItem>
              </List>
              <Typography fontWeight='bold' color='#B81C1C'>
                Niekorzystnie wpływa
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary='1. Obecność gruntów nieprzepuszczalnych'
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Box>
            <Button variant='contained' style={{ marginRight: '20px', width: '200px' }}>
              Wybierz
            </Button>
            <Button variant='outlined' onClick={handleClose}>
              Zamknij
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}
