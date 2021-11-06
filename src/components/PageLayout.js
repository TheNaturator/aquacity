import React from 'react'
import { TopNav } from './TopNav'
import { Box, Container } from '@mui/material'

export const PageLayout = ({ children }) => {
  return (
    <>
      <TopNav />
      <Box mt={4} style={{ height: '80vh' }}>
        <Container>
          {children}
        </Container>
      </Box>
    </>
  )
}
