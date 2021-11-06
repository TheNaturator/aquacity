import React from 'react'
import { Box, Container, Drawer, List, ListItem, ListItemText } from '@mui/material'
import { TopNav } from './TopNav'

const drawerWidth = 240

export const PageLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
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
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
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
