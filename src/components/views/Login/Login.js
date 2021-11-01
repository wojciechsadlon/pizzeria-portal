import React from 'react';
import styles from './Login.module.scss';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Login = () => (
  <Paper className={styles.component}>
    <Typography gutterBottom variant="h4" component="div">
        Login
    </Typography>
    <TextField id="outlined-basic" label="User" variant="outlined" />
    <TextField id="outlined-basic" label="Password" variant="outlined" />
    <Button className={styles.loginButton} variant="outlined" to={`${process.env.PUBLIC_URL}/waiter/order/`}>
      LOGIN
    </Button>
  </Paper>
);

export default Login;
