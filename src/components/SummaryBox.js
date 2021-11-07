import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const SummaryBox = ({ mainTitle, amount, openModal, image }) => {
  const StyledBox = styled(Box)(({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.palette.grey['300']};
    background-image: url(${image});
    background-size: cover;
    background-position: center;
    transition: opacity 0.3s ease;
    height: 400px;
    border-radius: 16px;
    padding: 24px;
    :hover {
        opacity: 1;
        cursor: pointer;
    };
    &.active {
        opacity: 1;
    };
`)

  return (
    <StyledBox>
      <Box>
        <Typography variant='h6' fontWeight='bold' mb={2}>{mainTitle}</Typography>
        <Typography style={{ paddingBottom: '10px' }}>{amount}</Typography>
      </Box>
      <Box>
        <Button variant='contained' fullWidth style={{ marginBottom: '12px' }}>
          WYBIERZ
        </Button>
        <Button variant='outlined' fullWidth style={{ backgroundColor: 'white' }} onClick={openModal}>
          DOWIEDZ SIĘ WIĘCEJ
        </Button>
      </Box>
    </StyledBox>
  )
}
