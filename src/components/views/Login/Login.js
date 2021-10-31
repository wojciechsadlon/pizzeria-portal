import React from 'react';
import styles from './Login.module.scss';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@mui/material/TextField';


const Login = () => (
  <Paper className={styles.component}>
    <h2>Login view</h2>
    <TextField id="outlined-basic" label="User" variant="outlined" />
    <TextField id="outlined-basic" label="Password" variant="outlined" />
    <Button to={`${process.env.PUBLIC_URL}/waiter/order/`}>
      LOGIN
    </Button>
  </Paper>
);

export default Login;
