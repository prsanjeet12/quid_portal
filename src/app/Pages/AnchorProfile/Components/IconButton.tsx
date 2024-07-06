import React from 'react';
import { IconButton } from '@mui/material';
import Image from 'next/image';

// Define the styles for the icons



const IconButtons = () => (
  <>
  <IconButton className='bg-[#00A991] rounded-sm mr-2'>
    <Image
      src="/Frame (19).png"
      width={16}
      height={16}
      alt="icon"
    />
  </IconButton>
  <IconButton style={{ marginLeft: '32px' }}>
    <Image
      src="/Vector (4).png"
      width={25.40}
      height={18.20}
      alt="icon"
    />
  </IconButton>
</>
);

export default IconButtons;
