import React from 'react';
import {
  Container, Toolbar, Typography, Grid, Button, TextField,
  Table, TableHead, TableRow, TableCell, TableBody, Paper,
} from '@mui/material';
// import TabInventory from './TabInventory';
import './Stock.css'

function Order() {
  return (
    <Container className="container">
    
    
        <Toolbar className="toolbar">
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Stock List
          </Typography>
          <Button variant="outlined" color="primary" style={{ marginLeft: 20 }}>
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

      {/* Tabs Section 
      <TabInventory />*/}

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
              <TableCell className="tableCell">Order Date</TableCell>
              <TableCell className="tableCell">Reg No.</TableCell>
              <TableCell className="tableCell">Job card No.</TableCell>
              <TableCell className="tableCell">Vendor Name</TableCell>
              <TableCell className="tableCell">Order Value</TableCell>
              <TableCell className="tableCell">Ordered Parts</TableCell>
              <TableCell className="tableCell">Rejected Parts</TableCell>
              <TableCell className="tableCell">Pending Parts</TableCell>
              <TableCell className="tableCell">cancel date</TableCell>
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

export default Order;
