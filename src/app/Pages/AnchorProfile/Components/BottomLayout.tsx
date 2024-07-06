import React, { useState } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Grid, TableHead, TableBody, TableRow, TableCell, Checkbox } from '@mui/material';
import Card from '../../../Component/Card/Card';
import { bottomLayoutData } from '../../../data';
import Image from 'next/image';
import ActionButtons from '../../../Component/ActionButton/ActionButton';
import IconButtons from './IconButton';
import Table from '../../../Component/Table/Table';

const BottomRow = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: '18px',
  marginTop: '16px',
});

const FirstColumnInBottomRow = styled('div')({
  display: 'grid',
  gridTemplateRows: 'repeat(3, minmax(70px, auto))',
  gap: '21px',
  maxHeight: '540px',
});

const SecondColumnInBottomRow = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  height: '100%'
});

const TextsContainer = styled('div')({
  display: 'flex',
  alignItems: 'end',
  padding: '16px',
  position: 'relative',
});

const Line = styled('div')<{ active: boolean }>(({ active }) => ({
  width: '148px',
  height: active ? '4px' : '1px',
  borderRadius: active ? '4px 4px 0 0' : '0',
  backgroundColor: active ? '#00A991' : 'transparent',
  borderTop: active ? 'none' : '2px solid #C0C5C9',
  position: 'absolute',
  bottom: '-4px',
  left: '20px',
  transition: 'opacity 0.3s',
}));

const programSizeData = [
  { label: 'Credit Limit', value: '₹1,40,000 / ₹2,00,000' },
  { label: 'Subvention by anchor', value: '0' },
  { label: 'Platform fees', value: '0' },
  { label: 'Interest Rate for Retailers', value: '22-24' },
  { label: 'Penal Interest', value: '0' },
  { label: 'Processing fee', value: '0' },
  { label: 'Credit Tenure', value: '60' },
  { label: 'Subverted days', value: '15' },
  { label: 'Interest bearing days', value: '45' },
];

const interestScheduleData = [
  { no: 1, days: 30, interestPerDay: 0.05, interestPerAnnum: 18 },
  { no: 2, days: 60, interestPerDay: 0.04, interestPerAnnum: 15 },
];

const anchorDocumentsData = [
  {
    title: "COMPANY KYC DOCUMENTS",
    documents: [
      { no: 1, name: "Company PAN" },
      { no: 2, name: "AoA" },
      { no: 3, name: "MoA" },
      { no: 4, name: "CoI" },
      { no: 5, name: "Shareholding Pattern Document" },
      { no: 6, name: "GST Certificate" },
    ],
  },
  {
    title: "INDIVIDUAL KYC DOCUMENTS",
    documents: [
      { no: 1, name: "PAN" },
      { no: 2, name: "Aadhar Front & Back" },
    ],
  },
  {
    title: "FINANCIALS",
    documents: [
      { no: 1, name: "GST Karza" },
      { no: 2, name: "Bank Statement" },
    ],
  },
  {
    title: "OTHERS (BY QUID)",
    documents: [
      { no: 1, name: "MSA - Agreement" },
      { no: 2, name: "Anchor Profile" },
    ],
  },
];

const TabItem: React.FC<{ label: string, active: boolean, onClick: () => void }> = ({ label, active, onClick }) => (
  <div style={{ position: 'relative', marginLeft: "40px" }}>
    <Typography
      className="text-blackColor font-semibold mb-2 ml-8 text-[15px] cursor-pointer"
      onClick={onClick}
    >
      {label}
    </Typography>
    <Line active={active} />
  </div>
);

const BottomLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>('programDetails');

  const data = bottomLayoutData.map(item => ({
    title: item.title,
    details: item.values,
    layoutType: item.layoutType
  }));

  const interestHeadCells = ['#', 'NO OF DAYS', 'Interest % (per day)', 'Interest % (per annum)'];
  const interestBodyRows = interestScheduleData.map(row => [row.no, row.days, row.interestPerDay, row.interestPerAnnum]);

  const anchorHeadCells = ['#', 'Document Name', 'Actions'];
  const anchorBodyRows = anchorDocumentsData.flatMap(section => [
    [{ colSpan: 3, style: { backgroundColor: '#E6F6F5', paddingLeft: '1rem', fontWeight: 'bold' }, content: section.title }],
    ...section.documents.map(doc => [doc.no, doc.name, <IconButtons key={doc.no} />])
  ]);

  return (
    <>
      <BottomRow>
        <FirstColumnInBottomRow>
          {data.slice(0, 3).map((item, index) => (
            <Card key={index} title={item.title}>
              <Grid container spacing={1}>
                {item.title === "Brands" ? (
                  <Grid item xs={12} style={{ display: 'flex', gap: '0' }}>
                    {item.details.map((detail, i) => (
                      <div key={i} style={{ marginRight: '8px' }}>
                        <Image
                          src={detail.value}
                          alt={detail.label}
                          width={19}
                          height={20}
                        />
                      </div>
                    ))}
                  </Grid>
                ) : (
                  item.details.map((detail, i) => (
                    <Grid
                      item
                      xs={item.layoutType === 'two-column' ? 6 : 12}
                      key={i}
                    >
                      <Typography variant="body1" className='mt-2 text-[13px] text-blackColor' style={{ fontWeight: 500 }}>
                        <span className='text-[#95A2A6]'>{detail.label}:</span> {detail.value}
                      </Typography>
                    </Grid>
                  ))
                )}
              </Grid>
            </Card>
          ))}
        </FirstColumnInBottomRow>
        <SecondColumnInBottomRow>
          <TextsContainer>
            <TabItem label="Program Details" active={activeTab === 'programDetails'} onClick={() => setActiveTab('programDetails')} />
            <TabItem label="Anchor Documents" active={activeTab === 'anchorDocuments'} onClick={() => setActiveTab('anchorDocuments')} />
          </TextsContainer>
          {activeTab === 'programDetails' && (
            <>
              <Card title="PROGRAM SIZE">
                <Grid container spacing={1}>
                  {programSizeData.map((detail, i) => (
                    <Grid item xs={4} key={i}>
                      <Typography variant="body1" className='mt-8 text-[14px]' style={{ fontWeight: 500 }}>
                        <span className='text-[#95A2A6]'>{detail.label}<br /></span>
                        {detail.value}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Card>
              <Typography className="text-blackColor mb-2 font-semibold text-[15px]">INTEREST SCHEDULED</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    {interestHeadCells.map((cell, index) => (
                      <TableCell key={index} style={{ color: '#95A2A6' }}>
                        {cell}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {interestBodyRows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <TableCell key={cellIndex} style={{ color: '#133039', fontWeight:500 }}>
                          {cell}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </>
          )}
          {activeTab === 'anchorDocuments' && (
            <>
              <Table actionButtons={<ActionButtons type="search" placeholder="Search" style={{ marginLeft: '15px', width: '400px' }} />}>
                <TableHead>
                  <TableRow>
                    {anchorHeadCells.map((cell, index) => (
                      <TableCell key={index} style={{ color: '#95A2A6' }}>
                        {cell}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {anchorDocumentsData.map((section, sectionIndex) => (
                    <React.Fragment key={sectionIndex}>
                      <TableRow>
                        <TableCell colSpan={3} style={{ backgroundColor: '#E6F6F5', paddingLeft: '1rem', fontWeight: 800,color:'#133039', 
                         }}>
                          {section.title}
                        </TableCell>
                      </TableRow>
                      {section.documents.map((doc, docIndex) => (
                        <TableRow key={docIndex}  >
                          <TableCell style={{fontSize:'13px',fontWeight:500,}}>{doc.no}</TableCell>
                          <TableCell style={{fontSize:'13px',fontWeight: 500,}}>{doc.name}</TableCell>
                          <TableCell>
                            <IconButtons />
                          </TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </>
          )}
        </SecondColumnInBottomRow>
      </BottomRow>
    </>
  );
};

export default BottomLayout;
