"use client";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Dropdown from './DropDown/DropDown';
import { MenuItem, RadioGroup } from '@mui/material';
import ActionButtons from './ActionButton/ActionButton';

const Header: React.FC = () => {
  const radioItems = [
    { value: 'radio1', label: 'Intelligent Retail' },
    { value: 'radio2', label: 'Joule' },
    { value: 'radio3', label: 'Tyreplex' },
  ];

  return (
    <AppBar position="sticky" className="bg-white text-black shadow-lg">
      <Toolbar className="min-h-[64px] flex justify-between items-center">
        <div className="flex items-center ml-6">
          <Typography className="text-[24px]">
            <span className="text-gray-400">Anchor:</span> Intelligent Retail
          </Typography>
          <Dropdown
            triggerElement={
              <Image src="/Polygon 5.png" alt="Dropdown Icon" width={17} height={10} className="ml-5 cursor-pointer" />
            }
          >
            <div style={{ width: '300px' }}>
              <ActionButtons type="search" placeholder="Search" style={{ marginBottom: '10px' }} />
              <RadioGroup>
                {radioItems.map((item, index) => (
                  <ActionButtons key={index} type="radio" value={item.value} label={item.label} checked={false} />
                ))}
              </RadioGroup>
            </div>
          </Dropdown>
        </div>
        <div className="flex items-center">
          <nav>
            <ul className="flex list-none m-0 p-0">
              <li className="mx-6 mt-2">
                <Image src="/Notification (1).png" alt="Notification Icon" width={24} height={24} className="ml-5" />
              </li>
              <li className="mx-4 flex items-center">
                <Image src="/Ellipse 1 (1).png" alt="User" width={40} height={40} className="ml-1" />
                <div className="ml-2">
                  <Typography className="text-[#011627] font-semibold text-[16px]">admin@quidcash.in</Typography>
                </div>
                <Dropdown
                  triggerElement={
                    <Image src="/Vector (2).png" alt="Dropdown Icon" width={12} height={6} className="ml-10 cursor-pointer" />
                  }
                >
                  <div>
                    <MenuItem onClick={() => console.log('Admin Setting clicked')}>Admin Setting</MenuItem>
                    <MenuItem onClick={() => console.log('Logout clicked')}>Logout</MenuItem>
                  </div>
                </Dropdown>
              </li>
            </ul>
          </nav>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
