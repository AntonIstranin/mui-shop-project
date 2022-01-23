import { ShoppingBasket } from '@mui/icons-material'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { typography } from '@mui/system'
import React from 'react'

function Header() {
  return (
    <AppBar>
      <Toolbar>
          <Typography>
              Skillfond Store 
          </Typography>
          <IconButton>
              <ShoppingBasket />
          </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
