import React from 'react'
import { Outlet } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { Container } from '@mui/material'

export const AquaForm = () => {
  return (
    <PageLayout>
      <Container>
        <Outlet />
      </Container>
    </PageLayout>
  )
}
