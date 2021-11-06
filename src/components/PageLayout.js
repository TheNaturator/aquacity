import React from 'react'
import { Box, Container } from '@mui/material'
import { Menu } from './Menu'

export const PageLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Menu />
      <Box
        component='main'
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} mt={4} style={{ height: '80vh' }}
      >
        <Container>
          {children}
        </Container>
      </Box>
    </Box>
  )
}
