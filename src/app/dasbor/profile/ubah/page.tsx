'use client'
import * as React from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, Paper, IconButton, List, styled, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText, Toolbar, Typography, Button, TextField  } from '@mui/material';
import { CenterFocusStrong, MoveToInbox as InboxIcon, Mail as MailIcon, Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';
import Logo from '/public/xx.png';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import panduanImage from '/public/profil.jpeg'; 
import CustomizedMenus from '@/components/menu/page';

const handleLogin = () => {
  // if (email.trim() === '' || password.trim() === '') {
  //   // setShowAlert(true);
  // } else {
  //   // Perform login logic here
  //   console.log('Logging in...');
  //   // setShowAlert(false);
  //   window.location.href = '/dasbor';
  // }
  window.location.href = '/dasbor/profile';
};
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
const linkss = [
  {
    id: 1,
    title: "Ubah Profile",
    url: "/dasbor/profile",
  },
  {
    id: 2,
    title: "Ubah Password",
    url: "/dasbor/profile/ubah",
  },
];
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
const drawerWidth = 240;
const drawerwidth = 120;
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
            display: 'flex',
            justifyContent:'space-evenly',
            flexDirection: {xs: 'column', md: 'column', lg: 'row' }, // Change to column on screens below 992px
          }}
        >
          <div style={{  justifyContent: 'center', alignItems: 'center' }}>
            <Image
              src={panduanImage}
              alt="Aplikasi"
              width={210}
              height={300}
              // layout="responsive"
            />
            <List>
              {linkss.map((link) => (
                <ListItem key={link.id} disablePadding>
                  <ListItemButton component="a" href={link.url}>
                    <ListItemText primary={link.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
          <div>
            <Typography sx={{ padding: 1 }}>Password Lama</Typography>
            <TextField
              id="outlined-basic-1"
              label="Masukan Password Lama"
              variant="outlined"
              size="small"
              type="password"
              sx={{
                width: '100%',
                maxWidth: { xs: 400, sm: 500 },
              }}
            />
            <Typography sx={{ padding: 1, paddingTop: 4 }}>Password Baru</Typography>
            <TextField
              id="outlined-basic-1"
              label="Masukan Password Baru"
              variant="outlined"
              size="small"
              type="password"
              sx={{
                width: '100%',
                maxWidth: { xs: 400, sm: 500 },
              }}
            />
            <Typography sx={{ padding: 1, paddingTop: 4 }}>Konfirmasi Password Baru</Typography>
            <TextField
              id="outlined-basic-1"
              label="Konfirmasi Password Baru"
              variant="outlined"
              size="small"
              type="password"
              sx={{
                width: '100%',
                maxWidth: { xs: 400, sm: 500 },
              }}
            />
            <Box sx={{ textAlign:'end', paddingTop: 5}}>
              <Button variant="contained" color="success" onClick={handleLogin}>
                Simpan
              </Button>
            </Box>
          </div>
        </Box>
    </Box>
    </div>
  );
}

