import React from 'react';
import {
  Container, Toolbar, Typography, Grid, Button, TextField,
  Table, TableHead, TableRow, TableCell, TableBody, Paper
} from '@mui/material';
import './Stock.css';
import TabInventory from './TabInventory';

function Purchasereturn() {

  return (
    <Container className="container">
      {/* Toolbar */}
      <Toolbar className="toolbar">
        <Typography variant="h6" className="flexGrow">
          Stock List
        </Typography>
        <Button variant="outlined" color="primary" className="exportButton">
          Export
        </Button>
      </Toolbar>

      {/* Summary Section */}
      <Paper elevation={1} className="summarySection">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography variant="body1" className="summaryItem">Unique Part Nos: 0</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" className="summaryItem">Total Stock Items: 0.00</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1" className="summaryItem">Stock Value: 0.00</Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Tabs Section */}
      <TabInventory />

      {/* Search Bar */}
      <TextField
        fullWidth
        variant="outlined"
        label="Search"
        className="searchBar"
      />

      {/* Stock Table */}
      <Paper elevation={1} className="tableContainer">
        <Table className="table">
          <TableHead className="tableHead">
            <TableRow className="tableRow">
              <TableCell className="tableCell">Order No.</TableCell>
              <TableCell className="tableCell">Inward No.</TableCell>
              <TableCell className="tableCell">Order Date</TableCell>
              <TableCell className="tableCell">Reg No.</TableCell>
              <TableCell className="tableCell">Job card No.</TableCell>
              <TableCell className="tableCell">Vendor Name</TableCell>
              <TableCell className="tableCell">Part Name</TableCell>
              <TableCell className="tableCell">Part No.</TableCell>
              <TableCell className="tableCell">Brand</TableCell>
              <TableCell className="tableCell">Until Price</TableCell>
              <TableCell className="tableCell">Return Date</TableCell>
              <TableCell className="tableCell">Reason</TableCell>
              <TableCell className="tableCell">Shipment</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Placeholder for empty data */}
            <TableRow className="tableRow">
              <TableCell colSpan={12} className="noData">
                No data available
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default Purchasereturn;
