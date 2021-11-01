import React from 'react';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DatePicker, TimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import BasicModal from '../../layout/Modal/Modal';


const demoBookings = [
  {tableId: 3, hour: '16:30', name: 'George Burns', id: 987, bookLength: 1},
  {tableId: 1, hour: '15:00', name: 'Olivia Newton', id: 154, bookLength: 2},
  {tableId: 5, hour: '12:30', name: 'Mariano Stefano', id: 956, bookLength: 3},
  {tableId: 6, hour: '14:00', name: 'Ethan Someguy', id: 852, bookLength: 2},
];
const demoEvents = [
  {tableId: 3, hour: '16:30', name: 'George Burns', id: 357, bookLength: 1},
  {tableId: 1, hour: '15:00', name: 'Olivia Newton', id: 159, bookLength: 2},
  {tableId: 5, hour: '12:30', name: 'Mariano Stefano', id: 753, bookLength: 3},
  {tableId: 6, hour: '14:00', name: 'Ethan Someguy', id: 146, bookLength: 2},
];

const bookSlots = ['12:00', '12:30', '13:00', '13:30','14:00','14:30','15:00','15:30','16:00','16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];

const tables = [1,2,3,4,5,6];

const Tables = () => (
  <>
    <Paper className={styles.component}>
      <Typography gutterBottom variant="h4" component="div">
        Bookings
      </Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          label="Choose a date"
          // value={value}
          // onChange={(newValue) => {
          //   setValue(newValue);
          // }}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Choose time"

        />
      </MuiPickersUtilsProvider>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour slot</TableCell>
            {tables.map(table => (
              <TableCell key={table}>
                {'Table ' + table}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bookSlots.map(row => (
            <TableRow key={row}>
              <TableCell>
                {row}
              </TableCell>
              {tables.map(table => (
                <TableCell key={table}>
                  {demoBookings.map(booking => {
                    if(booking.hour === row && table === booking.tableId){
                      return (
                        <BasicModal
                          key={booking.id}
                          hour={booking.hour}
                          duration={booking.bookLength}
                          name={booking.name}
                          table={table} />
                      );
                    } else if (booking.hour !== row && table === booking.tableId) {
                      return (
                        <BasicModal
                          name={'BOOK TABLE'}
                          table={table} />
                      );
                    }
                  })}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <Paper className={styles.component}>
      <Typography gutterBottom variant="h4" component="div">
        Events
      </Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          label="Choose a date"
          // value={value}
          // onChange={(newValue) => {
          //   setValue(newValue);
          // }}
          renderInput={(params) => <TextField {...params} />}
        />
        <TimePicker
          label="Choose time"

        />
      </MuiPickersUtilsProvider>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour slot</TableCell>
            {tables.map(table => (
              <TableCell key={table}>
                {'Table ' + table}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bookSlots.map(row => (
            <TableRow key={row}>
              <TableCell>
                {row}
              </TableCell>
              {tables.map(table => (
                <TableCell key={table}>
                  {demoEvents.map(booking => {
                    if(booking.hour === row && table === booking.tableId){
                      return (
                        <BasicModal
                          key={booking.id}
                          hour={booking.hour}
                          duration={booking.bookLength}
                          name={booking.name}
                          table={table} />
                      );
                    } else if (booking.hour !== row && table === booking.tableId) {
                      return (
                        <BasicModal
                          key={booking.id}
                          name="EMPTY"
                          table={table} />
                      );
                    }
                  })}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </>
);

export default Tables;

