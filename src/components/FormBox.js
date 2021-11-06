import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const FormBox = ({ isActive, mainText, subText }) => {
  const StyledBox = styled(Box)(({ theme }) => `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: ${theme.palette.grey['300']};
    transition: opacity 0.3s ease;
    height: 300px;
    opacity: 0.5;
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
    <StyledBox className={isActive ? 'active' : ''}>
      <Typography style={{ paddingBottom: '10px' }}>{subText}</Typography>
      <Typography fontWeight='bold'>{mainText}</Typography>
    </StyledBox>
  )
}
