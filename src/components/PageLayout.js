import React from 'react'
import { Box, Container } from '@mui/material'
import { Menu } from './Menu'

export const PageLayout = ({ children, withoutMenu }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {!withoutMenu && <Menu />}
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
