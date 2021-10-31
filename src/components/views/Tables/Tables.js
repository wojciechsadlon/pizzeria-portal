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

const demoBookings = [
  {tableId: 3, hour: '16:30', name: 'George Burns', bookLength: 1},
  {tableId: 1, hour: '15:00', name: 'Olivia Newton', bookLength: 2},
  {tableId: 5, hour: '12:30', name: 'Mariano Stefano', bookLength: 3},
  {tableId: 6, hour: '14:00', name: 'Ethan Someguy', bookLength: 2},
];

const bookSlots = ['12:00', '12:30', '13:00', '13:30','14:00','14:30','15:00','15:30','16:00','16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30'];

const checkBooking = (time, table) => {
  demoBookings.forEach(booking => {

    for(let book in booking){
      if(time === book.hour && table === book.tableId)
        return book.name;
      else
        return 'free';
    }
  });
};



const tablesCount = 6;

const tableRowRender = (tablesCount, row) => {
  if(row != null)
    for (let i = 0; i < tablesCount + 1; i++){
      const key = i + 1;
      return(
        <TableCell>
          {checkBooking(row, key)}
        </TableCell>);
    }

  if(row === null)
    for (let i = 0; i < tablesCount + 1; i++){
      const key = i + 1;
      return(
        <TableCell>
          {'Table ' + key}
        </TableCell>
      );
    }
};

const Tables = () => (
  <Paper className={styles.component}>
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
          {tableRowRender(tablesCount, null)}
        </TableRow>
      </TableHead>
      <TableBody>
        {bookSlots.map(row => (
          <TableRow key={row}>
            <TableCell>
              {row}
            </TableCell>
            {tableRowRender(tablesCount, row)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Tables;

