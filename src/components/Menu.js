import React, { useContext } from 'react'
import { TopNav } from './TopNav'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { FormControlContext } from '../context/FormControlContext'
import { useNavigate } from 'react-router-dom'

export const Menu = () => {
  const { formMenuItems, checkIfValueExistCel } = useContext(FormControlContext)
  const navigate = useNavigate()

  const drawerWidth = 240

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
      variant='permanent'
      anchor='left'
    >
      <TopNav />
      <List>
        {Object.keys(formMenuItems).map((item, index) => (
          <ListItem button key={formMenuItems[item].label} onClick={() => navigate(formMenuItems[item].url)}>
            {formMenuItems[item].name === 'cel'
              ? checkIfValueExistCel()
                ? <ListItemIcon><CheckCircleIcon color='success' fontSize='small' /></ListItemIcon>
                : <Typography mr={5}>{index + 1} </Typography>
              : formMenuItems[item].value
                ? <ListItemIcon><CheckCircleIcon color='success' fontSize='small' /></ListItemIcon>
                : <Typography mr={5}>{index + 1} </Typography>}
            <ListItemText primary={formMenuItems[item].label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
