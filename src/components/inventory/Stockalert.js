import React from 'react';
import {
  Container, Toolbar, Typography, Grid, Button, TextField,
  Table, TableHead, TableRow, TableCell, TableBody, Paper
} from '@mui/material';
import './Stock.css';
import TabInventory from './TabInventory';

function Stockalert() {

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
              <TableCell className="tableCell">Job card No.</TableCell>
              <TableCell className="tableCell">Vehicle No.</TableCell>
              <TableCell className="tableCell">Vendor Name</TableCell>
              <TableCell className="tableCell">Inward No.</TableCell>
              <TableCell className="tableCell">Inward Date</TableCell>
              <TableCell className="tableCell">Purchase Price</TableCell>
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

export default Stockalert;
