import * as React from 'react';
import { Paper,IconButton, TableRow, TableBody, Table, TableCell, TableContainer, TableHead, Modal, Box, FormControl, Select, InputLabel, MenuItem, TextField, Grid, Button, Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import SaveIcon from '@mui/icons-material/Save';
import ArticleIcon from '@mui/icons-material/Article';

import { ChangeEvent, useState } from 'react';
import { green } from '@mui/material/colors';

function createData(
  no: number,
  tangal: string,
  asalsurat: string,
  hal: string,
) {
  return { no, tangal, asalsurat, hal};
}

const rows = [
  createData(1, '29-09-2003', 'UNIVERSITAS PENDIDIKAN INDONESIA', 'PELATIHAN KEMAHASISWAAN'),
];

export default function BasicTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [statusSurvey, setStatusSurvey] = useState('');
  const [keterangan, setKeterangan] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleCloseModal2 = () => {
    setIsModalOpen2(false);
  };

  const handleSubmit = () => {
    console.log('oke gan');
    window.location.href = '/admin';
  }
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>No</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Tanggal</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Asal Surat</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Hal</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.no}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell align="center">{row.tangal}</TableCell>
              <TableCell align="center">{row.asalsurat}</TableCell>
              <TableCell align="center">{row.hal}</TableCell>
              <TableCell align="center" sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <IconButton color="primary" onClick={handleOpenModal}>
                  <SaveIcon />
                </IconButton>
                <IconButton color="secondary" onClick={handleOpenModal2}>
                  <ArticleIcon />
                </IconButton>
                <IconButton color="secondary" onClick={handleOpenModal2}>
                  <SaveAsIcon/>
                </IconButton>
                
                <Modal
                  open={isModalOpen}
                  onClose={handleCloseModal}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box sx={{ width: 400, bgcolor: 'white', p: 2, borderRadius: 2 }}> 
                    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: "20px" }}>
                      <h2>Modal Survey Lokasi</h2>
                    </div>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                      <Grid item xs={6}>
                        Status Survey
                      </Grid>
                      <Grid item xs={6}>
                      <Select
                        placeholder=''
                        value={statusSurvey}
                        onChange={(e) => setStatusSurvey(e.target.value)}
                        sx={{ width: 173 }}
                      >
                        <MenuItem value="pending">Tolak Surat</MenuItem>
                        <MenuItem value="completed">Setujui Lokasi</MenuItem>
                      </Select>
                      </Grid>
                      <Grid item xs={6}>
                        Keterangan
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Keterangan"
                          value={keterangan}
                          onChange={(e) => setKeterangan(e.target.value)}
                          multiline
                          rows={4}
                          variant="outlined"
                        />
                      </Grid>
                    </Grid>
                    <div style={{ display: 'flex', justifyContent: 'end', paddingTop:15 }}>
                    <Button 
                      color="success"  
                      variant="contained" 
                      onClick={() => {
                        console.log('oke gan');
                        window.location.href = '/admin/kotak-masuk'; // Kembali ke halaman sebelumnya
                      }}>
                      Simpan
                    </Button>
                    </div>
                  </Box>
                </Modal>

                <Modal
                  open={isModalOpen2}
                  onClose={handleCloseModal2}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box sx={{ width: 400, bgcolor: 'white', p: 2, borderRadius: 2 }}> 
                    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: "20px" }}>
                      <h3 style={{ paddingBottom:10 }}>Modal Balas Surat Rekomendasi</h3>
                    </div>
                    <div>
                    <Typography sx={{ paddingBottom:1 }}>
                        Upload Surat Rekomendasi
                      </Typography>
                      <TextField
                        id="outlined-basic-6"
                        label=""
                        variant="outlined"
                        size="small"
                        type="file"
                        sx={{
                          width: '100%',
                          maxWidth: { xs: 400, sm: 500 },
                        }}
                      />
                      <Typography sx={{ paddingBottom:1, paddingTop:2 }}>
                        Keterangan
                      </Typography>
                    <TextField
                          fullWidth
                          label="Keterangan"
                          value={keterangan}
                          onChange={(e) => setKeterangan(e.target.value)}
                          multiline
                          rows={4}
                          variant="outlined"
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end', paddingTop:15 }}>
                    <Button 
                      color="success"  
                      variant="contained" 
                      onClick={() => {
                        console.log('oke gan');
                        window.location.href = '/admin/kotak-masuk'; // Kembali ke halaman sebelumnya
                      }}>
                      Kirim
                    </Button>
                    </div>
                  </Box>
                </Modal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

