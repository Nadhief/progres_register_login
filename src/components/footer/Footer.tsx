import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <div>
      <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 5,
          }}
          >
        <Image src="/xx.png" alt="My Image" width={100} height={50} />
          <h5 style={{ textAlign: 'center', fontWeight: '300', color: 'grey', paddingTop: 10 }}>© Official website BPSDM Jawa Barat 2023</h5>
        </Box>
    </div>
  );
};

export default Footer;