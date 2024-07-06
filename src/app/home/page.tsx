"use client"
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Sidebar from '../Component/SideBar';
import Header from '../Component/Header';
import Profile from '../Component/Profile';
import AnchorProfile from '../Pages/AnchorProfile/AnchorProfile'
import Application from '../Pages/Appllcations/Application';



const theme = createTheme();

const Page = () => {
  const [activeItem, setActiveItem] = useState('HomeScreen'); 

  const handleSetActiveItem = (item:any) => {
    setActiveItem(item);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="flex min-h-screen">
        <Sidebar activeItem={activeItem} setActiveItem={handleSetActiveItem} />
        <main className="flex-1">
          <Header />
          <div className="p-8">
        
            {activeItem === 'Anchor Profile' ? <AnchorProfile /> :
             activeItem === 'Applications' ? <Application /> :
             <Profile />}
          </div>
        </main>
      </div>
    </ThemeProvider>
  
  );
};

export default Page;
