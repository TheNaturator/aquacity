import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const FormBox = ({ isActive }) => {
  const StyledBox = styled(Box)(({ theme }) => `
    background-color: ${theme.palette.grey['300']};
    transition: opacity 0.3s ease;
    height: 300px;
    opacity: 0.5;
    border-radius: 16px;
    padding: 16px;
    :hover {
        opacity: 1;
        cursor: pointer;
    };
    &.active {
        opacity: 1;
    };
`)

  return (
    <StyledBox className={isActive ? 'active' : ''}>
      Debug
    </StyledBox>
  )
}
