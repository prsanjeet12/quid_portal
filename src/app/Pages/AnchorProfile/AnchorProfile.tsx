// Layout.tsx
import React from 'react';
import { styled } from '@mui/system';
import TopLayout from './Components/TopLayout';
import BottomLayout from './Components/BottomLayout';

const Container = styled('div')({
  display: 'grid',
  gridTemplateRows: ' 1fr',
  gap: '16px',
  height: '100%',
});

const Layout: React.FC = () => {
  return (
    <Container>
      <TopLayout />
      <BottomLayout />
    </Container>
  );
};

export default Layout;
