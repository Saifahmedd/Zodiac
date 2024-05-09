import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Tooltip, Menu, Avatar, MenuItem, ListItemButton, Stack, styled, Paper } from '@mui/material';
import { AccessTime, AccountCircle, Bloodtype, Category, Checkroom, Edit, EventNote, ExpandLess, ExpandMore, Fastfood, Groups, Home, Mail, Masks, MenuBook, School, Toys, Vaccines, FavoriteBorder } from '@mui/icons-material';
import Logo from 'logo.jpeg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const settings = ['Change Password', 'Logout'];
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
  export default function AdminProfile() {
    return (
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Item>Name : Saif</Item>
          <Item>Email : Saif.Ali@gmail.com</Item>
          <Item>Mobile Number : 01008769261 </Item>
        </Stack>
      </Box>
    );
  }






