import Image from 'next/image';
import { Box, Typography, Grid } from '@mui/material';

import heroImage from '/public/hero.png';
import panduanImage from '/public/illustration.png';

import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
          <div>
            <Navbar/>
  {/*==============>> START TENTANG APLIKASI <<==============*/}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 0,
                paddingBottom: 5
                }}>
              <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: '600' }}>
                Tentang Aplikasi
              </Typography>
            </Box>
            <Box 
              sx={{ 
                margin: '0 auto',
                maxWidth: '900px', 
                border: '1px solid #ccc', 
                borderRadius: '8px' 
                }}>
              <Typography variant="h4" component="h4" 
                sx={{ 
                  fontSize: '1.5rem', 
                  textAlign: 'start',
                  paddingLeft: 2, 
                  paddingBottom: 2.5
                  }}>
                    Aplikasi Surat Rekomendasi
              </Typography>
              <Typography variant="h4" component="h4" 
                sx={{ 
                  fontSize: '1.2rem', 
                  textAlign: 'start',
                  paddingLeft: 0.5, 
                  color: 'green'
                  }}>
                    What is Lorem Ipsum?
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ backgroundColor: '#ffffff',    padding: '5px',
                  textAlign: 'center'}}>
                    <Typography sx={{ fontSize: '1rem', textAlign: 'justify'}}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ backgroundColor: '#ffffff', padding: '5px',
                  textAlign: 'center' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Image
                    src={heroImage} // Replace with your image path
                    alt="Aplikasi"
                    width={300}
                    height={260}
                    // layout="responsive"
                  />
                </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
  {/*==============>> START STATISTIK <<==============*/}
            <Typography
              variant="h5"
              sx={{ 
                textAlign: 'center', 
                fontWeight: '600',
                paddingTop: 5 
              }}>
              Statistik
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ 
                textAlign: 'center', 
                fontWeight: '500', 
                paddingBottom: 5 
              }}>
              Aplikasi Pembuatan Surat Rekomendasi
            </Typography>
            <Box sx={{ margin: '0 auto', maxWidth: '800px'}}>
              <Grid container spacing={2} columns={16} justifyContent='space-evenly'>
                <Grid item xs={12} md={6} lg={3}>
                  <Box
                    sx={{
                      border: '1px solid grey',
                      borderRadius: '8px',
                      p: 2,
                      textAlign: 'center',
                    }}>
                    <Typography
                      variant="h1"
                      sx={{
                        color: 'green',
                        fontSize: { xs: '70px', sm: '70px', md: '70px' },
                        fontWeight: '500',
                      }}>
                      30
                    </Typography>
                    <Typography variant="body1">Rekomendasi yang telah diterbitkan</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Box
                    sx={{
                      border: '1px solid grey',
                      borderRadius: '8px',
                      p: 2,
                      textAlign: 'center',
                    }}>
                    <Typography
                      variant="h1"
                      sx={{
                        color: 'green',
                        fontSize: { xs: '70px', sm: '70px', md: '70px' },
                        fontWeight: '500',
                      }}>
                      10
                    </Typography>
                    <Typography variant="body1">Surat rekomendasi yang ditolak</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Box
                    sx={{
                      border: '1px solid grey',
                      borderRadius: '8px',
                      p: 2,
                      textAlign: 'center',
                    }}>
                    <Typography
                      variant="h1"
                      sx={{
                        color: 'green',
                        fontSize: { xs: '70px', sm: '70px', md: '70px' },
                        fontWeight: '500',
                      }}>
                      60
                    </Typography>
                    <Typography variant="body1">Statistik dalam proses Pemeriksaan</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                  <Box
                    sx={{
                      border: '1px solid grey',
                      borderRadius: '8px',
                      p: 2,
                      textAlign: 'center',
                    }}>
                    <Typography
                      variant="h1"
                      sx={{
                        color: 'green',
                        fontSize: { xs: '70px', sm: '70px', md: '70px' },
                        fontWeight: '500',
                      }}>
                      100
                    </Typography>
                    <Typography variant="body1">Jumlah surat yang diajukan</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
  {/*==============>> START PANDUAN <<==============*/}
            <Typography
              variant="h5"
              sx={{ 
                textAlign: 'center', 
                fontWeight: '600', 
                paddingTop: 5, 
                paddingBottom:5 
              }}>
                Panduan
            </Typography>
            <Box sx={{ margin: '0 auto', maxWidth: '800px' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ backgroundColor: '#ffffff',    padding: '5px'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Image
                        src={panduanImage} // Replace with your image path
                        alt="Aplikasi"
                        width={270}
                        height={350}
                        // layout="responsive"
                      />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ backgroundColor: '#ffffff', padding: '5px'}}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Image
                        src={panduanImage} // Replace with your image path
                        alt="Aplikasi"
                        width={270}
                        height={350}
                        // layout="responsive"
                      />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
  {/*==============>> START FAQ <<==============*/}
            <Typography
              variant="h5"
              sx={{ textAlign: 'center', fontWeight: '600', paddingTop: 5, paddingBottom: 5 }}>
                FAQ
            </Typography>
            <Box sx={{ margin: '0 auto', maxWidth: '800px' }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ backgroundColor: '#ffffff', padding: '5px', textAlign: 'center' }}>
                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.2rem', textAlign: 'start', paddingLeft: 0.5, color: 'green' }}>
                      What is Lorem Ipsum?
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', textAlign: 'justify' }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ backgroundColor: '#ffffff', padding: '5px', textAlign: 'center' }}>
                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.2rem', textAlign: 'start', paddingLeft: 0.5, color: 'green' }}>
                      What is Lorem Ipsum?
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', textAlign: 'justify' }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ backgroundColor: '#ffffff', padding: '5px', textAlign: 'center' }}>
                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.2rem', textAlign: 'start', paddingLeft: 0.5, color: 'green' }}>
                      What is Lorem Ipsum?
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', textAlign: 'justify' }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ backgroundColor: '#ffffff', padding: '5px', textAlign: 'center' }}>
                    <Typography variant="h4" component="h4" sx={{ fontSize: '1.2rem', textAlign: 'start', paddingLeft: 0.5, color: 'green' }}>
                      What is Lorem Ipsum?
                    </Typography>
                    <Typography sx={{ fontSize: '1rem', textAlign: 'justify' }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Footer/>
          </div>
      );
}
