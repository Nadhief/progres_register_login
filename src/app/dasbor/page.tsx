'use client'
import * as React from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, Paper, IconButton, List, styled, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText, Toolbar, Typography, Button } from '@mui/material';
import { CenterFocusStrong, MoveToInbox as InboxIcon, Mail as MailIcon, Menu as MenuIcon } from '@mui/icons-material';
import Link from 'next/link';
import Logo from '/public/xx.png';
import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import Footer from '@/components/footer/Footer';
import CustomizedMenus from '@/components/menu/page';
// import ButtonLo from '@/components/buttonLo/page';

const drawerWidth = 240;
const drawerwidth = 120;
const links = [
    {
      id: 1,
      title: "Beranda",
      url: "/dashboards",
    },
    {
      id: 2,
      title: "Profile",
      url: "/dashboards/profilee",
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

export default function ResponsiveDrawer(props: Props & { session: any }) {
  // const { window } = props;
  const { window, session } = props;
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
          <CustomizedMenus session={session}></CustomizedMenus>
          {/* <ButtonLo></ButtonLo> */}
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
            <Box sx={{ display: 'flex', border:1, width:'250px', justifyContent:'space-around' , borderRadius: '10px', color:'lightgrey' }}>
                <Box>
                    <Grid item sm={4}>
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <Typography variant="h4" sx={{ paddingTop: 1 }} style={{ color:'black' }}>0</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" style={{ color:'black' }}>Pesan Baru</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid item sm={4}>
                        <Grid container justifyContent="start" alignItems="start" height="100%">
                            <Grid item>
                                <EmailIcon style={{ fontSize: 100, color: 'green' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
      </Box>
    </div>
  );
}