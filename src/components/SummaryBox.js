import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const SummaryBox = () => {
  const StyledBox = styled(Box)(({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: ${theme.palette.grey['300']};
    transition: opacity 0.3s ease;
    height: 300px;
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
      <Typography style={{ paddingBottom: '10px' }}>SummaryBox</Typography>
      <Typography fontWeight='bold'>SummaryBox</Typography>
    </StyledBox>
  )
}
