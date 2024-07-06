// TopLayout.tsx

import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Card from '../../../Component/Card/Card';
import { Grid, Typography } from '@mui/material';

// Define types for the data
export interface Detail {
  label: string;
  value: string;
}

export interface TransformedItem {
  title: string;
  details: Detail[];
  layoutType: 'single-column' | 'two-column' | 'three-column';
}

// Dummy data
const dummyData: TransformedItem[] = [
  {
    title: 'Anchor Details',
    details: [
      { label: 'ANCHOR NAME', value: 'Intelligent Pvt Ltd' },
      { label: 'ANCHOR POC', value: 'Shreyansh' },
      { label: 'ANCHOR CREATED DATE', value: '01 Jan, 2024' },
      { label: 'ANCHOR ID', value: 'Ripplr_234567' },
      { label: 'REGISTERED NO.', value: '+91 95647 76550' },
      { label: 'CATEGORY', value: 'Electronics | Mobile Phones' }
    ],
    layoutType: 'two-column'
  },
  {
    title: 'QuID POC',
    details: [
      { label: 'QUID SALES POC', value: 'Naveen' },
      { label: 'QUID PORTFOLIO MANAGER', value: 'Rahul Ramesh' }
    ],
    layoutType: 'single-column'
  },
  {
    title: 'Address',
    details: [
      { label: 'BUSINESS ADDRESS', value: 'QuiD Pvt Ltd, # 3 floor, Kris..' },
      { label: 'CITY & STATE', value: 'Bangalore | Karnataka' },
      { label: 'PIN CODE', value: '560090' }
    ],
    layoutType: 'single-column'
  }
];

const TopRow = styled('div')({
  display: 'grid',
  gridTemplateColumns: '2.3fr 0.9fr 1.3fr',
  gap: '16px',
});

const TopLayout: React.FC = () => {
  const [data, setData] = useState<TransformedItem[]>([]);

  useEffect(() => {
    setData(dummyData);
  }, []);

  useEffect(() => {
    console.log('Data state updated:', data);
  }, [data]);

  return (
    <TopRow data-testid="top-row">
      {data.map((item, index) => (
        <Card key={index} title={item.title}>
          <Grid container spacing={1}>
            {item.details.map((detail, i) => (
              <Grid
                item
                xs={12}
                sm={
                  item.layoutType === 'three-column' ? 4 :
                  item.layoutType === 'two-column' ? 6 :
                  12
                }
                key={i}
              >
                <Typography
                  variant="body1"
                  className="mt-2 text-[13px] text-blackColor"
                  style={{ fontWeight: 500 }}
                >
                  <span className="text-[#95A2A6]">{detail.label}:</span> {detail.value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Card>
      ))}
    </TopRow>
  );
};

export default TopLayout;
