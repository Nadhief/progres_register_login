'use client'
import React, { useState, ChangeEvent } from 'react';
import { Box, IconButton, Typography, Divider, Grid, TextField, Button, Checkbox, Container, CardActions, Alert } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from 'next/link';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 24,
  p: 4,
  textAlign: 'justify',
   // Added textAlign to justify the text
};

const responsiveStyle = {
  '@media (max-width: 600px)': {
    width: '90vw', // Adjust width for smaller screens
  },
};


const Register = () => {
  // hadndler buat checkbox
  const [cbx, setCbx] = useState(false);
  console.log(cbx);

  const handleCbx = (event: ChangeEvent<HTMLInputElement>) => {
    setCbx(event.target.checked);
  };

  // handler buat modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // handler buat form register
  const [nip, setNip] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nosk, setNosk] = useState('');
  const [kemail, setkEmail] = useState('');
  const [kpassword, setkPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);


  const handleRegister = () => {
    if (
      nip.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      nosk.trim() === '' ||
      kemail.trim() === '' ||
      kpassword.trim() === ''
    ) {
      setShowAlert(true);
    } else {
      // Siapkan data yang akan dikirim ke server
      const formData = {
        nama_instansi: nip,
        email,
        userPassword: password,
        no_sk: nosk,
        setuju: cbx ? "1" : "0",
      };
  
      // Kirim permintaan POST ke server
      fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Terjadi kesalahan dalam memproses permintaan');
          }
          return response.json();
        })
        .then((data) => {
          // Handle respons dari server di sini
          console.log('Respons dari server:', data);
          window.location.href = '/api/auth/signin';
        })
        .catch((error) => {
          console.error('Terjadi kesalahan:', error);
          setShowAlert(true);
        });
    }
  };
  
  
  return (
    <div>
      {showAlert && (
          <Alert severity="error" sx={{ mt: 2 , textAlign:'center', justifyContent:'center'}}>
            Tolong isi form dengan benar.
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
              }}>
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
      {/* =====================> START FORM <=====================*/}
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
              fontSize: '3rem', 
              textAlign: 'start',
              paddingLeft: 2, 
              paddingBottom: 2.5,
              fontWeight: 500,
              paddingTop:3
              }}>
                Daftar
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Container maxWidth="sm">
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ padding:1}}> Nama Institusi / Perusahaan</Typography>
                  <TextField
                    id="outlined-basic"
                    label="Masukan Nama Institusi / Perusahaan"
                    variant="outlined"
                    size="small"
                    type="text"
                    value={nip}
                    onChange={(e) => setNip(e.target.value)}
                  />
                  <Typography sx={{ padding:1}}> Email</Typography>
                  <TextField
                    id="outlined-basic"
                    label="Masukan Email"
                    variant="outlined"
                    size="small"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Typography sx={{ padding:1}}> Password</Typography>
                  <TextField
                    id="outlined-basic"
                    label="Masukan Password"
                    variant="outlined"
                    size="small"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Box>
              </Container>
            </Grid>
            <Grid item xs={12} md={6}>
              <Container maxWidth="sm">
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ padding:1}}> Nomor SK</Typography>
                  <TextField 
                    id="outlined-basic"
                    label="Masukan Nomor SK Institusi / Perusahaan" 
                    variant="outlined" 
                    size="small" 
                    type="text"
                    value={nosk}
                    onChange={(e) => setNosk(e.target.value)}
                    />
                  <Typography sx={{ padding:1}}> Konfirmasi Email</Typography>
                  <TextField 
                    id="outlined-basic" 
                    label="Konfirmasi Email" 
                    variant="outlined" 
                    size="small" 
                    type="email"
                    value={kemail}
                    onChange={(e) => setkEmail(e.target.value)}
                    />
                  <Typography sx={{ padding:1}}> Konfirmasi Password</Typography>
                  <TextField 
                    id="outlined-basic" 
                    label="Konfirmasi Passoword" 
                    variant="outlined" 
                    size="small" 
                    type="password"
                    value={kpassword}
                    onChange={(e) => setkPassword(e.target.value)}
                    />
                </Box>
              </Container>
            </Grid>
          </Grid>
          <Container sx={{ paddingTop:2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Checkbox 
                color="success"
                onChange={handleCbx}
              />
              <Typography>Dengan melakukan registrasi saya menyatakan telah membaca dan menerima{' '} <Typography component="span" style={{ cursor: 'pointer', textDecoration:'underline' }} onClick={handleOpen}>Syarat dan Ketentuan</Typography> <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={{ ...style, ...responsiveStyle }}>
                    <Typography id="modal-modal-title" variant="h5" sx={{ textAlign:'center', paddingBottom: 4, paddingTop:2 }}>
                      Syarat dan Ketentuan
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 , mb: 2}}>
                    Dengan melakukan registrasi pada halaman ini, maka Saudara/i telah menyetujui dan mengizinkan penggunaan Dokumen Personal / Nomor ID Saudara/i untuk kepentingan Sharedvis Recruitment
                    </Typography>
                    <Divider />
                    <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
                    Dengan ini saya menyatakan akan bertanggung jawab penuh atas kebenaran data dan keabsahan data pendukung serta dokumen terkait lainnya dalam mengikuti proses sesuai yang ada pada website ini. Apabila ditemukan adanya ketidaksesuaian/pemalsuan atas informasi yang saya sampaikan, maka saya bersedia menerima konsekuensi sesuai ketentuan yang berlaku.
                    </Typography>
                    <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                      <Button variant="contained" color="success" onClick={handleClose}>
                        Tutup
                      </Button>
                    </div>
                  </Box>
                </Modal> yang berlaku
              </Typography>
                {/* <Link href="/"  style={{ textDecoration: 'underline' }}>ketentuan & persyaratan</Link>  */}
              {/* <FormControlLabel control={<Checkbox />} label=""/> */}
            </Box>
            <Box sx={{ textAlign:'center' }}>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button variant="contained" color="success" disabled={!cbx} onClick={handleRegister}>
                    Daftar
                  </Button>
                </CardActions>
            </Box>
            
          </Container>
        </Box>
    </div>
  )
}

export default Register
