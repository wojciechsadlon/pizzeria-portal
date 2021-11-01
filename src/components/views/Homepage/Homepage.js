import React from 'react';
import styles from './Homepage.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@mui/material/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const dailyOrderCounter = {
  locally: 5,
  remotely: 17,
};

const todayBookings = [
  {tableId: 3, hour: '16:30', name: 'George Burns', id: 357, bookLength: 1},
  {tableId: 1, hour: '15:00', name: 'Olivia Newton', id: 159, bookLength: 2},
  {tableId: 5, hour: '12:30', name: 'Mariano Stefano', id: 753, bookLength: 3},
  {tableId: 6, hour: '14:00', name: 'Ethan Someguy', id: 146, bookLength: 2},
];
const todayEvents = [
  {tableId: 3, hour: '16:30', name: 'George Burns', id: 357, bookLength: 1},
  {tableId: 1, hour: '15:00', name: 'Olivia Newton', id: 159, bookLength: 2},
  {tableId: 5, hour: '12:30', name: 'Mariano Stefano', id: 753, bookLength: 3},
  {tableId: 6, hour: '14:00', name: 'Ethan Someguy', id: 146, bookLength: 2},
];

const Homepage = () => (
  <Paper className={styles.component}>
    <Typography gutterBottom variant="h4" component="div">
        Todays statistics
    </Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Local orders</TableCell>
          <TableCell>Remote orders</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{dailyOrderCounter.locally}</TableCell>
          <TableCell>{dailyOrderCounter.remotely}</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <Typography gutterBottom variant="h4" component="div">
        Todays bookings and events
    </Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Bookings</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {todayBookings.map(booking => {
          return (
            <TableRow key={booking.id}>
              <TableCell>
                {booking.name + ' from ' + booking.hour}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Events</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {todayEvents.map(booking => {
          return (
            <TableRow key={booking.id}>
              <TableCell>
                {booking.name + ' from ' + booking.hour}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);

export default Homepage;
