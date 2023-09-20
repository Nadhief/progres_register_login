'use client'
import React, { useState, ChangeEvent } from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, Container, IconButton, List, CardActions, ListItem, ListItemButton, Checkbox, Grid, ListItemText, Toolbar, Typography, Button, TextField  } from '@mui/material';
import { CenterFocusStrong, MoveToInbox as InboxIcon, Mail as MailIcon, Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import GoogleReCaptcha from 'react-google-recaptcha';
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
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
const drawerWidth = 240;
export default function ResponsiveDrawer(props: Props) {
  const [cbx, setCbx] = useState(false);
  console.log(cbx);

  const handleCbx = (event: ChangeEvent<HTMLInputElement>) => {
    setCbx(event.target.checked);
  };
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
        <Button startIcon={<MailIcon />}>
            <Typography style={{ fontSize: '12px', color: 'black' }}>
            Buat Surat Rekomendasi
            </Typography>
        </Button>
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
  const [captchaResponse, setCaptchaResponse] = useState('');
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
            margin: '0 auto',
            maxWidth: '900px', 
            // border: '1px solid #ccc', 
            // borderRadius: '8px',
            justifyContent:'space-between' 
            }}>
          <Typography variant="h4" component="h4" 
            sx={{ 
              fontSize: '20px', 
              textAlign: 'start', 
              paddingBottom: 2.5,
              fontWeight: 700,
              paddingTop:3
              }}>
                Form Pengajuan Surat Rekomendasi
          </Typography>
          <Grid container spacing={2} sx={{ border:1 , borderRadius: '10px', color:'lightgrey'}}>
            <Grid item xs={12} md={6}>
              <Container maxWidth="sm">
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ padding:1, color: 'black'}}> Tanggal Pencatatan</Typography>
                  <TextField
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    size="small"
                    type="date"
                  />
                  <Typography sx={{ padding:1, color: 'black'}}> Tanggal Naskah</Typography>
                  <TextField
                    id="outlined-basic"
                    label=""
                    variant="outlined"
                    size="small"
                    type="date"
                  />
                  <Typography sx={{ padding:1, color: 'black'}}> Nomor Naskah</Typography>
                  <TextField
                    id="outlined-basic"
                    label="Nomor Naskah"
                    variant="outlined"
                    size="small"
                    type="text"
                  />
                  <Typography sx={{ padding:1, color: 'black'}}> Hal </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Hal Surat Pengajuan"
                    variant="outlined"
                    size="small"
                    type="text"
                    sx={{ paddingBottom:5 }}
                  />
                </Box>
              </Container>
            </Grid>
            <Grid item xs={12} md={6}>
              <Container maxWidth="sm">
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ padding:1, color: 'black'}}> Upload Surat Pengajuan</Typography>
                  <TextField id="outlined-basic" label="" variant="outlined" size="small" type="file"/>
                  <Typography sx={{ padding:1, color: 'black'}}> Kontrak Pengirim</Typography>  
                  <TextField id="outlined-basic" label="" variant="outlined" size="small" type="text"/>
                  <Typography sx={{ padding: 1, color: 'black' }}>Captcha</Typography>
                  {/* <GoogleReCaptcha
                    sitekey="your-recaptcha-site-key"
                    // onChange={(response: string) => setCaptchaResponse(response)}
                  /> */}
                </Box>
                <Box sx={{ textAlign:'end', paddingTop: 5}}>
            <Button variant="contained" color="success" onClick={handleLogin}>
              Simpan
            </Button>
          </Box>
              </Container>
            </Grid>
          </Grid> 
        </Box>
    </Box>
    </div>
  );
}

