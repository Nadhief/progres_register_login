'use client'
import React, { useState } from 'react';
import { Box, IconButton, Typography, Card, Grid, TextField, Button, CardActions, CardContent, Alert } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from 'next/link';
import Image from 'next/image';
import { sign } from 'crypto';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const Masuk = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  
  const router = useRouter();

  const handleLogin = async () => {
      const signInData = await signIn ('credentials', {
        email: email,
        password: password,
        redirect: false,
      });

      if (signInData?.error) {
        console.log(signInData.error);
        setShowAlert(true);
      }else{
        router.push('/dashboards');
        setShowAlert(false);
      }
    
  };

  return (
    <div>
      {showAlert && (
          <Alert severity="error" sx={{ mt: 2 , textAlign:'center', justifyContent:'center'}}>
            Please enter your email and password.
          </Alert>
        )}
      {/* =====================> START BACK BUTTON <=====================*/}
      <Box maxWidth="md">
        <Box display="flex" alignItems="center" sx={{ paddingTop: 5 }}>
          <Box
            sx={{
              backgroundColor: '#ffffff',
              padding: '1px',
              textAlign: 'center',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
          >
            <Link href="/" passHref>
              <Box>
                <IconButton>
                  <KeyboardArrowLeftIcon />
                </IconButton>
              </Box>
            </Link>
          </Box>
          <Box ml={1}>
            <Typography sx={{ color: 'grey' }}>Sebelumnya</Typography>
            <Typography>Homepage</Typography>
          </Box>
        </Box>
      </Box>
      {/* =====================> START FORM LOGIN <=====================*/}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ border: '1px solid #ccc', height: '500px', width: '781px' }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                  <Image src="/xx.png" alt="My Image" width={200} height={100} />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography sx={{ mb: 1.5, paddingTop: 1, textAlign: 'start' }} color="text.secondary">
                    Email
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Masukan Email"
                    variant="outlined"
                    type="email"
                    sx={{ width: '75%', mb: 1.5 }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Typography sx={{ mb: 1.5, textAlign: 'start' }} color="text.secondary">
                    Password
                  </Typography>
                  <TextField
                    id="outlined-basic"
                    label="Masukan Password"
                    variant="outlined"
                    type="password"
                    sx={{ width: '75%', mb: 1.5 }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <CardActions sx={{ justifyContent: 'end' }}>
                    <Link href="/">
                      <Typography sx={{ textDecoration: 'underline' }} color="primary">
                        Lupa Password?
                      </Typography>
                    </Link>
                  </CardActions>
                  <CardActions sx={{ justifyContent: 'center' }}>
                    
                      <Button variant="contained" color="success" onClick={handleLogin}>
                        Login
                      </Button>
                    
                  </CardActions>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Masuk;

