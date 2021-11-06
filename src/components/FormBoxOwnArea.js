import React, { useState } from 'react'
import { Box, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const OwnAreaInput = ({ ownArea, setOwnAreaHandler }) => {
  return (
    <OutlinedInput
      key='ownArea'
      type='number'
      value={ownArea}
      onChange={(event) => setOwnAreaHandler(event)}
      endAdornment={<InputAdornment position='end'>m2</InputAdornment>}
      autoFocus
    />
  )
}

export const FormBoxOwnArea = ({ isActive, formBoxOwnAreaHandler }) => {
  const [ownArea, setOwnArea] = useState(undefined)

  const setOwnAreaHandler = (event) => {
    setOwnArea(event.target.value)
    formBoxOwnAreaHandler(event.target.value)
  }

  const StyledBox = styled(Box)(({ theme }) => `
    display: flex;
    flex-direction: column;
    background-color: ${theme.palette.common.white};
    border: 1px solid ${theme.palette.grey['300']};
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
    <StyledBox className={isActive ? 'active' : ''} key='ownArea-box'>
      <Typography fontSize={20}>Własne wymiary</Typography>
      <div>
        <OwnAreaInput ownArea={ownArea} setOwnAreaHandler={setOwnAreaHandler} />
      </div>
    </StyledBox>
  )
}
