import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const booking = props;
  const bookingTime = booking.duration * 0.5;
  const tables = [1,2,3,4,5,6];

  return (
    <div>
      <Button onClick={handleOpen}>{booking.name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {booking.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {'Reservation: ' + booking.hour + ' for ' + bookingTime + ' hours'}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {'Table nr ' + booking.table}
          </Typography>
          <TextField id="outlined-basic" label={booking.name} variant="outlined" />
          <TextField
            id="choosenTable"
            select
            label="Table nr"
            value={booking.table}
            // onChange={handleChange}
          >
            {tables.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField id="outlined-basic" label={booking.hour} variant="outlined" />
          <Button variant="outlined">
            SAVE CHANGES
          </Button>
          <Button variant="outlined">
            DELETE BOOKING
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
