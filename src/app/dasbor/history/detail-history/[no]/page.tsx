'use client'
import * as React from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, Paper, IconButton, List, styled, ListItem, ListItemButton, alpha, Grid, ListItemText, Toolbar, Typography, Button, CircularProgress } from '@mui/material';
import { CenterFocusStrong, MoveToInbox as InboxIcon, Mail as MailIcon, Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';
import Logo from '/public/xx.png';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import BasicTable from '@/components/table/page';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import BasicSelect from '@/components/select/page';
// import ZigzagTimeline from '../components/ZigzagTimeline';

import { LinearProgress } from '@mui/material';
import OutlinedTimeline from '@/components/timeline/page';
import ZigzagTimeline from '@/components/timeline/page';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const drawerWidth = 240;
const drawerwidth = 120;
const links = [
    {
      id: 1,
      title: "Beranda",
      url: "/dasbor",
    },
    {
      id: 2,
      title: "Profile",
      url: "/dasbor/profile",
    },
    {
      id: 3,
      title: "History",
      url: "/dasbor/history",
      
    },
    {
    id: 4,
    title: "Kotak Masuk",
    url: "/dasbor/kotak-masuk",
    },
  ];

  const timelineItems = [
    {
      title: 'Event 1',
      date: 'January 2023',
      content: 'Description of Event 1',
    },
    {
      title: 'Event 2',
      date: 'March 2023',
      content: 'Description of Event 2',
    },
    {
      title: 'Event 3',
      date: 'March 2023',
      content: 'Description of Event 2',
    },
    {
      title: 'Event 4',
      date: 'March 2023',
      content: 'Description of Event 2',
    },
    // ... add more timeline items
  ];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    // ===================> START SIDEBAR <===================
    <div>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Typography style={{ fontSize: '25px', fontWeight: 'bolder' }}>
            Sidebar Menu
        </Typography>
        </Toolbar>
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link href="/dasbor/form-pengajuan" passHref>
            <Button startIcon={<MailIcon />}>
                <Typography style={{ fontSize: '12px', color: 'black' }}>
                Buat Surat Rekomendasi
                </Typography>
            </Button>
          </Link>
        </div>
      <List>
        {links.map((link) => (
            <ListItem key={link.id} disablePadding>
            <ListItemButton component="a" href={link.url}>
                <ListItemText primary={link.title} />
            </ListItemButton>
            </ListItem>
        ))}
        </List>
    </div>
  );
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    // ===================> START APP BAR <===================
    
    <div style={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: 'white'
          }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: 'black', mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Image src="/xx.png" alt="My Image" width={70} height={30} />
            <Link href="/dasbor">
                <Typography style={{ color: 'black' }}>Profile</Typography>
            </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Box>
           detail history
           <ZigzagTimeline items={timelineItems} />
        </Box>
        <Box>
      </Box>
      </Box>
    </div>
  );
}


