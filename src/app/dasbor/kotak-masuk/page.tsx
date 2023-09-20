'use client'
import * as React from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, useMediaQuery, IconButton, List, styled, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import { CenterFocusStrong, MoveToInbox as InboxIcon, Mail as MailIcon, Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';
import Logo from '/public/xx.png';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import CustomizedMenus from '@/components/menu/page';

const drawerWidth = 240;
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
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');

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
    
    <div style={{ display:'flex' }} >
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
          <CustomizedMenus></CustomizedMenus>
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
       (
        <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      <Toolbar />
      <Box
        sx={{
          display: { xs: 'block', md: 'flex' },
          justifyContent: 'end',
          // border:1
        }}
      >
        <Box sx={{
          display: 'flex',
          border: 1,
          width: { xs: '100%', sm: '250px' },
          justifyContent: 'space-around',
          borderRadius: '10px',
          color: 'lightgrey',
          mr: { xs: 0, sm: '10px' },
          mb: { xs: '10px', sm: 0 },
        }}>
          <Box>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="h4" sx={{ paddingTop: 1, color: 'black' }}>0</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" style={{ color: 'black' }}>Total Pesan</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container justifyContent="start" alignItems="start" height="100%">
              <Grid item>
                <MessageIcon style={{ fontSize: 100, color: 'green' }} />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          border: 1,
          width: { xs: '100%', sm: '250px' },
          justifyContent: 'space-around',
          borderRadius: '10px',
          color: 'lightgrey',
          mr: { xs: 0, sm: '10px' },
          mb: { xs: '10px', sm: 0 },
        }}>
          <Box>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <Typography variant="h4" sx={{ paddingTop: 1, color: 'black' }}>0</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" style={{ color: 'black' }}>Pesan Baru</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container justifyContent="start" alignItems="start" height="100%">
              <Grid item>
                <EmailIcon style={{ fontSize: 100, color: 'green' }} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <br />
      {/* for(int i = 0; i< 3; i++) */}
      {Array.from({ length: 3 }).map((_, i) => (
        <Link key={i} href="/">
          <br />
          <Box
            sx={{
              border: 1,
              padding: 1,
              display: 'flex',
              borderRadius: '10px',
              borderColor: 'lightgrey',
              flexDirection: isSmallScreen ? 'column' : 'row',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                border: 0,
                width: isSmallScreen
                  ? '100%'
                  : isMediumScreen
                  ? '50%'
                  : '70%',
                justifyContent: 'space-evenly',
                marginBottom: isSmallScreen ? 1 : 0,
                marginRight: isSmallScreen
                  ? 0
                  : isMediumScreen
                  ? 1
                  : 0,
              }}
            >
              <EmailIcon
                style={{ fontSize: isSmallScreen ? 15 : 20, color: 'green' }}
              />
              <Typography sx={{ fontSize: isSmallScreen ? 12 : 15 }}>
                Surat Rekomendasi Pelatihan Kemahasiswaan UNIVERSITAS PENDIDIKAN INDONESIA
              </Typography>
            </Box>
            <Box
              sx={{
                border: 0,
                width: isSmallScreen
                  ? '100%'
                  : isMediumScreen
                  ? '50%'
                  : '30%',
                justifyContent: isSmallScreen ? 'flex-start' : 'flex-end',
                textAlign: isSmallScreen ? 'left' : 'right',
              }}
            >
              <Typography sx={{ fontSize: isSmallScreen ? 12 : 15 }}>
                07 Juni 2022, 09:35 PM
              </Typography>
            </Box>
          </Box>
        </Link>
      ))}
      {/* <Link href="/">
        <Box sx={{ border: 1, padding: 1, display: 'flex', borderRadius: '10px', borderColor: 'lightgrey',flexDirection: isSmallScreen ? 'column' : 'row',}}>
          <Box sx={{ display: 'flex', border: 0, width: isSmallScreen ? '100%' : isMediumScreen ? '50%' : '70%', justifyContent: 'space-evenly', marginBottom: isSmallScreen ? 1 : 0, marginRight: isSmallScreen ? 0 : isMediumScreen ? 1 : 0,}}>
            <EmailIcon style={{ fontSize: isSmallScreen ? 15 : 20, color: 'green' }} />
            <Typography sx={{ fontSize: isSmallScreen ? 12 : 15 }}>
              Surat Rekomendasi Pelatihan Kemahasiswaan UNIVERSITAS PENDIDIKAN INDONESIA
            </Typography>
          </Box>
          <Box sx={{ border: 0, width: isSmallScreen ? '100%' : isMediumScreen ? '50%' : '30%', justifyContent: isSmallScreen ? 'start' : 'end', textAlign: isSmallScreen ? 'start' : 'end',}}>
            <Typography sx={{ fontSize: isSmallScreen ? 12 : 15 }}>
              07 Juni 2022, 09:35 PM
            </Typography>
          </Box>
        </Box>
      </Link> */}
    </Box>
  </div>
  );
}