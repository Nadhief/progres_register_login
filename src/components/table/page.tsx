import * as React from 'react';
import { Paper, Button, TableRow, TableBody, Table, TableCell, TableContainer, TableHead, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'

function createData(
  no: number,
  np: string,
  hal: string,
  stat: string,
  aksi: string,
) {
  return { no, np, hal, stat, aksi };
}

const rows = [
  createData(1, 'Universitas Pendidikan Indonesia', 'Pengajuan Surat Rekomendasi Pelatihan Kemahasiswaan', 'Sedang diproses', "klik"),
  createData(2, 'Universitas Pendidikan Indonesia', 'Pengajuan Surat Rekomendasi Pelatihan Kemahasiswaan', 'Terverifikasi', "klik"),
  createData(3, 'Universitas Pendidikan Indonesia', 'Pengajuan Surat Rekomendasi Pelatihan Kemahasiswaan', 'Ditolak', "klik"),
];

export default function BasicTable() {
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>No</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Nama Pengirim</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Hal</TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Status Verifikasi</TableCell>
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
              <TableCell align="center">{row.hal}</TableCell>
              <TableCell align="center">
                <div
                  style={{
                    // backgroundColor: 'rgba(255, 208, 38, 0.2)', // Orange background with 20% opacity
                    backgroundColor:
                      row.stat === 'Sedang diproses'
                        ? 'rgba(255, 208, 38, 0.2)' // Orange background with 20% opacity
                        : row.stat === 'Terverifikasi'
                        ? 'rgba(0, 128, 0, 0.2)' // Green background with 20% opacity
                        : 'rgba(255, 0, 0, 0.2)', // Red background with 20% opacity
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color:
                      row.stat === 'Sedang diproses'
                        ? 'rgba(255, 208, 38, 1)' // Orange background with 20% opacity
                        : row.stat === 'Terverifikasi'
                        ? 'rgba(0, 128, 0, 1)' // Green background with 20% opacity
                        : 'rgba(255, 0, 0, 1)', // Red background with 20% opacity
                    // color: '#FFD026', // Orange text color
                    
                    display: 'inline-block', // To align text center within the cell
                    padding: '6px 12px', // Adjust the padding to your preference
                    borderRadius: '8px', // Add a border radius of 8px
                  }}
                >
                  {row.stat}
                </div>
              </TableCell>
              <TableCell align="center">
              <IconButton
                onClick={() => {
                  window.location.href = `/dasbor/history/detail-history/${row.no}`;
                }}
              >
                <VisibilityIcon />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

