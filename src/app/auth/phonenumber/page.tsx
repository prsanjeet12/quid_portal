import React from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center relative">
      <div className="absolute top-0 left-0">
        <Image
          src="/Ellipse 116.png"
          alt="Top Left Image"
          width={400}
          height={500}
          layout="fixed"
          objectFit="contain"
        />
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <div className="relative w-[83.44px] h-[84px]">
          <Image
            src="/Logo Icon.png"
            alt="Centered Icon"
            width={83.44}
            height={84}
            layout="fixed"
            className="w-[83.44px] h-[84px]"
          />
        </div>
        <div>
          <p className="font-medium text-6xl text-baseColor">QuID</p>
        </div>
      </div>

      <h1 className="text-[44px] font-semibold leading-[50.48px] mt-2 text-center text-blackColor">Welcome</h1>
      <p className="text-lg mt-4 mb-10 text-[#95A2A6]">Hello there, Log In...</p>

      <div className="rounded-xl h-[272px] bg-white shadow-lg p-4 mt-4 w-[578px]">
        <p className="text-[#133039] font-medium text-[24px] mb-8">Log In with Phone Number</p>

        <TextField
          variant="outlined"
          fullWidth
          placeholder="Enter your phone number"
          InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
            style: {
              borderRadius: '13px 16px 13px 16px',
              border: '0.5px solid #DCE0E1',
              padding: '8px 16px',
              gap: '10px',
            },
          }}
          sx={{
            mb: 6,
            '& .MuiOutlinedInput-root': {
              height: '60px',
              '& fieldset': {
                borderColor: '#DCE0E1',
              },
              '&:hover fieldset': {
                borderColor: '#DCE0E1',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#DCE0E1',
              },
            },
          }}
        />


        {/* Customized Submit Button */} <Button
          className=""
          variant="outlined"
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: 55,
            color: 'white',
            backgroundColor: '#00A897',
            borderRadius: '24px',
            border: '1px solid #DCE0E1',
            padding: '13px 16px',
            gap: '10px',
          }}
        >
          Send OTP
        </Button>
      </div>

      <div className="absolute top-0 right-0 bottom-0 flex items-center pointer-events-none">
        <div className="mr-0 h-[600px]">
          <Image
            src="/Ellipse 117.png"
            alt="Right Image"
            width={300}
            height={400}
            layout="fixed"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
