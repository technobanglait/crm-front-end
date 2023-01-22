import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const CustomerList = () => {
    return (
        <TableContainer>
        <Table sx={{ minWidth: 2500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width="130px">Customer ID</TableCell>
              <TableCell width="150px">Customer CODE</TableCell>
              <TableCell align="center"  width="200px">Customer Name</TableCell>
              <TableCell align="center" width="150px">Customer Type</TableCell>
              <TableCell align="center" width="200px">Email</TableCell>
              <TableCell align="center" width="200px">Address</TableCell>
              <TableCell align="center" width="">Latitude</TableCell>
              <TableCell align="center" width="">Longitude</TableCell>
              <TableCell align="center" width="200px">Mobile No</TableCell>
              <TableCell align="center" width="150px">Telephone No</TableCell>
              <TableCell align="center" width="150px">Credit Limit</TableCell>
              <TableCell align="center" width="150px">Credit Days</TableCell>
              <TableCell align="center" width="200px">Owner Name</TableCell>
              <TableCell align="center" width="150px">Zone Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default CustomerList;