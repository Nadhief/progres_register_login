import * as React from 'react';
import { Paper, Button, TableRow, TableBody, Table, TableCell, TableContainer, TableHead, Modal, Box, Typography, Divider, TextField} from '@mui/material';

function createData(
  no: number,
  np: string,
  email: string,
  tel: string,
  stat: string,
) {
  return { no, np, email, tel, stat};
}

const rows = [
  createData(1, 'Universitas Pendidikan Indonesia', 'nadhief@email.com', '0812345678' , 'Email terverifikasi'),
];

export default function BasicTable() {
  const [isModalOpenEdit, setModalOpenEdit] = React.useState(false);
  const [isModalOpenDelete, setModalOpenDelete] = React.useState(false);
  // Function to open modal
  const openModalEdit = () => {
    setModalOpenEdit(true);
  };
  // Function to close modal
  const closeModalEdit = () => {
    setModalOpenEdit(false);
  };
   // Function to open modal
   const openModalDelete = () => {
    setModalOpenDelete(true);
  };
  // Function to close modal
  const closeModalDelete = () => {
    setModalOpenDelete(false);
  };
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>No</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Nama Pengirim</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Email</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Telepon</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Status Akun</TableCell>
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
              <TableCell align="center">{row.np}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.tel}</TableCell>
              <TableCell align="center">
                <div>
                  {row.stat}
                </div>
              </TableCell>
              <TableCell align="center" sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Button variant="contained" onClick={openModalEdit} size="small" sx={{ backgroundColor: 'orange', textTransform: 'none' }}>
                  Edit
                </Button>
                <Button variant="contained" onClick={openModalDelete} size="small" sx={{ backgroundColor: 'red', textTransform: 'none' }}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            
          ))}
          <Modal
            open={isModalOpenEdit}
            onClose={closeModalEdit}
            aria-labelledby="edit-modal-title"
            aria-describedby="edit-modal-description"
          >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
              <Typography variant="h6" id="edit-modal-title">
                Edit Item
              </Typography>
              <Divider sx={{ my: 2 }} />
              <TextField label="Edit Field" fullWidth />
              <Button variant="contained" color='success' onClick={closeModalEdit} sx={{ mt: 2 }}>
                Simpan
              </Button>
            </Box>
          </Modal>
          <Modal
            open={isModalOpenDelete}
            onClose={closeModalDelete}
            aria-labelledby="delete-modal-title"
            aria-describedby="delete-modal-description"
          >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
              
                <Typography variant="h6" id="delete-modal-title" sx={{ textAlign: 'center' }}>
                  Yakin ingin menghapus pengguna ini?
                </Typography>
              
              <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingTop:20 }}>
                <Button variant="outlined" color='success' onClick={closeModalDelete} sx={{ mt: 2 }}>
                  kembali
                </Button>
                <Button variant="contained" color='success' onClick={closeModalDelete} sx={{ mt: 2 }}>
                  yes
                </Button>
              </div>
            </Box>
          </Modal>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

