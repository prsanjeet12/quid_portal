"use client"
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const HomeScreen: React.FC = () => {
  return (
    <Box
      className='border-gray-200 border-2'
      sx={{
        width: { xs: '100%',  },
        height: { xs: '150px', },
        borderRadius: '16px',
        opacity: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        paddingLeft: { xs: '10px', md: '20px' },
        paddingTop: { xs: '10px', md: '0' },
        paddingBottom: { xs: '10px', md: '0' },
      }}
    >
      <Box
        className="border-2 border-gray-200"
        sx={{
          width: { xs: '100%', md: '154px' },
          height: '111px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '8px',
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Image
          src="/Logo Icon.png"
          width={48}
          height={48}
          alt="Logo"
        />
        <Typography className='ml-1 text-4xl font-medium text-baseColor' sx={{ display: { xs: 'none', md: 'block' } }}>QuID</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: { xs: '0', md: '20px' },
          marginTop: { xs: '10px', md: '0' },
          width: { xs: '100%', md: 'auto' },
          justifyContent: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            marginLeft: { xs: '0', md: '20px' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="body1" sx={{ marginBottom: '4px', fontSize: { xs: '20px', md: '24px' }, fontWeight: 'medium', color: 'text.baseColor' }}>QuID Social Private Limited</Typography>
          <Typography variant="body2" sx={{ marginBottom: '4px', fontSize: { xs: '14px', md: '16px' } }}><span className='text-gray-400'>QuID ID:</span> QuID_234567</Typography>
          <Typography variant="body2" sx={{ marginBottom: '4px', fontSize: { xs: '14px', md: '16px' } }}><span className='text-gray-400'>Registered Phone no.:</span> +91 83535 45006</Typography>
          <Typography variant="body2" sx={{ fontSize: { xs: '14px', md: '16px' } }}><span className='text-gray-400'>Email id:</span> admin@quidcash.in</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeScreen;
