import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './MenuBar.css';

const MenuBar = () => {
  return (
    <AppBar position="static" className="menu-bar">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box sx={{ cursor: 'pointer' }} onClick={() => console.log('About clicked')}>
            About
          </Box>
        </Typography>
        <Button color="inherit" onClick={() => console.log('Learn More clicked')}>
          Learn More
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
