import React, { useContext } from 'react'
import { TopNav } from './TopNav'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { FormControlContext } from '../context/FormControlContext'

export const Menu = () => {
  const { formMenuItems } = useContext(FormControlContext)

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
        {formMenuItems.map((item, index) => (
          <ListItem button key={item.label}>
            {item.value
              ? <ListItemIcon><CheckCircleIcon color='success' fontSize='small' /></ListItemIcon>
              : <Typography mr={5}>{index + 1} </Typography>}
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
