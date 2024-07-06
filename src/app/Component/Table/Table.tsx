import React, { ReactNode } from 'react';
import { Table as MuiTable, TableContainer, TableProps as MuiTableProps,Paper } from '@mui/material';

interface TableProps extends MuiTableProps {
  containerStyle?: React.CSSProperties;
  actionButtons?: React.ReactNode;
  children: ReactNode;
}

const Table: React.FC<TableProps> = ({ containerStyle, actionButtons, children, ...props }) => (
  <TableContainer component={Paper} style={{ border: '2px solid #D9DCDF', borderRadius: '16px', ...containerStyle }}>
    {actionButtons && <div style={{ padding: '16px' }}>{actionButtons}</div>}
    <MuiTable size="medium" {...props} >
      {children}
    </MuiTable>
  </TableContainer>
);


export default Table;
