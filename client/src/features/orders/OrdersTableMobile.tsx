import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button, Typography } from "@mui/material"
import { Order } from "../../app/models/order";
import React from "react";

interface Props {
  orders: Order[] | null;
}

const OrdersTableMobile = ({orders}:Props) => {
  return(
    <TableContainer component={Paper} sx={{maxHeight: '90vh'}}>
      <Table stickyHeader aria-label="list of orders">
        <TableHead>
          <TableRow>
            <TableCell align='center' colSpan={4}>
              <Typography variant='h6'>Your Orders</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((order) => (
            <React.Fragment key={order.id}>
              <TableRow hover>
                <TableCell align='left'>
                  Order Number:
                </TableCell>
                <TableCell align='left'>
                  {order.id}
                </TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell align="left">Total</TableCell>
                <TableCell align="left">${order.total.toFixed(2)}</TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">{order.date.split('T')[0]}</TableCell>
              </TableRow>
              <TableRow hover>
                <TableCell align="left">Order Status</TableCell>
                <TableCell align="left">{order.orderStatus}</TableCell>
              </TableRow>
              <TableRow sx={{ mb: 5 }}> 
                  <TableCell colSpan={4}>
                    <Button variant='outlined' fullWidth >View</Button>
                  </TableCell>
              </TableRow>
            </React.Fragment>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OrdersTableMobile;